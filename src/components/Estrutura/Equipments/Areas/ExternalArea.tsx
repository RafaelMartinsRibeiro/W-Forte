import { useState } from "react";
import { SwapLeftOutlined, SwapRightOutlined } from "@ant-design/icons";

export function ExternalArea() {
  const [externalEquipment, setExternalEquipment] = useState<number>(1);

  const changeNextEquipment = () => {
    setExternalEquipment(externalEquipment === 5 ? 1 : externalEquipment + 1);
  };

  const changePreviousEquipment = () => {
    setExternalEquipment(externalEquipment === 1 ? 5 : externalEquipment - 1);
  };

  return (
    <div
      style={{
        backgroundImage: `url('/assets/externalEquipment${externalEquipment}.jpg')`,
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
              src={`/assets/externalEquipment${externalEquipment}.jpg`}
              alt="externalEquipment"
              className="w-[41.1rem] h-[27rem] shadow-md shadow-[#00000085] rounded-2xl"
            />

            <SwapRightOutlined
              onClick={changeNextEquipment}
              className="text-brand-yellow text-6xl leading-3 ml-10 rounded-full  cursor-pointer opacity-70 transition-all duration-200  shadow-lg shadow-[#000000bb] hover:opacity-100 active:shadow-inner active:shadow-[#000000bb]"
            />
          </div>

          <div className="flex items-center justify-center gap-5 mt-5">
            <img
              src="/assets/externalEquipment1.jpg"
              alt="externalEquipment"
              onClick={() => setExternalEquipment(1)}
              className={`w-28 h-24 shadow-md shadow-[#00000085] rounded-xl cursor-pointer transition-opacity duration-300 ${
                externalEquipment === 1 ? "opacity-100" : "opacity-40"
              }`}
            />
            <img
              src="/assets/externalEquipment2.jpg"
              alt="externalEquipment"
              onClick={() => setExternalEquipment(2)}
              className={`w-28 h-24 shadow-md shadow-[#00000085] rounded-xl cursor-pointer transition-opacity duration-300 ${
                externalEquipment === 2 ? "opacity-100 " : "opacity-40 "
              }`}
            />
            <img
              src="/assets/externalEquipment3.jpg"
              alt="externalEquipment"
              onClick={() => setExternalEquipment(3)}
              className={`w-28 h-24 shadow-md shadow-[#00000085] rounded-xl cursor-pointer transition-opacity duration-300 ${
                externalEquipment === 3 ? "opacity-100" : "opacity-40"
              }`}
            />
            <img
              src="/assets/externalEquipment4.jpg"
              alt="externalEquipment"
              onClick={() => setExternalEquipment(4)}
              className={`w-28 h-24 shadow-md shadow-[#00000085] rounded-xl cursor-pointer transition-opacity duration-300 ${
                externalEquipment === 4 ? "opacity-100" : "opacity-40"
              }`}
            />
            <img
              src="/assets/externalEquipment5.jpg"
              alt="externalEquipment"
              onClick={() => setExternalEquipment(5)}
              className={`w-28 h-24 shadow-md shadow-[#00000085] rounded-xl cursor-pointer transition-opacity duration-300 ${
                externalEquipment === 5 ? "opacity-100" : "opacity-40"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
