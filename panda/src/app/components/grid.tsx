
import Link from "next/link";
import { notFound } from "next/navigation";
import { Key } from "react";

function truncateString(str: string, maxLength: number): string {
    if (str.length <= maxLength) {
      return str; 
    } else {
      return str.slice(0, maxLength) + "..."; 
    }
  }

function processDate(str: string) {
    // 2024-10-26T09:15:00Z
    let months = new Map<number, string>([
        [1, "Jan"],
        [2, "Feb"],
        [3, "Mar"],
        [4, "Apr"],
        [5, "May"],
        [6, "Jun"],
        [7, "Jul"],
        [8, "Aug"],
        [9, "Sep"],
        [10, "Oct"],
        [11, "Nov"],
        [12, "Dec"],
    ]);
    var year = str.substring(0, 4);
    var month:number = +str.substring(5, 7);
    var day = str.substring(9, 10);

    return months.get(month) + " " + day + ", " + year;
}

async function getDocs() {
    const res = await fetch("http://localhost:4000/cases");

    if (!res.ok) {
        notFound();
    }

    return res.json();
}


export default async function Grid() {

    const docs = await getDocs();

    return (
        <div className="my-10 mx-5">
            <div className="grid grid-cols-4 gap-10">
                {docs.map((doc: { id: Key | null | undefined; title: string; lastOpened: string; }) => (
                    <div key={doc.id}>
                        <div className="h-48 w-3/4 bg-gray-100 mx-auto ">

                        </div>
                        <div className="text-left text-sm w-3/4 bg-gray-200 mx-auto p-3">
                            <Link href={`/analyze/${doc.id}`}>
                                <div>
                                    {truncateString(doc.title , 20)}
                                </div>
                            </Link>
                            <div className="text-xs">Last opened {processDate(doc.lastOpened)}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}