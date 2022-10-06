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
    <div className="flex rounded-[20px] w-full max-w-[400px] border-2 p-2 gap-4 border-gray-300">
      <div className="w-24 xl:w-28 h-24 xl:h-28 bg-[url('/app-dev.png')] bg-cover" />
      <div className="space-y-1">
        <h4 className="text-sm xl:text-base font-medium">{course}</h4>
        <div className="text-[10px] xl:text-xs">{instructor}</div>
        <div className="flex items-center space-x-1">
          <StarIcon className="text-yellow h-4" />
          <StarIcon className="text-yellow h-4" />
          <StarIcon className="text-yellow h-4" />
          <StarIcon className="text-yellow h-4" />
          <StarIcon className="text-yellow h-4" />
          <div className="text-[10px] lg:text-xs">{rating + `(${reviews} reviews)`}</div>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-[22px] lg:text-xl font-semibold">
            {offerCost}
          </span>
          <span className="text-[10px] lg:text-xs line-through text-gray-500">
            {"Rs." + initialCost}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecommendItem;
