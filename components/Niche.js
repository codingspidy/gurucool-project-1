import niches from "../data/niches";
import NicheItem from "./NicheItem";

const Niche = () => {
  return (
    <div className="bg-[#F3F4F8]">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div>
          <h4 className="text-sm text-gray-400">Categories</h4>
          <h3 className="text-2xl xl:text-3xl font-medium">Choose your niche</h3>
        </div>
        <div className="flex flex-wrap gap-y-5 gap-x-3 lg:gap-y-7 lg:gap-x-4 mt-10">
          {niches.map((niche) => (
            <NicheItem
              key={niche.id}
              course={niche.course}
              coursesCount={niche.coursesCount}
              imgSrc={niche.src}
            />
          ))}
        </div>
        <div className="mt-10">
        <a className="font-medium text-decoration underline text-sm xl:text-lg cursor-pointer">See All Categories</a>
        </div>
      </div>
    </div>
  );
};

export default Niche;
