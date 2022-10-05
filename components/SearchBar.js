import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchBar = ({ className }) => {
  return (
    <div className={"relative " + className}>
      <button className="absolute top-[.85rem] left-2" type="submit">
        <MagnifyingGlassIcon className="h-4 text-gray-600" />
      </button>
      <input
        className="bg-white shadow-md rounded-md text-sm py-3 px-10 focus:outline-none w-full md:w-80"
        type="search"
        name="search"
        placeholder="Search courses"
      />
    </div>
  );
};

export default SearchBar;
