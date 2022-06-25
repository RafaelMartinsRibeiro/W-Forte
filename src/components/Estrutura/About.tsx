export function About() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-0 justify-center lg:justify-evenly mb-10 lg:my-10 ">
      <img
        src="/assets/quem-somos.jpg"
        alt="Notebook image"
        className="w-[20rem] sm:w-[32rem] md:w-[34.3rem] border-l-[10px] border-solid border-brand-yellow rounded-l-xl shadow-md shadow-[#00000085]"
      />
      <div className="w-[20rem] sm:w-[30rem] md:w-[40rem] lg:w-[27rem] xl:w-[34.3rem] flex flex-col">
        <div className="bg-brand-yellow rounded-xl p-3 font-black text-lg text-[#000000f1] flex justify-center items-center mb-4 shadow-[#00000085]">
          <h3 className="text-sm sm:text-base md:text-lg">Quem nós somos</h3>
        </div>
        <div className="text-xs sm:text-sm md:text-base  text-brand-white font-black flex flex-col">
          <span>
            A Academia W FORTE FITNESS é uma nova visão em treinos de musculação
            e academia.
          </span>
          <span>Um jeito novo de treinar, exercitar e fazer amigos.</span>
          <span>Venha fazer parte, AQUI VOCÊ É ÚNICO!</span>
        </div>
      </div>
    </div>
  );
}
