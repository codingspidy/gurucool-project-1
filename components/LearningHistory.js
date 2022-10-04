import HistoryItem from "./HistoryItem";
import courseChapters from "../data/courseChapters";

const LearningHistory = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
      <div>
        <h4 className="text-sm text-gray-400">Your courses</h4>
        <h3 className="text-2xl font-medium">Continue learning</h3>
      </div>
      <div className="relative">
      <div className="mt-5 flex space-x-4 sm:space-x-7 overflow-x-scroll scrollbar-hide">
        {courseChapters.map((chapter) => {
          return (
            <HistoryItem
              key={chapter.id}
              courseName={chapter.course}
              chapterName={chapter.chapter}
              chapterDuration={chapter.duration}
              src={chapter.src}
            />
          );
        })}
        <div className="absolute top-0 right-0 h-24 xl:h-28 w-1/12 bg-gradient-to-l from-[#ffffff]" />
      </div>
      </div>
    </div>
  );
};

export default LearningHistory;
