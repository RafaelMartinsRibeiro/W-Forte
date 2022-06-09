export function About() {
  return (
    <div className="flex justify-evenly my-10 ">
      <img
        src="/assets/quem-somos.jpg"
        alt="Notebook image"
        className="w-[34.3rem] border-l-[10px] border-solid border-brand-yellow rounded-l-xl shadow-md shadow-[#00000085]"
      />
      <div className="w-[34.3rem] flex flex-col">
        <div className="bg-brand-yellow rounded-xl p-3 font-black text-lg text-[#000000f1] flex justify-center items-center mb-4 shadow-[#00000085]">
          <h3>Quem nós somos</h3>
        </div>
        <div className="text-brand-white font-black flex flex-col">
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
