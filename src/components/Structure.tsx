import { SwapLeftOutlined, SwapRightOutlined } from "@ant-design/icons";
import { useState } from "react";

export function Structure() {
  const [gymImage, setGymImage] = useState("acad05.jpg");

  function changeNextImage() {
    if (gymImage == "acad05.jpg") {
      setGymImage("acad03.jpg");
    } else if (gymImage == "acad03.jpg") {
      setGymImage("acad07.jpg");
    } else if (gymImage == "acad07.jpg") {
      setGymImage("acad05.jpg");
    }
  }

  function changePreviousImage() {
    if (gymImage == "acad05.jpg") {
      setGymImage("acad07.jpg");
    } else if (gymImage == "acad03.jpg") {
      setGymImage("acad05.jpg");
    } else if (gymImage == "acad07.jpg") {
      setGymImage("acad03.jpg");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center pb-6 ">
      <h2 className="text-shadow font-black text-brand-white text-5xl my-9">
        Estrutura
      </h2>

      <div className="flex items-center justify-center">
        <SwapLeftOutlined
          onClick={changePreviousImage}
          className="text-brand-yellow text-7xl leading-3 mr-10 rounded-full  cursor-pointer opacity-70 transition-all duration-200  shadow-lg shadow-[#000000bb] hover:opacity-100 active:shadow-inner active:shadow-[#000000bb]"
        />

        <img
          src={`/assets/${gymImage}`}
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
          src="/assets/acad05.jpg"
          alt="gymImage"
          onClick={() => setGymImage("acad05.jpg")}
          className={`w-36 h-28 shadow-md shadow-[#00000085] rounded-2xl cursor-pointer transition-opacity duration-300 ${
            gymImage === "acad05.jpg" ? "opacity-100" : "opacity-40"
          }`}
        />
        <img
          src="/assets/acad03.jpg"
          alt="gymImage"
          onClick={() => setGymImage("acad03.jpg")}
          className={`w-36 h-28 shadow-md shadow-[#00000085] rounded-2xl cursor-pointer transition-opacity duration-300 ${
            gymImage === "acad03.jpg" ? "opacity-100 " : "opacity-40 "
          }`}
        />
        <img
          src="/assets/acad07.jpg"
          alt="gymImage"
          onClick={() => setGymImage("acad07.jpg")}
          className={`w-36 h-28 shadow-md shadow-[#00000085] rounded-2xl cursor-pointer transition-opacity duration-300 ${
            gymImage === "acad07.jpg" ? "opacity-100" : "opacity-40"
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
