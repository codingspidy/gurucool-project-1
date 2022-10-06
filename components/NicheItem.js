const NicheItem = ({ course, coursesCount, imgSrc, alt }) => {
    return (
        <div className="bg-white flex space-x-5 items-center rounded-[15px] shadow-md cursor-pointer w-full"> 
           <div className="w-14 h-14 lg:w-20 lg:h-20 bg-[url('/business-niche.png')] rounded-tl-[15px] rounded-bl-[15px] bg-cover" />
           <div className="flex flex-col items-stretch">
            <h5 className="text-sm xl:text-lg font-medium">{course}</h5>
            <span className="text-[8px] xl:text-xs text-gray-500">{coursesCount + " Courses"}</span>
           </div>
        </div>
    )
}

export default NicheItem;