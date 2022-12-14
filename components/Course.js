import courses from "../data/courses";
import CourseItem from "./CourseItem";
import SearchBar from "./SearchBar";
import SortingSelect from "./SortingSelect";
import { useEffect } from "react";

const Course = () => {
  useEffect(() => {
    const slider = document.querySelector("#course-container");
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
    });
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    });
  });

  return (
    <div className="bg-[#F3F4F8]">
      <div className="space-y-8 max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div>
          <h4 className="text-sm text-gray-600">Courses</h4>
          <h3 className="text-2xl xl:text-4xl font-medium">Students are learning</h3>
        </div>
        <div className="flex flex-col md:flex-row gap-8 justify-between md:items-end">
        <SearchBar className="md:order-2" />
        <SortingSelect />
        </div>
        <div className="relative -ml-1">
          <div id="course-container" className="flex space-x-3 sm:space-x-6 overflow-x-scroll scrollbar-hide">
            {courses.map((course) => (
              <CourseItem
                course={course.course}
                instructor={course.instructor}
                duration={course.duration}
                rating={course.rating}
                reviews={course.reviews}
                initialCost={course.initialCost}
                offerCost={course.offerCost}
                key={course.id}
                className="p-4"
              />
            ))}
          </div>
          <div className="pointer-events-none absolute top-0 right-0 h-96 w-2/12 bg-gradient-to-l from-[#f3f4f8]" />
        </div>
        <div className="w-fit mx-auto">
          <a className="bg-yellow px-14 py-3 rounded-3xl shadow-md cursor-pointer">See All</a>
        </div>
      </div>
    </div>
  );
};

export default Course;
