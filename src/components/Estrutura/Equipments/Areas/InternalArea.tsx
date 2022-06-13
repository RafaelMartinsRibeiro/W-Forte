import { useState } from "react";
import { SwapLeftOutlined, SwapRightOutlined } from "@ant-design/icons";

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
        backgroundImage: `url('/assets/internalEquipment${internalEquipment}.jpg')`,
      }}
      className="bg-no-repeat bg-cover bg-fixed "
    >
      <div className="pt-[4.5rem] pb-10 backdrop-blur-md bg-black bg-opacity-70 w-full h-full flex flex-col items-center justify-center">
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center justify-center">
            <SwapLeftOutlined
              onClick={changePreviousEquipment}
              className="text-brand-yellow text-6xl leading-3 mr-10 rounded-full  cursor-pointer opacity-70 transition-all duration-200  shadow-lg shadow-[#000000bb] hover:opacity-100 active:shadow-inner active:shadow-[#000000bb]"
            />

            <img
              src={`/assets/internalEquipment${internalEquipment}.jpg`}
              alt="internalEquipment"
              className="w-[41.1rem] h-[27rem] shadow-md shadow-[#00000085] rounded-2xl"
            />

            <SwapRightOutlined
              onClick={changeNextEquipment}
              className="text-brand-yellow text-6xl leading-3 ml-10 rounded-full  cursor-pointer opacity-70 transition-all duration-200  shadow-lg shadow-[#000000bb] hover:opacity-100 active:shadow-inner active:shadow-[#000000bb]"
            />
          </div>

          <div className="flex items-center justify-center gap-5 mt-5">
            <img
              src="/assets/internalEquipment1.jpg"
              alt="internalEquipment"
              onClick={() => setInternalEquipment(1)}
              className={`w-28 h-24 shadow-md shadow-[#00000085] rounded-xl cursor-pointer transition-opacity duration-300 ${
                internalEquipment === 1 ? "opacity-100" : "opacity-40"
              }`}
            />
            <img
              src="/assets/internalEquipment2.jpg"
              alt="internalEquipment"
              onClick={() => setInternalEquipment(2)}
              className={`w-28 h-24 shadow-md shadow-[#00000085] rounded-xl cursor-pointer transition-opacity duration-300 ${
                internalEquipment === 2 ? "opacity-100 " : "opacity-40 "
              }`}
            />
            <img
              src="/assets/internalEquipment3.jpg"
              alt="internalEquipment"
              onClick={() => setInternalEquipment(3)}
              className={`w-28 h-24 shadow-md shadow-[#00000085] rounded-xl cursor-pointer transition-opacity duration-300 ${
                internalEquipment === 3 ? "opacity-100" : "opacity-40"
              }`}
            />
            <img
              src="/assets/internalEquipment4.jpg"
              alt="internalEquipment"
              onClick={() => setInternalEquipment(4)}
              className={`w-28 h-24 shadow-md shadow-[#00000085] rounded-xl cursor-pointer transition-opacity duration-300 ${
                internalEquipment === 4 ? "opacity-100" : "opacity-40"
              }`}
            />
            <img
              src="/assets/internalEquipment5.jpg"
              alt="internalEquipment"
              onClick={() => setInternalEquipment(5)}
              className={`w-28 h-24 shadow-md shadow-[#00000085] rounded-xl cursor-pointer transition-opacity duration-300 ${
                internalEquipment === 5 ? "opacity-100" : "opacity-40"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
