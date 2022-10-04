import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const HeroSection = () => {
  return (
    <div className="px-6 py-14 xl:py-0 xl:pt-8 bg-yellow/[0.15]">
      <div className="xs:w-11/12 sm:w-full max-w-7xl mx-auto xl:flex items-center space-x-6 justify-evenly">
        <div className="xl:py-16 text-center xl:text-left flex flex-col gap-4">
          <h2 className="text-4xl xl:text-5xl max-w-xs xl:max-w-md mx-auto xl:mx-0 leading-normal xl:leading-[1.510] font-bold">
            Let’s learn to build a beautiful world
          </h2>
          <p className="text-sm xl:text-base leading-6 text-gray-600 max-w-md mx-auto xl:mx-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s
          </p>
          <div className="relative w-full mt-6 max-w-xl mx-auto xl:mx-0">
            <input
              className="text-xs xl:text-sm px-3 py-4 xl:py-5 xl:px-4 w-full rounded-[10px] xl:rounded-[20px]"
              type="search"
              placeholder="Search from 1000+ courses"
            />
            <div className="absolute right-3 top-2 xl:top-[0.85rem] bg-yellow p-2 rounded-[7px]">
              <MagnifyingGlassIcon className="h-4 text-white" />
            </div>
          </div>
        </div>

        <div className="hidden xl:block w-[566px] h-[550px]">
          <Image height={662} width={705.84} src="/heroine-img.png" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
