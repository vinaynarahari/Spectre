"use client";

import { useState, useEffect, useRef } from "react";

export default function Search({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  const handleIconClick = () => {
    inputRef.current?.focus();
  };

  const handleEscapeKey = (e: KeyboardEvent) => {
    if (e.key === "Escape" && isInputFocused) {
      e.preventDefault(); // Prevents exiting fullscreen
      setQuery("");
      inputRef.current?.blur();
    }
  };

  // Effect to handle Command+K or Control+K activation and Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
      handleEscapeKey(e);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isInputFocused]);

  return (
    <div className="flex w-full justify-center">
      <div className="flex justify-center w-full">
        <form
          className="relative w-1/2 h-[50px] bg-gray-100 rounded-lg flex items-center p-4 transition-all duration-300 focus-within:bg-gray-200 focus-within:outline focus-within:outline-2 focus-within:outline-gray-900 focus-within:outline-offset-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2 text-gray-500 transition-colors duration-300 cursor-pointer"
            onClick={handleIconClick}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search"
            value={query}
            onChange={handleSearchChange}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
            className="bg-transparent outline-none text-gray-700 flex-grow transition-colors duration-300 focus:text-gray-900 pr-10"
          />
          <span className="absolute right-4 text-gray-400 text-sm pointer-events-none">
            ⌘ + K
          </span>
        </form>
      </div>
    </div>
  );
}
