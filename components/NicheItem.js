import Image from "next/image";

const NicheItem = ({ title, coursesCount, src, alt }) => {
    return (
        <div className="bg-white flex space-x-5 items-center rounded-[20px] shadow-md cursor-pointer"> 
           <div className="w-16 lg:w-20 h-full">
            <Image src={src} width={98} height={95} layout='responsive' />
           </div>
           <div>
            <h5 className="font-medium">{title}</h5>
            <span className="text-xs text-gray-500">{coursesCount + " Courses"}</span>
           </div>
        </div>
    )
}

export default NicheItem;