export default function Search() {
    return (
    <div id="search-wrapper">
      <form className="w-1/3 h-[80px] bg-gray-100 rounded-full flex items-center p-4 focus-within:shadow-lg focus-within:ring-2 focus-within:ring-gray-300" onSubmit={(e) => e.preventDefault()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-2 text-gray-500"
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
          className="bg-transparent outline-none text-gray-700 flex-grow"
        />
      </form>
      </div>
    );
  }
  