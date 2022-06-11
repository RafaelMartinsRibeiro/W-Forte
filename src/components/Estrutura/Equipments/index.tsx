import { ExternalArea } from "./Areas/ExternalArea";

export function Equipments() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h3 className="w-[95%] bg-brand-yellow rounded-xl p-3 font-black text-lg text-[#000000f1] flex justify-center items-center  shadow-[#00000085]">
          Nossos Equipamentos
        </h3>
      </div>

      <ExternalArea />
    </div>
  );
}
