const NicheItem = ({ course, coursesCount, imgSrc, alt }) => {
    return (
        <div className="bg-white flex space-x-5 items-center rounded-[20px] shadow-md cursor-pointer w-full max-w-[290px]"> 
           <div className="w-14 h-14 lg:w-20 lg:h-20 bg-[url('/business-niche.png')] rounded-tl-[20px] rounded-bl-[20px] bg-cover" />
           <div>
            <h5 className="text-sm xl:text-lg font-medium">{course}</h5>
            <span className="text-[10px] xl:text-xs text-gray-500">{coursesCount + " Courses"}</span>
           </div>
        </div>
    )
}

export default NicheItem;