import { useState } from "react";
import { ExternalArea } from "./Areas/ExternalArea";
import { InternalArea } from "./Areas/InternalArea";

export function Equipments() {
  const [area, setArea] = useState<number>(1);

  return (
    <div>
      <div className="flex flex-col items-center justify-center relative">
        <h3 className="text-sm sm:text-base md:text-lg w-full bg-brand-yellow p-3 font-black text-[#000000f1] flex justify-center items-center  shadow-[#00000085]">
          Nossos Equipamentos
        </h3>

        <div className="flex gap-10 absolute top-16 sm:top-14 z-10">
          <button
            onClick={() => setArea(1)}
            type="button"
            className={`flex items-center justify-center ${
              area === 1
                ? "text-brand-yellow border-brand-yellow"
                : " text-brand-white border-brand-white"
            } sm:w-[13rem] md:w-[21rem] lg:w-[30rem] xl:w-[35rem] my-2 p-3 border-[2px] border-solid rounded-xl font-black text-sm sm:text-base md:text-lg transition-colors duration-200`}
          >
            Área Interna
          </button>
          <button
            onClick={() => setArea(2)}
            type="button"
            className={`flex items-center justify-center ${
              area === 2
                ? "text-brand-yellow border-brand-yellow"
                : " text-brand-white border-brand-white"
            }  sm:w-[13rem] md:w-[21rem] lg:w-[30rem] xl:w-[35rem] my-2 p-3 border-[2px] border-solid rounded-xl font-black text-sm sm:text-base md:text-lg transition-colors duration-200`}
          >
            Área Externa
          </button>
        </div>
      </div>

      {area === 1 ? <InternalArea /> : <ExternalArea />}
    </div>
  );
}
