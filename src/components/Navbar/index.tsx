import Link from "next/link";
import { useRouter } from "next/router";

import { MobileNavbar } from "./MobileNavbar";

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

  const handleClickStructure = (x: number, y: number) => {
    if (pathname === "/estrutura") {
      window.scrollTo(x, y);
    } else {
      router.push("/estrutura");
      setTimeout(() => {
        window.scrollTo(x, y);
      }, 10);
    }
  };

  return (
    <div className="z-50 flex-col flex sm:flex-row justify-center sm:justify-between items-center backdrop-blur-lg bg-[#293036] bg-opacity-50 text-brand-white sticky top-0 p-2 lg:p-3 shadow-md shadow-[#00000085]">
      <Link href="/">
        <a>
          <div className="group flex items-center ml-1">
            <img
              src="/favicon.png"
              alt="header icon"
              className="w-9 sm:w-12 md:w-14 h-9 sm:h-12 md:h-14 rounded-2xl md:ml-1 shadow-sm shadow-[#00000085]"
            />
            <div className="ml-3 flex flex-col items-center">
              <h1 className="ml-1 sm:ml-3 font-black text-xl sm:text-xs md:text-[0.94rem] lg:text-lg xl:text-2xl transition-colors duration-200 group-hover:text-brand-yellow">
                W FORTE Fitness
              </h1>
              <span className="font-cursive hidden sm:inline-block sm:text-[0.45rem] md:text-[0.53rem] lg:text-[0.57rem] xl:text-[0.6rem] font-semibold">
                AQUI VOCÊ É ÚNICO
              </span>
            </div>
          </div>
        </a>
      </Link>

      <div className="hidden sm:flex">
        <ul className="sm:text-[0.63rem] md:text-xs lg:text-base xl:text-lg flex justify-center items-center list-none">
          <li
            onClick={() => handleClick(0, 280)}
            className="li-primary hover:text-brand-yellow"
          >
            Horários
          </li>

          <li className="li-primary ">
            <div className="group  relative">
              <Link href="/estrutura">
                <a className="group-hover:text-brand-yellow">Estrutura</a>
              </Link>
              <div className="w-56 rounded-b-xl pb-3 flex flex-col items-center justify-center bg-[#293036] bg-opacity-80 absolute top-[3.25rem] left-1/2 transform -translate-x-1/2 opacity-0 invisible transition-all duration-500 group-hover:visible group-hover:opacity-100">
                <span
                  onClick={() => handleClickStructure(0, 400)}
                  className="w-56 flex justify-center border-b-[1px] border-brand-yellow py-3 hover:text-brand-yellow "
                >
                  Quem nós somos
                </span>

                <span
                  onClick={() => handleClickStructure(0, 1100)}
                  className="w-56 flex justify-center border-b-[1px] border-brand-yellow py-3 hover:text-brand-yellow "
                >
                  Equipamentos
                </span>

                <span
                  onClick={() => handleClickStructure(0, 9999)}
                  className="w-56 flex justify-center pt-3 hover:text-brand-yellow "
                >
                  Professores
                </span>
              </div>
            </div>
          </li>

          <li className="li-primary hover:text-brand-yellow">
            <Link href="/modalidades">
              <a className="group-hover:text-brand-yellow">Modalidades</a>
            </Link>
          </li>

          <li
            onClick={() => handleClick(0, 9999)}
            className="li-primary hover:text-brand-yellow"
          >
            Informações
          </li>

          <li className=" z-50 li-primary text-[#000000f1] lg:p-1 hover hover:text-brand-white">
            Agende seu treino
            <span className="z-[-1] absolute top-0 right-0 sm:border-b-[4rem] md:border-b-[4.4rem] lg:border-b-[4.9rem] sm:border-l-[3.75rem] md:border-l-[3.75rem] lg:border-l-[3.75rem] sm:border-l-transparent md:border-l-transparent lg:border-l-transparent sm:border-r-[5.5rem] md:border-r-[7rem] lg:border-r-[10rem] xl:border-r-[11.25rem] border-brand-yellow "></span>
          </li>
        </ul>
      </div>

      {/* ↓ Mobile menu ↓ */}
      <MobileNavbar />
    </div>
  );
}
