import Link from "next/link";
import { useRouter } from "next/router";

import { Menu, Transition } from "@headlessui/react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

export function MobileNavbar() {
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
    <div className="flex flex-col sm:hidden">
      <Menu>
        <Menu.Button>
          {({ open }) => (
            <>
              {open ? (
                <CloseOutlined className="text-brand-yellow text-2xl cursor-pointer transition-all duration-200 active:shadow-inner active:shadow-[#000000bb]" />
              ) : (
                <MenuOutlined className="text-brand-yellow text-2xl cursor-pointer transition-all duration-200 active:shadow-inner active:shadow-[#000000bb]" />
              )}
            </>
          )}
        </Menu.Button>

        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-50 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-50 opacity-0"
        >
          <Menu.Items className="">
            <Menu.Item>
              <>
                <ul className="w-full flex flex-col justify-center items-center list-none">
                  <li
                    onClick={() => handleClick(0, 450)}
                    className="li-primary hover:text-brand-yellow"
                  >
                    Horários
                  </li>

                  <li className="li-primary ">
                    <Link href="/estrutura">
                      <a className="hover:text-brand-yellow">Estrutura</a>
                    </Link>
                  </li>

                  <li className="li-primary hover:text-brand-yellow">
                    <Link href="/modalidades">
                      <a className="group-hover:text-brand-yellow">
                        Modalidades
                      </a>
                    </Link>
                  </li>

                  <li
                    onClick={() => handleClick(0, 9999)}
                    className="li-primary hover:text-brand-yellow"
                  >
                    Informações
                  </li>

                  <li className="li-primary text-brand-yellow border-2 border-brand-yellow p-3 rounded-3xl hover:text-brand-white hover:bg-brand-yellow hover:border-transparent">
                    Agende seu treino
                  </li>
                </ul>
              </>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
