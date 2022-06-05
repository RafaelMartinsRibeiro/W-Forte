import { SwapLeftOutlined, SwapRightOutlined } from "@ant-design/icons";
import { useState } from "react";

export function Structure() {
  const [gymImage, setGymImage] = useState(1);

  const changeNextImage = () => {
    setGymImage(gymImage === 3 ? 1 : gymImage + 1);
  };

  const changePreviousImage = () => {
    setGymImage(gymImage === 1 ? 3 : gymImage - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center pb-9 ">
      <h2 className="text-shadow font-black text-brand-white text-5xl my-9">
        Estrutura
      </h2>

      <div className="flex items-center justify-center">
        <SwapLeftOutlined
          onClick={changePreviousImage}
          className="text-brand-yellow text-7xl leading-3 mr-10 rounded-full  cursor-pointer opacity-70 transition-all duration-200  shadow-lg shadow-[#000000bb] hover:opacity-100 active:shadow-inner active:shadow-[#000000bb]"
        />

        <img
          src={`/assets/gym${gymImage}.jpg`}
          alt="gymImage"
          className="w-[51.1rem] h-[34rem] shadow-md shadow-[#00000085] rounded-2xl"
        />

        <SwapRightOutlined
          onClick={changeNextImage}
          className="text-brand-yellow text-7xl leading-3 ml-10 rounded-full  cursor-pointer opacity-70 transition-all duration-200  shadow-lg shadow-[#000000bb] hover:opacity-100 active:shadow-inner active:shadow-[#000000bb]"
        />
      </div>

      <div className="flex items-center justify-center gap-5 mt-9">
        <img
          src="/assets/gym1.jpg"
          alt="gymImage"
          onClick={() => setGymImage(1)}
          className={`w-36 h-28 shadow-md shadow-[#00000085] rounded-2xl cursor-pointer transition-opacity duration-300 ${
            gymImage === 1 ? "opacity-100" : "opacity-40"
          }`}
        />
        <img
          src="/assets/gym2.jpg"
          alt="gymImage"
          onClick={() => setGymImage(2)}
          className={`w-36 h-28 shadow-md shadow-[#00000085] rounded-2xl cursor-pointer transition-opacity duration-300 ${
            gymImage === 2 ? "opacity-100 " : "opacity-40 "
          }`}
        />
        <img
          src="/assets/gym3.jpg"
          alt="gymImage"
          onClick={() => setGymImage(3)}
          className={`w-36 h-28 shadow-md shadow-[#00000085] rounded-2xl cursor-pointer transition-opacity duration-300 ${
            gymImage === 3 ? "opacity-100" : "opacity-40"
          }`}
        />
      </div>

      <button
        type="button"
        className="text-brand-white mt-5 py-3 px-5 text-2xl font-black border-2 border-solid border-brand-yellow rounded-tr-xl rounded-bl-xl shadow-md shadow-[#00000085] transition-colors duration-200 hover:text-[#161616] hover:bg-brand-yellow"
      >
        VER MAIS
      </button>
    </div>
  );
}
