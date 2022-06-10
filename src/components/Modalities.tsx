import { useState } from "react";
import { SwapLeftOutlined, SwapRightOutlined } from "@ant-design/icons";
import { SeeMore } from "./SeeMore";

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

            <img
              src={`/assets/modality${gymModality}.jpg`}
              alt="gymImage"
              className="w-[48.9rem] h-[31.2rem] shadow-md shadow-[#00000085] rounded-2xl"
            />

            <SwapRightOutlined
              onClick={changeNextModality}
              className="text-brand-yellow text-6xl leading-3 ml-10 rounded-full cursor-pointer opacity-70 transition-all duration-200  shadow-lg shadow-[#000000bb] hover:opacity-100 active:shadow-inner active:shadow-[#000000bb]"
            />
          </div>

          <div className="flex items-center justify-center gap-6 mt-5">
            <div
              className={`w-4 h-4 border-2 border-solid border-brand-yellow rounded-full cursor-pointer transition-colors duration-200 ${
                gymModality === 1 ? "bg-brand-yellow" : "bg-none"
              }`}
              onClick={() => setGymModality(1)}
            ></div>
            <div
              className={`w-4 h-4 border-2 border-solid border-brand-yellow rounded-full cursor-pointer transition-colors duration-200 ${
                gymModality === 2 ? "bg-brand-yellow" : "bg-none"
              }`}
              onClick={() => setGymModality(2)}
            ></div>
            <div
              className={`w-4 h-4 border-2 border-solid border-brand-yellow rounded-full cursor-pointer transition-colors duration-200 ${
                gymModality === 3 ? "bg-brand-yellow" : "bg-none"
              }`}
              onClick={() => setGymModality(3)}
            ></div>
            <div
              className={`w-4 h-4 border-2 border-solid border-brand-yellow rounded-full cursor-pointer transition-colors duration-200 ${
                gymModality === 4 ? "bg-brand-yellow" : "bg-none"
              }`}
              onClick={() => setGymModality(4)}
            ></div>
            <div
              className={`w-4 h-4 border-2 border-solid border-brand-yellow rounded-full cursor-pointer transition-colors duration-200 ${
                gymModality === 5 ? "bg-brand-yellow" : "bg-none"
              }`}
              onClick={() => setGymModality(5)}
            ></div>
          </div>

          <SeeMore />
        </div>
      </div>
    </div>
  );
}
