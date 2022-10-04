import { ClockIcon, StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const CourseItem = ({ title, instructor, duration, ratings, reviews, initialCost, offerCost, src }) => {
  return (
    <div className="min-w-[250px]">
      <div>
        <Image src="/course-img.png" width={227} height={171} />
      </div>
      <div className="flex flex-col space-y-2">
        <h4>{title}</h4>
        <div>{instructor}</div>
        <div className="flex">
          <ClockIcon className="h-5" />
          <span>{duration + " hours"}</span>
        </div>
        <div>
          <div className="flex space-x-1">
            <StarIcon className="text-yellow h-4" />
            <StarIcon className="text-yellow h-4" />
            <StarIcon className="text-yellow h-4" />
            <StarIcon className="text-yellow h-4" />
            <StarIcon className="text-yellow h-4" />
            <div>{ratings + `(${reviews} reviews)`}</div>
          </div>
        </div>
        <div>
          <span>{offerCost}</span>
          <span>{initialCost}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
