import Link from "next/link";

export function Navbar() {
  return (
    <div className="flex justify-between items-center bg-[#293036] text-brand-white sticky top-0 p-3 shadow-md shadow-[#00000085]">
      <Link href="/">
        <a>
          <div className="group flex items-center ml-3">
            <img
              src="/favicon.png"
              alt="header icon"
              className="w-16 h-16 rounded-2xl ml-1 shadow-sm shadow-[#00000085]"
            />
            <div className="ml-3 flex flex-col items-center">
              <h1 className="ml-3 font-black text-3xl transition-colors duration-200 group-hover:text-brand-yellow">
                W FORTE Fitness
              </h1>
              <span className="font-cursive text-xs font-semibold">
                AQUI VOCÊ É ÚNICO
              </span>
            </div>
          </div>
        </a>
      </Link>

      <div>
        <ul className="text-2xl flex list-none">
          <li
            onClick={() => window.scrollTo(0, 0)}
            className="li-primary hover:text-brand-yellow"
          >
            <a>Horários</a>
          </li>
          <li
            onClick={() => window.scrollTo(0, 0)}
            className="li-primary hover:text-brand-yellow"
          >
            <a>Estrutura</a>
          </li>
          <li
            onClick={() => window.scrollTo(0, 0)}
            className="li-primary hover:text-brand-yellow"
          >
            <a>Modalidades</a>
          </li>
          <li
            onClick={() => window.scrollTo(0, 0)}
            className="li-primary hover:text-brand-yellow"
          >
            <a>Informações</a>
          </li>

          <li className="li-primary text-brand-yellow border-2 border-solid border-brand-yellow rounded-xl hover:bg-brand-yellow hover:text-[#293036] hover:border-transparent">
            <a>Agende seu treino</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
