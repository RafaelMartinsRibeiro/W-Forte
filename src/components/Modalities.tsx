import { SwapLeftOutlined, SwapRightOutlined } from "@ant-design/icons";
import { useState } from "react";

export function Modalities() {
  const [gymModality, setGymModality] = useState(1);

  const changeNextModality = () => {
    setGymModality(gymModality === 5 ? 1 : gymModality + 1);
  };

  const changePreviousModality = () => {
    setGymModality(gymModality === 1 ? 5 : gymModality - 1);
  };

  return (
    <div
      style={{ backgroundImage: `url('/assets/modality${gymModality}.jpg')` }}
      className="bg-no-repeat bg-cover bg-fixed"
    >
      <div className="backdrop-blur-lg bg-black bg-opacity-70 w-full h-full flex flex-col items-center justify-center pb-9">
        <h2 className="text-shadow font-black text-brand-white text-5xl my-9">
          Modalidades
        </h2>

        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center justify-center">
            <SwapLeftOutlined
              onClick={changePreviousModality}
              className="text-brand-yellow text-7xl leading-3 mr-10 rounded-full  cursor-pointer opacity-70 transition-all duration-200  shadow-lg shadow-[#000000bb] hover:opacity-100 active:shadow-inner active:shadow-[#000000bb]"
            />

            <img
              src={`/assets/modality${gymModality}.jpg`}
              alt="gymImage"
              className="w-[61.1rem] h-[39rem] shadow-md shadow-[#00000085] rounded-2xl"
            />

            <SwapRightOutlined
              onClick={changeNextModality}
              className="text-brand-yellow text-7xl leading-3 ml-10 rounded-full  cursor-pointer opacity-70 transition-all duration-200  shadow-lg shadow-[#000000bb] hover:opacity-100 active:shadow-inner active:shadow-[#000000bb]"
            />
          </div>

          <div className="flex items-center justify-center gap-6 mt-9">
            <div
              className={`w-5 h-5 border-2 border-solid border-brand-yellow rounded-full cursor-pointer transition-colors duration-200 ${
                gymModality === 1 ? "bg-brand-yellow" : "bg-none"
              }`}
              onClick={() => setGymModality(1)}
            ></div>
            <div
              className={`w-5 h-5 border-2 border-solid border-brand-yellow rounded-full cursor-pointer transition-colors duration-200 ${
                gymModality === 2 ? "bg-brand-yellow" : "bg-none"
              }`}
              onClick={() => setGymModality(2)}
            ></div>
            <div
              className={`w-5 h-5 border-2 border-solid border-brand-yellow rounded-full cursor-pointer transition-colors duration-200 ${
                gymModality === 3 ? "bg-brand-yellow" : "bg-none"
              }`}
              onClick={() => setGymModality(3)}
            ></div>
            <div
              className={`w-5 h-5 border-2 border-solid border-brand-yellow rounded-full cursor-pointer transition-colors duration-200 ${
                gymModality === 4 ? "bg-brand-yellow" : "bg-none"
              }`}
              onClick={() => setGymModality(4)}
            ></div>
            <div
              className={`w-5 h-5 border-2 border-solid border-brand-yellow rounded-full cursor-pointer transition-colors duration-200 ${
                gymModality === 5 ? "bg-brand-yellow" : "bg-none"
              }`}
              onClick={() => setGymModality(5)}
            ></div>
          </div>

          <button
            type="button"
            className="text-brand-white mt-5 py-3 px-5 text-2xl font-black border-2 border-solid border-brand-yellow rounded-tr-xl rounded-bl-xl shadow-md shadow-[#00000085] transition-colors duration-200 hover:text-[#161616] hover:bg-brand-yellow"
          >
            VER MAIS
          </button>
        </div>
      </div>
    </div>
  );
}
