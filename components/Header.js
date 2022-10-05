import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="bg-black text-white">
      <header className="flex items-center justify-between h-[70px] max-w-[1350px] mx-auto px-3 md:px-5 xl:px-7">
        <div className="hidden xl:block">
          <Image src="/logo-lg.png" width={116} height={34} />
        </div>
        <div className="xl:hidden">
          <Image src="/logo-sm.png" width={38} height={36} />
        </div>
        {menuOpen ? (
          <div className="absolute z-50 right-[3vw] top-5 p-1 rounded-[7px] bg-yellow xl:hidden">
            <XMarkIcon
              onClick={handleClick}
              className="menu-btn h-6 text-black cursor-pointer"
            />
          </div>
        ) : (
          <div className="absolute z-50 right-[3vw] top-5 p-1 rounded-[7px] bg-yellow xl:hidden">
            <Bars3Icon
              onClick={handleClick}
              className="menu-btn h-6 text-black cursor-pointer"
            />
          </div>
        )}
        <nav
          className={
            "my-navbar absolute z-40 inset-0 xl:inset-auto xl:left-1/2 xl:transform xl:-translate-x-1/2 flex justify-center pt-36 xl:pt-0 bg-black transform transition-transform duration-500 ease-in-out " +
            (menuOpen ? "translate-x-0" : "translate-x-full")
          }
        >
          <ul className="flex flex-col xl:flex-row xl:items-center gap-7 xl:gap-10 text-sm">
            <li>
              <a>About</a>
            </li>
            <li className="flex flex-col -mt-[7px]">
              <span className="text-yellow text-[9px] leading-none -mb-0.5">
                LIVE
              </span>
              <a>Masterclass</a>
            </li>
            <li className="flex flex-col -mt-[7px]">
              <span className="text-yellow text-[9px] leading-none -mb-0.5">
                Free
              </span>
              <a>Study Material</a>
            </li>
            <li className="flex flex-col -mt-[7px]">
              <span className="text-yellow text-[9px] leading-none -mb-0.5">
                HOT
              </span>
              <a>Solved Questions</a>
            </li>
            <li>
              <a>Doubt Space</a>
            </li>
          </ul>
        </nav>
        <div className="hidden xl:flex items-center space-x-2">
          <Image src="/profileCTA.png" width={40} height={40} />
          <span className="text-sm">GmatriX</span>
        </div>
      </header>
    </div>
  );
};

export default Header;
