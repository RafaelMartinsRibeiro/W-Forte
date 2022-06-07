export function Schedule() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#111111] pb-9">
      <h2 className="text-shadow font-black text-brand-white text-4xl my-7">
        Horários
      </h2>

      <div className="flex flex-col items-center text-shadow bg-[#00000036] py-11 px-28 border-l-[10px] border-solid border-brand-yellow rounded-l-xl shadow-md shadow-[#00000085]">
        <h3 className="font-black text-brand-yellow text-[1.7rem] ">
          Segunda a Sexta
        </h3>
        <p className="font-black text-brand-white text-xl mb-10">
          05:30 ás 22:00
        </p>

        <h3 className="font-black text-brand-yellow text-[1.7rem] ">Sábado</h3>
        <p className="font-black text-brand-white text-xl ">09:00 ás 12:00</p>
      </div>
    </div>
  );
}
