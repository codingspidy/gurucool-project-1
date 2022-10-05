import { useState } from "react";
import courses from "../data/courses";
import CourseItem from "./CourseItem";

const LatestCourse = () => {
  const [courseType, setCourseType] = useState("app_dev");
  const handleClick = (e) => {
    setCourseType(e.target.id);
  };

  return (
    <div>
      <h3 className="text-2xl font-medium">
        Learn new courses to enhance your skills
      </h3>
      <nav>
        <ul>
          <li>
            <a onClick={handleClick} id="app_dev">
              App
            </a>
          </li>
          <li>
            <a onClick={handleClick} id="web_design">
              Web design
            </a>
          </li>
          <li>
            <a onClick={handleClick} id="html">
              HTML
            </a>
          </li>
          <li>
            <a onClick={handleClick} id="css">
              css
            </a>
          </li>
        </ul>
      </nav>
      <div>
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
            />
          ))}
      </div>
    </div>
  );
};

export default LatestCourse;
