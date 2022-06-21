import { useState } from "react";
import { SwapLeftOutlined, SwapRightOutlined } from "@ant-design/icons";

import { AnimatePresence, motion } from "framer-motion";
import { Images } from "../../Images";

export function Modalities() {
  const [gymModality, setGymModality] = useState<number>(1);

  const changeNextModality = () => {
    setGymModality(gymModality === 5 ? 1 : gymModality + 1);
  };

  const changePreviousModality = () => {
    setGymModality(gymModality === 1 ? 5 : gymModality - 1);
  };

  return (
    <div
      style={{ backgroundImage: `url('/assets/modality${gymModality}.jpg')` }}
      className="bg-no-repeat bg-cover bg-fixed "
    >
      <div className="backdrop-blur-lg bg-black bg-opacity-70 w-full h-full flex flex-col items-center justify-center pb-9">
        <h2 className="text-shadow font-black text-brand-white text-4xl my-7">
          Modalidades
        </h2>

        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center justify-center">
            <SwapLeftOutlined
              onClick={changePreviousModality}
              className="text-brand-yellow text-6xl leading-3 mr-10 rounded-full  cursor-pointer opacity-70 transition-all duration-200  shadow-lg shadow-[#000000bb] hover:opacity-100 active:shadow-inner active:shadow-[#000000bb]"
            />

            <div
              className="grid grid-cols-none items-center justify-center gap-5 "
              style={{ gridTemplateAreas: "content" }}
            >
              <motion.div
                key={gymModality}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="w-80 h-52 flex-col mb-[-15.5rem] "
              >
                <span className="mb-4 flex items-center justify-center bg-brand-yellow rounded-xl p-3 font-black text-lg text-[#000000f1] shadow-[#00000085]">
                  {Images.modalities[gymModality - 1].title}
                </span>

                <span className="text-brand-white">
                  {Images.modalities[gymModality - 1].description}
                </span>
              </motion.div>
              <AnimatePresence>
                <motion.img
                  key={gymModality}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                  src={`/assets/modality${gymModality}.jpg`}
                  alt="gymImage"
                  className="w-[35.9rem] h-[23.2rem] shadow-md shadow-[#00000085] rounded-2xl"
                  style={{ gridArea: "content" }}
                />
              </AnimatePresence>
            </div>

            <SwapRightOutlined
              onClick={changeNextModality}
              className="text-brand-yellow text-6xl leading-3 ml-10 rounded-full cursor-pointer opacity-70 transition-all duration-200  shadow-lg shadow-[#000000bb] hover:opacity-100 active:shadow-inner active:shadow-[#000000bb]"
            />
          </div>

          <div className="flex items-center justify-center gap-6 mt-5 z-20">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`w-4 h-4 border-2 border-solid border-brand-yellow rounded-full cursor-pointer transition-colors duration-200 ${
                  gymModality === i ? "bg-brand-yellow" : "bg-none"
                }`}
                onClick={() => setGymModality(i)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
