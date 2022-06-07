import { SwapLeftOutlined, SwapRightOutlined } from "@ant-design/icons";
import { useState } from "react";
import { SeeMore } from "./SeeMore";

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
      <h2 className="text-shadow font-black text-brand-white text-4xl my-7">
        Estrutura
      </h2>

      <div className="flex items-center justify-center">
        <SwapLeftOutlined
          onClick={changePreviousImage}
          className="text-brand-yellow text-6xl leading-3 mr-10 rounded-full  cursor-pointer opacity-70 transition-all duration-200  shadow-lg shadow-[#000000bb] hover:opacity-100 active:shadow-inner active:shadow-[#000000bb]"
        />

        <img
          src={`/assets/gym${gymImage}.jpg`}
          alt="gymImage"
          className="w-[41.1rem] h-[27rem] shadow-md shadow-[#00000085] rounded-2xl"
        />

        <SwapRightOutlined
          onClick={changeNextImage}
          className="text-brand-yellow text-6xl leading-3 ml-10 rounded-full  cursor-pointer opacity-70 transition-all duration-200  shadow-lg shadow-[#000000bb] hover:opacity-100 active:shadow-inner active:shadow-[#000000bb]"
        />
      </div>

      <div className="flex items-center justify-center gap-5 mt-5">
        <img
          src="/assets/gym1.jpg"
          alt="gymImage"
          onClick={() => setGymImage(1)}
          className={`w-28 h-24 shadow-md shadow-[#00000085] rounded-xl cursor-pointer transition-opacity duration-300 ${
            gymImage === 1 ? "opacity-100" : "opacity-40"
          }`}
        />
        <img
          src="/assets/gym2.jpg"
          alt="gymImage"
          onClick={() => setGymImage(2)}
          className={`w-28 h-24 shadow-md shadow-[#00000085] rounded-xl cursor-pointer transition-opacity duration-300 ${
            gymImage === 2 ? "opacity-100 " : "opacity-40 "
          }`}
        />
        <img
          src="/assets/gym3.jpg"
          alt="gymImage"
          onClick={() => setGymImage(3)}
          className={`w-28 h-24 shadow-md shadow-[#00000085] rounded-xl cursor-pointer transition-opacity duration-300 ${
            gymImage === 3 ? "opacity-100" : "opacity-40"
          }`}
        />
      </div>

      <SeeMore />
    </div>
  );
}
