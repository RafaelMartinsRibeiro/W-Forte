import { SwapLeftOutlined, SwapRightOutlined } from "@ant-design/icons";
import { useState } from "react";

export function Professors() {
  const professors = [
    "Willian Suzuki",
    "Henrique Depieri",
    "Odair Santos",
    "Neuza Martins",
    "Daysa Roberta",
  ];

  const [professor, setProfessor] = useState<number>(1);

  const changeNextEquipment = () => {
    setProfessor(professor === 5 ? 1 : professor + 1);
  };

  const changePreviousEquipment = () => {
    setProfessor(professor === 1 ? 5 : professor - 1);
  };

  return (
    <div>
      <h3 className="w-full bg-brand-yellow p-3 font-black text-lg text-[#000000f1] flex justify-center items-center  shadow-[#00000085]">
        Alguns de nossos professores
      </h3>

      <div
        style={{
          backgroundImage: `url('/assets/professor${professor}.jpg')`,
        }}
        className="bg-no-repeat bg-cover bg-fixed "
      >
        <div className=" py-7 backdrop-blur-md bg-black bg-opacity-70 w-full h-full flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center">
            <h2 className="flex items-center justify-center bg-transparent text-brand-yellow w-[35rem]  my-2 p-3 border-[2px] border-brand-yellow border-solid rounded-xl font-black text-lg transition-colors duration-200">
              {professors[professor - 1]}
            </h2>

            <div className="flex items-center justify-center">
              <SwapLeftOutlined
                onClick={changePreviousEquipment}
                className="text-brand-yellow text-6xl leading-3 mr-10 rounded-full  cursor-pointer opacity-70 transition-all duration-200  shadow-lg shadow-[#000000bb] hover:opacity-100 active:shadow-inner active:shadow-[#000000bb]"
              />

              <img
                src={`/assets/professor${professor}.jpg`}
                alt="professor"
                className="w-[35.1rem] h-[30rem] shadow-md shadow-[#00000085] rounded-2xl"
              />

              <SwapRightOutlined
                onClick={changeNextEquipment}
                className="text-brand-yellow text-6xl leading-3 ml-10 rounded-full  cursor-pointer opacity-70 transition-all duration-200  shadow-lg shadow-[#000000bb] hover:opacity-100 active:shadow-inner active:shadow-[#000000bb]"
              />
            </div>
            <div className="flex items-center justify-center gap-6 mt-5">
              <div
                className={`w-4 h-4 border-2 border-solid border-brand-yellow rounded-full cursor-pointer transition-colors duration-200 ${
                  professor === 1 ? "bg-brand-yellow" : "bg-none"
                }`}
                onClick={() => setProfessor(1)}
              ></div>
              <div
                className={`w-4 h-4 border-2 border-solid border-brand-yellow rounded-full cursor-pointer transition-colors duration-200 ${
                  professor === 2 ? "bg-brand-yellow" : "bg-none"
                }`}
                onClick={() => setProfessor(2)}
              ></div>
              <div
                className={`w-4 h-4 border-2 border-solid border-brand-yellow rounded-full cursor-pointer transition-colors duration-200 ${
                  professor === 3 ? "bg-brand-yellow" : "bg-none"
                }`}
                onClick={() => setProfessor(3)}
              ></div>
              <div
                className={`w-4 h-4 border-2 border-solid border-brand-yellow rounded-full cursor-pointer transition-colors duration-200 ${
                  professor === 4 ? "bg-brand-yellow" : "bg-none"
                }`}
                onClick={() => setProfessor(4)}
              ></div>
              <div
                className={`w-4 h-4 border-2 border-solid border-brand-yellow rounded-full cursor-pointer transition-colors duration-200 ${
                  professor === 5 ? "bg-brand-yellow" : "bg-none"
                }`}
                onClick={() => setProfessor(5)}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
