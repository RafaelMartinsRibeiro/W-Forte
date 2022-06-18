import { useState } from "react";
import Link from "next/link";

import { SwapLeftOutlined, SwapRightOutlined } from "@ant-design/icons";
import { SeeMore } from "./SeeMore";

import { Images } from "../Images";
import { AnimatePresence, motion } from "framer-motion";

export function Structure() {
  const [gymImage, setGymImage] = useState<number>(1);

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
        <div
          className="grid items-center justify-center"
          style={{ gridTemplateAreas: "content" }}
        >
          <AnimatePresence>
            <motion.img
              key={gymImage}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.4 }}
              src={`/assets/${Images.gymImages[gymImage - 1].image}`}
              alt="gymImage"
              className="w-[41.1rem] h-[27rem] shadow-md shadow-[#00000085] rounded-2xl"
              style={{ gridArea: "content" }}
            />
          </AnimatePresence>
        </div>

        <SwapRightOutlined
          onClick={changeNextImage}
          className="text-brand-yellow text-6xl leading-3 ml-10 rounded-full  cursor-pointer opacity-70 transition-all duration-200  shadow-lg shadow-[#000000bb] hover:opacity-100 active:shadow-inner active:shadow-[#000000bb]"
        />
      </div>

      <div className="flex items-center justify-center gap-5 mt-5 z-50">
        {Images.gymImages.map((image) => (
          <img
            key={image.id}
            src={`/assets/${image.image}`}
            alt="gymImage"
            onClick={() => setGymImage(image.id)}
            className={`w-28 h-24 shadow-md shadow-[#00000085] rounded-xl cursor-pointer transition-opacity duration-300 ${
              gymImage === image.id ? "opacity-100" : "opacity-40"
            }`}
          />
        ))}
      </div>

      <Link href="/estrutura">
        <a>
          <SeeMore />
        </a>
      </Link>
    </div>
  );
}
