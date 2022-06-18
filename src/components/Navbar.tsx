import Link from "next/link";
import { useRouter } from "next/router";

export function Navbar() {
  const { pathname } = useRouter();
  const router = useRouter();

  const handleClick = (x: number, y: number) => {
    if (pathname === "/") {
      window.scrollTo(x, y);
    } else {
      router.push("/");
      setTimeout(() => {
        window.scrollTo(x, y);
      }, 10);
    }
  };

  return (
    <div className="z-50 flex justify-between items-center bg-[#293036] text-brand-white sticky top-0 p-3 shadow-md shadow-[#00000085]">
      <Link href="/">
        <a>
          <div className="group flex items-center ml-1">
            <img
              src="/favicon.png"
              alt="header icon"
              className="w-14 h-14 rounded-2xl ml-1 shadow-sm shadow-[#00000085]"
            />
            <div className="ml-3 flex flex-col items-center">
              <h1 className="ml-3 font-black text-2xl transition-colors duration-200 group-hover:text-brand-yellow">
                W FORTE Fitness
              </h1>
              <span className="font-cursive text-[0.6rem] font-semibold">
                AQUI VOCÊ É ÚNICO
              </span>
            </div>
          </div>
        </a>
      </Link>

      <div>
        <ul className="text-lg flex justify-center items-center list-none">
          <li
            onClick={() => handleClick(0, 450)}
            className="li-primary hover:text-brand-yellow"
          >
            <a>Horários</a>
          </li>

          <li className="li-primary ">
            <div className="group  relative">
              <Link href="/estrutura">
                <a className="group-hover:text-brand-yellow">Estrutura</a>
              </Link>
              <div className="w-56 rounded-b-xl pb-3 flex flex-col items-center justify-center bg-[#293036] absolute top-10 left-1/2 transform -translate-x-1/2 opacity-0 invisible transition-all duration-300  group-hover:visible group-hover:opacity-100">
                <a className="w-56 flex justify-center border-b-[1px] border-brand-yellow py-3 hover:text-brand-yellow ">
                  Quem nós somos
                </a>

                <a className="w-56 flex justify-center border-b-[1px] border-brand-yellow py-3 hover:text-brand-yellow ">
                  Equipamentos
                </a>

                <a className="w-56 flex justify-center pt-3 hover:text-brand-yellow ">
                  Professores
                </a>
              </div>
            </div>
          </li>

          <li
            onClick={() => handleClick(0, 1670)}
            className="li-primary hover:text-brand-yellow"
          >
            <a>Modalidades</a>
          </li>
          <li
            onClick={() => handleClick(0, 9999)}
            className="li-primary hover:text-brand-yellow"
          >
            <a>Informações</a>
          </li>

          <li className="li-primary p-1  text-brand-yellow border-2 border-solid border-brand-yellow rounded-xl hover:bg-brand-yellow hover:text-[#293036] hover:border-transparent">
            <a>Agende seu treino</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
