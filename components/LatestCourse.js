import { useState } from "react";
import courses from "../data/courses";
import CourseItem from "./CourseItem";

const LatestCourse = () => {
  const [courseType, setCourseType] = useState("app_dev");
  const handleClick = (e) => {
    setCourseType(e.target.id);
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20 space-y-6">
        <h3 className="text-2xl xl:text-3xl font-medium">
          Learn new courses to enhance your skills
        </h3>
        <nav className="border-b-2 border-gray-300 py-3">
          <ul className="navbar flex space-x-10 text-gray-500 text-sm xl:text-[15px] font-medium">
            <li>
              <a
                className={
                  "cursor-pointer py-3 " +
                  (courseType === "app_dev" && "border-b border-black")
                }
                onClick={handleClick}
                id="app_dev"
              >
                App
              </a>
            </li>
            <li>
              <a
                className={
                  "cursor-pointer py-3 " +
                  (courseType === "web_design" && "border-b-2 border-black")
                }
                onClick={handleClick}
                id="web_design"
              >
                Web design
              </a>
            </li>
            <li>
              <a
                className={
                  "cursor-pointer py-3 " +
                  (courseType === "html" && "border-b-2 border-black")
                }
                onClick={handleClick}
                id="html"
              >
                HTML
              </a>
            </li>
            <li>
              <a
                className={
                  "cursor-pointer py-3 " +
                  (courseType === "css" && "border-b-2 border-black")
                }
                onClick={handleClick}
                id="css"
              >
                CSS
              </a>
            </li>
          </ul>
        </nav>
        <div className="relative -ml-2">
          <div className="flex space-x-4 sm:space-x-7 overflow-x-scroll scrollbar-hide">
            {courses
              .filter((c) => c.tag === courseType)
              .map((course) => (
                <CourseItem
                  course={course.course}
                  instructor={course.instructor}
                  duration={course.duration}
                  rating={course.rating}
                  reviews={course.reviews}
                  initialCost={course.initialCost}
                  offerCost={course.offerCost}
                  key={course.id}
                  className="border border-gray-300 p-3"
                />
              ))}
          </div>
          <div className="absolute top-0 right-0 h-96 w-2/12 bg-gradient-to-l from-[#ffffff]" />
        </div>
      </div>
    </div>
  );
};

export default LatestCourse;
