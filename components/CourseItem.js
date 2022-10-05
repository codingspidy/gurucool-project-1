import { StarIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";

const CourseItem = ({ course, instructor, duration, rating, reviews, initialCost, offerCost, src }) => {
  return (
    <div className="px-1 py-2 first:px-0">
    <div className="p-4 h-full shadow-lg bg-white rounded-[20px]">
      <div className="w-60 lg:w-64 h-40 lg:h-44 bg-[url('/course-img.png')] bg-cover rounded-[20px]" />
      <div className="flex flex-col space-y-2 mt-2">
        <h4 className="text-xs lg:text-sm font-medium">{course}</h4>
        <div className="text-[8px] lg:text-[10px]">{instructor}</div>
        <div className="flex items-end gap-1">
          <ClockIcon className="h-3" />
          <span className="text-[8px] lg:text-[10px]">{duration + " hours"}</span>
        </div>
        <div>
          <div className="flex space-x-1">
            <StarIcon className="text-yellow h-3" />
            <StarIcon className="text-yellow h-3" />
            <StarIcon className="text-yellow h-3" />
            <StarIcon className="text-yellow h-3" />
            <StarIcon className="text-yellow h-3" />
            <div className="text-[10px] lg:text-xs">{rating + `(${reviews} reviews)`}</div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <span className="text-[22px] lg:text-xl font-semibold">{offerCost}</span>
          <span className="text-[10px] lg:text-xs line-through text-gray-500">{"Rs." + initialCost}</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CourseItem;
