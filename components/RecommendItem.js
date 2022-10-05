import { StarIcon } from "@heroicons/react/24/solid";

const RecommendItem = ({
  course,
  instructor,
  rating,
  reviews,
  offerCost,
  initialCost,
}) => {
  return (
    <div className="flex rounded-[20px] w-full max-w-[400px] border-2 border-gray-300">
      <div className="w-24 h-24 bg-[url('/app-dev.png')] bg-cover" />
      <div>
        <h4 className="text-sm xl:text-lg font-medium">{course}</h4>
        <div className="text-[10px] xl:text-xs">{instructor}</div>
        <div>
          <div className="flex space-x-1">
            <StarIcon className="text-yellow h-4" />
            <StarIcon className="text-yellow h-4" /> 
            <StarIcon className="text-yellow h-4" />
            <StarIcon className="text-yellow h-4" />
            <StarIcon className="text-yellow h-4" />
            <div>{rating + `(${reviews} reviews)`}</div>
          </div>
        </div>{" "}
        <div className="flex gap-4 items-center">
          <span className="text-[22px] lg:text-xl font-semibold">{offerCost}</span>
          <span className="text-[10px] lg:text-xs line-through text-gray-500">{"Rs." + initialCost}</span>
        </div>
      </div>
    </div>
  );
};

export default RecommendItem;
