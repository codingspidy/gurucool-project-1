import { ChevronDownIcon } from "@heroicons/react/24/solid";

const SortingSelect = () => {
  return (
    <div>
      <div className="text-gray-600 text-sm mb-2">Sort by</div>
      <div className="flex gap-3">
        <div className="w-40 relative">
          <select
            className="form-select text-center block w-full px-3 py-3
                  text-base
                  appearance-none
                  font-medium
                  text-black bg-white
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
          >                
            <option defaultValue="Categories">Categories</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <ChevronDownIcon className="h-4 absolute top-4 right-3" />
        </div>
        <div className="w-40 relative">
          <select
            className="form-select text-center block w-full px-3 py-3
                  text-base
                  font-medium             
                  appearance-none    
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
            <option defaultValue="Free">Free</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <ChevronDownIcon className="h-4 absolute top-4 right-8" />
        </div>
      </div>
    </div>
  );
};

export default SortingSelect;
