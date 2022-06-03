export function Schedule() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#111111] pb-6 ">
      <h2 className="text-shadow font-black text-brand-white text-5xl my-9">
        Horários
      </h2>

      <div className="flex flex-col items-center text-shadow bg-[#00000036] py-14 px-28 border-l-[10px] border-solid border-brand-yellow rounded-l-xl shadow-md shadow-[#00000085]">
        <h3 className="font-black text-brand-yellow text-4xl ">Segunda a Sexta</h3>
        <p className="font-black text-brand-white text-2xl mb-10">05:30 ás 22:00</p>
        <h3 className="font-black text-brand-yellow text-4xl ">Sábado</h3>
        <p className="font-black text-brand-white text-2xl ">09:00 ás 12:00</p>
      </div>
    </div>
  );
}
