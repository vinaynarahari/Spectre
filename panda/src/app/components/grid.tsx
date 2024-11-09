"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useState, useEffect } from "react";
import { Key } from "react";
import Search from "@/app/components/search"; 

function truncateString(str: string): string {
  if (str.length <= 20) {
    return str;
  } else {
    return str.slice(0, 20) + "...";
  }
}

function processDate(str: string) {
  let months = new Map<number, string>([
    [1, "Jan"], [2, "Feb"], [3, "Mar"], [4, "Apr"], [5, "May"], [6, "Jun"],
    [7, "Jul"], [8, "Aug"], [9, "Sep"], [10, "Oct"], [11, "Nov"], [12, "Dec"],
  ]);
  var year = str.substring(0, 4);
  var month: number = +str.substring(5, 7);
  var day = str.substring(8, 10);

  return months.get(month) + " " + day + ", " + year;
}

async function getDocs() {
  const res = await fetch("http://localhost:4000/cases");
  if (!res.ok) {
    notFound();
  }
  return res.json();
}

export default function Grid() {
  const [docs, setDocs] = useState([]);
  const [filteredDocs, setFilteredDocs] = useState([]);

  useEffect(() => {
    async function fetchDocs() {
      const docs = await getDocs();
      setDocs(docs);
      setFilteredDocs(docs); 
    }
    fetchDocs();
  }, []);

  const handleSearch = (query: string) => {
    const filtered = docs.filter((doc: { title: string }) =>
      doc.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredDocs(filtered);
  };

  return (
    <div className="mx-5">
      <Search onSearch={handleSearch} /> 
      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-5">
          {filteredDocs.map((doc: { id: Key | null | undefined; title: string; lastOpened: string }) => (
            <div key={doc.id} className="flex justify-center">
              <div className="w-52 min-w-0">
                <div className="h-64 bg-gray-100 mx-auto rounded-md pt-48 mb-4">
                <div className="text-left text-sm  text-white bg-gray-900 p-3 h-16 overflow-hidden rounded-b-md">
                  <Link href={`/analyze/${doc.id}`}>
                    <div className="whitespace-nowrap overflow-hidden text-ellipsis">
                      {doc.title}
                    </div>
                  </Link>
                  <div className="text-xs whitespace-nowrap overflow-hidden text-ellipsis">
                    Last edited {processDate(doc.lastOpened)}
                  </div>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
