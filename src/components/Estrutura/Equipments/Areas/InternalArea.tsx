import { useState } from "react";

import { SwapLeftOutlined, SwapRightOutlined } from "@ant-design/icons";

import { Images } from "../../../../Images";
import { AnimatePresence, motion } from "framer-motion";

export function InternalArea() {
  const [internalEquipment, setInternalEquipment] = useState<number>(1);

  const changeNextEquipment = () => {
    setInternalEquipment(internalEquipment === 5 ? 1 : internalEquipment + 1);
  };

  const changePreviousEquipment = () => {
    setInternalEquipment(internalEquipment === 1 ? 5 : internalEquipment - 1);
  };

  return (
    <div
      style={{
        backgroundImage: `url('/assets/${
          Images.internalEquipments[internalEquipment - 1].image
        }')`,
      }}
      className="bg-no-repeat bg-cover bg-fixed "
    >
      <div className="pt-[5.5rem] pb-10 backdrop-blur-md bg-black bg-opacity-70 w-full h-full flex flex-col items-center justify-center">
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center justify-center">
            <SwapLeftOutlined
              onClick={changePreviousEquipment}
              className="text-brand-yellow text-6xl leading-3 mr-10 rounded-full  cursor-pointer opacity-70 transition-all duration-200  shadow-lg shadow-[#000000bb] hover:opacity-100 active:shadow-inner active:shadow-[#000000bb]"
            />

            <div
              className="grid items-center justify-center"
              style={{ gridTemplateAreas: "content" }}
            >
              <AnimatePresence>
                <motion.img
                  key={internalEquipment}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                  src={`/assets/${
                    Images.internalEquipments[internalEquipment - 1].image
                  }`}
                  alt="internalEquipment"
                  className="w-[41.1rem] h-[27rem] shadow-md shadow-[#00000085] rounded-2xl"
                  style={{ gridArea: "content" }}
                />
              </AnimatePresence>
            </div>

            <SwapRightOutlined
              onClick={changeNextEquipment}
              className="text-brand-yellow text-6xl leading-3 ml-10 rounded-full  cursor-pointer opacity-70 transition-all duration-200  shadow-lg shadow-[#000000bb] hover:opacity-100 active:shadow-inner active:shadow-[#000000bb]"
            />
          </div>

          <div className="flex items-center justify-center gap-5 mt-5 z-50">
            {Images.internalEquipments.map((equipment) => (
              <img
                key={equipment.id}
                src={`/assets/${equipment.image}`}
                alt="internalEquipment"
                onClick={() => setInternalEquipment(equipment.id)}
                className={`w-28 h-24 shadow-md shadow-[#00000085] rounded-xl cursor-pointer transition-opacity duration-300 ${
                  internalEquipment === equipment.id
                    ? "opacity-100"
                    : "opacity-40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
