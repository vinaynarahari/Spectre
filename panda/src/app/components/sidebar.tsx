"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navItems = [
  {
    id: "0",
    text: "Workspace",
    href: "/",
    icon: "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
  },
  {
    id: "2",
    text: "Clients",
    href: "/clients",
    icon: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z",
  },
  {
    id: "3",
    text: "Trash",
    href: "/trash",
    icon: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0",
  },
  {
    id: "4",
    text: "Profile",
    href: "/profile",
    icon: "M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  },
];

export default function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex min-h-screen relative group">
      <aside
        className={`flex flex-col p-2 transition-width duration-300 ${
          isCollapsed ? "w-20" : "w-64"
        } bg-gray-900 text-gray-300`}
      >
        <div className="flex justify-center items-center py-4">
          <Image
            src={isCollapsed ? "/collapsed-logo.png" : "/logo.png"} 
            alt="Logo"
            width={isCollapsed ? 40 : 160}
            height={isCollapsed ? 40 : 60}
            className="transition-all duration-200"
            priority
          />
        </div>

        <div
          className={`flex rounded-lg ${
            isCollapsed ? "justify-center" : ""
          } bg-gray-800 hover:bg-gray-700 transition-all duration-200 mb-2`}
        >
          <a
            href="/new-case"
            className={`flex items-center w-full px-2 py-2 ${
              isCollapsed ? "justify-center" : ""
            } rounded-lg transition-all duration-200`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
              />
            </svg>
            {!isCollapsed && <span className="pl-2 text-gray-300">New Case</span>}
          </a>
        </div>

        <nav>
          <ul>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`flex items-center rounded-lg px-3 py-2 mb-2 transition-all duration-200 ${
                  isCollapsed ? "justify-center" : ""
                } hover:bg-gray-700`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-300"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
                {!isCollapsed && <span className="ml-2 text-gray-300">{item.text}</span>}
              </a>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Toggle button - only visible on sidebar hover */}
      <div
        className="absolute top-1/2 -right-3 transform -translate-y-1/2 bg-gray-900 hover:bg-gray-900 p-1 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className={`w-5 h-5 transform transition-transform duration-300 ${
            isCollapsed ? "rotate-180" : ""
          } text-gray-300 hover:text-yellow-500`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
    </div>
  );
}