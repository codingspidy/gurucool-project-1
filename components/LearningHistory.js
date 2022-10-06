import HistoryItem from "./HistoryItem";
import courseChapters from "../data/courseChapters";
import { useEffect } from "react";

const LearningHistory = () => {
  useEffect(() => {
    const slider = document.querySelector("#history-container");
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
    <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20 mb-10">
      <div>
        <h4 className="text-sm text-gray-400">Your courses</h4>
        <h3 className="text-2xl xl:text-4xl font-medium">Continue learning</h3>
      </div>
      <div className="relative">
        <div
          id="history-container"
          className="mt-5 flex space-x-4 sm:space-x-7 overflow-x-scroll scrollbar-hide"
        >
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
          <div className="pointer-events-none absolute top-0 right-0 h-24 xl:h-28 w-1/12 bg-gradient-to-l from-[#ffffff]" />
        </div>
      </div>
    </div>
  );
};

export default LearningHistory;
