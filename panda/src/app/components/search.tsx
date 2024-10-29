"use client";

export default function Search() {
  return (
    <div className="flex w-full justify-center">
      <div className="flex justify-center w-full">
        <form
          className="w-1/2 h-[50px] bg-gray-200 rounded-full flex items-center p-4 transition-all duration-300 focus-within:bg-gray-300"
          onSubmit={(e) => e.preventDefault()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2 text-gray-500 transition-colors duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-gray-700 flex-grow transition-colors duration-300 focus:text-gray-900"
          />
        </form>
      </div>
    </div>
  );
}
