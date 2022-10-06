import Image from "next/image";
import { PlayIcon } from "@heroicons/react/24/solid";

const HistoryItem = ({
  courseName,
  chapterName,
  chapterDuration,
  src,
  alt,
}) => {
  
  return (
    <div className="px-1 py-2 rounded-[20px]">
      <div className="min-w-[300px] flex space-x-2 items-center rounded-[20px] shadow-lg cursor-pointer">
        <div className="w-24 h-24 bg-[url('/coding-niche.png')] bg-cover" />
        <div className="flex flex-col gap-1 px-2">
          <h6 className="truncate max-w-[200px] text-[10px] text-gray-500">
            {courseName}
          </h6>
          <div className="flex items-center justify-between">
            <h5 className="text-xs xl:text-sm max-w-[200px] font-medium">{chapterName}</h5>
            <div className="rounded-full bg-yellow p-2">
              <PlayIcon className="h-3" />
            </div>
          </div>
          <div className="text-[10px] text-gray-500">{chapterDuration}</div>
        </div>
      </div>
    </div>
  );
};

export default HistoryItem;
