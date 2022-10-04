import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import courses from "../data/courses";
import CourseItem from "./CourseItem";

const Course = () => {
  return (
    <div className="bg-[#F3F4F8]">
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
        <div>
          <h4 className="text-sm text-gray-600">Courses</h4>
          <h3 className="text-2xl font-medium">Students are learning</h3>
        </div>
        <div className="relative">
          <button className="absolute top-[.85rem] left-2" type="submit">
            <MagnifyingGlassIcon className="h-4 text-gray-600" />
          </button>
          <input
            className="bg-white shadow-md rounded-md text-sm py-3 px-10 focus:outline-none"
            type="search"
            name="search"
            placeholder="Search courses"
          />
        </div>
        <div class="flex">
          <div class="xl:w-40 relative text-center">
            <select
              class="form-select text-center appearance-none block w-full px-3 py-3
                    text-base
                    font-medium
                    text-black bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                  focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option selected>Categories</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <ChevronDownIcon className="h-4 absolute right-3 top-4" />
          </div>
          <div class="xl:w-40 relative">
            <select
              class="form-select text-center appearance-none block w-full px-3 py-3
                    text-base
                    font-medium                 
                  text-black
                    bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option selected>Free</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <ChevronDownIcon className="h-4 absolute right-3 top-4" />
          </div>
        </div>

        <div className="relative">
          <div className="flex space-x-4 sm:space-x-7 overflow-x-scroll scrollbar-hide">
            {courses.map((course) => (
              <CourseItem
                title={course.title}
                instructor={course.instructor}
                duration={course.duration}
                ratings={course.ratings}
                reviews={course.reviews}
                initialCost={course.initialCost}
                offerCost={course.offerCost}
                key={course.key}
              />
            ))}
          </div>
          <div className="absolute top-0 right-0 h-96 w-2/12 bg-gradient-to-l from-[#ffffff]" />
        </div>
      </div>
    </div>
  );
};

export default Course;
