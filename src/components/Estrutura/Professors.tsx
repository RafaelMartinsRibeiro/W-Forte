import { useState } from "react";

import { SwapLeftOutlined, SwapRightOutlined } from "@ant-design/icons";

import { Images } from "../../Images";
import { AnimatePresence, motion } from "framer-motion";

export function Professors() {
  const [professor, setProfessor] = useState<number>(1);

  const changeNextEquipment = () => {
    setProfessor(professor === 5 ? 1 : professor + 1);
  };

  const changePreviousEquipment = () => {
    setProfessor(professor === 1 ? 5 : professor - 1);
  };

  return (
    <div>
      <h3 className="w-full bg-brand-yellow p-3 font-black text-sm sm:text-base md:text-lg text-[#000000f1] flex justify-center items-center  shadow-[#00000085]">
        Alguns de nossos professores
      </h3>

      <div
        style={{
          backgroundImage: `url('/assets/${
            Images.professors[professor - 1].image
          }')`,
        }}
        className="bg-no-repeat bg-cover bg-fixed "
      >
        <div className=" py-7 backdrop-blur-md bg-black bg-opacity-70 w-full h-full flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-sm sm:text-base md:text-lg flex items-center justify-center bg-transparent text-brand-yellow w-64 sm:w-[21rem] md:w-[26rem] lg:w-[35.1rem] my-2 p-3 border-[2px] border-brand-yellow border-solid rounded-xl font-black transition-colors duration-200">
              {Images.professors[professor - 1].name}
            </h2>

            <div className="flex items-center justify-center">
              <SwapLeftOutlined
                onClick={changePreviousEquipment}
                className="text-brand-yellow text-2xl sm:text-5xl md:text-6xl leading-3 mr-5 sm:mr-10 rounded-full  cursor-pointer opacity-70 transition-all duration-200  shadow-lg shadow-[#000000bb] hover:opacity-100 active:shadow-inner active:shadow-[#000000bb]"
              />

              <div
                className="grid items-center justify-center"
                style={{ gridTemplateAreas: "content" }}
              >
                <AnimatePresence>
                  <motion.img
                    key={professor}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    src={`/assets/${Images.professors[professor - 1].image}`}
                    alt="professor"
                    className="w-64 sm:w-[21rem] md:w-[26rem] lg:w-[35.1rem] h-[17rem] sm:h-[23rem] md:h-[27rem] lg:h-[30rem] shadow-md shadow-[#00000085] rounded-2xl"
                    style={{ gridArea: "content" }}
                  />
                </AnimatePresence>
              </div>

              <SwapRightOutlined
                onClick={changeNextEquipment}
                className="text-brand-yellow text-2xl sm:text-5xl md:text-6xl leading-3 ml-5 sm:ml-10 rounded-full  cursor-pointer opacity-70 transition-all duration-200  shadow-lg shadow-[#000000bb] hover:opacity-100 active:shadow-inner active:shadow-[#000000bb]"
              />
            </div>
            <div className="flex items-center justify-center gap-6 mt-5 z-20">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className={`w-4 h-4 border-2 border-solid border-brand-yellow rounded-full cursor-pointer transition-colors duration-200 ${
                    professor === i ? "bg-brand-yellow" : "bg-none"
                  }`}
                  onClick={() => setProfessor(i)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
