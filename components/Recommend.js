import courses from "../data/courses";
import RecommendItem from "./RecommendItem";

const Recommend = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <h3 className="text-2xl xl:text-4xl font-medium mb-10">Recommendations for you</h3>
        <div className="flex flex-wrap gap-4">
          {courses.map((course) => {
            if (course.tag === "app_dev") {
              return (
                <RecommendItem
                  course={course.course}
                  instructor={course.instructor}
                  rating={course.rating}
                  reviews={course.reviews}
                  initialCost={course.initialCost}
                  offerCost={course.offerCost}
                  key={course.id}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Recommend;
