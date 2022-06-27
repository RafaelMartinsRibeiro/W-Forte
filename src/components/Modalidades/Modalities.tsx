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
        <h2 className="text-shadow font-black text-brand-white text-xl sm:text-2xl md:text-3xl lg:text-4xl my-7">
          Modalidades
        </h2>

        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center justify-center">
            <SwapLeftOutlined
              onClick={changePreviousModality}
              className="text-brand-yellow text-2xl leading-3 sm:text-5xl sm:leading-3 md:text-6xl md:leading-3 ml-4 xl:ml-0 mr-5 sm:mr-10 rounded-full  cursor-pointer opacity-70 transition-all duration-200  shadow-lg shadow-[#000000bb] hover:opacity-100 active:shadow-inner active:shadow-[#000000bb]"
            />

            <div className="flex justify-center flex-col lg:flex-row gap-5">
              <div className="sm:w-[27rem] md:w-[30.9rem] lg:w-[35.9rem] xl:w-80">
                <span className="text-sm sm:text-base md:text-lg mb-4 flex items-center justify-center bg-brand-yellow rounded-xl p-3 font-black text-[#000000f1] shadow-[#00000085]">
                  {Images.modalities[gymModality - 1].title}
                </span>

                <span className="text-xs sm:text-sm md:text-base text-brand-white">
                  {Images.modalities[gymModality - 1].description}
                </span>
              </div>

              <div
                className="grid items-center justify-center"
                style={{ gridTemplateAreas: "content" }}
              >
                <AnimatePresence>
                  <motion.img
                    key={gymModality}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5 }}
                    src={`/assets/modality${gymModality}.jpg`}
                    alt="gymImage"
                    className="w-[20rem] sm:w-[27rem] md:w-[30.9rem] lg:w-[35.9rem] h-[15rem] sm:h-[22.2rem] md:h-[23.2rem] shadow-md shadow-[#00000085] rounded-2xl"
                    style={{ gridArea: "content" }}
                  />
                </AnimatePresence>
              </div>
            </div>

            <SwapRightOutlined
              onClick={changeNextModality}
              className="text-brand-yellow text-2xl leading-3 sm:text-5xl sm:leading-3 md:text-6xl md:leading-3 mr-4 xl:mr-0 ml-5 sm:ml-10 rounded-full  cursor-pointer opacity-70 transition-all duration-200  shadow-lg shadow-[#000000bb] hover:opacity-100 active:shadow-inner active:shadow-[#000000bb]"
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
