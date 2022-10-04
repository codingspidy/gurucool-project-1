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
    <div className="flex space-x-4 items-center rounded-tl-[20px] rounded-bl-[20px] shadow-lg cursor-pointer">
      <div className="w-24 xl:w-28 ">
        <Image src={src} width={153} height={146} />
      </div>
      <div className="flex flex-col">
        <h6 className="truncate max-w-[200px] text-[10px] text-gray-500">{courseName}</h6>
        <div className="flex items-center justify-between">
          <h5 className="text-sm max-w-[200px]">{chapterName}</h5>
          <div className="rounded-full bg-yellow p-2">
            <PlayIcon className="h-3" />
          </div>
        </div>
        <div className="text-[10px] text-gray-500">{chapterDuration}</div>
      </div>
    </div>
  );
};

export default HistoryItem;
