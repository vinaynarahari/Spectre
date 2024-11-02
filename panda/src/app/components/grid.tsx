
import docs from "@/app/gridinfo.json"

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


export default function Grid() {

    return (
        <div className="my-10 mx-5">
            <div className="grid grid-cols-4 gap-10">
                {docs.map((doc) => (
                    <div key={doc.id}>
                        <div className="h-48 w-3/4 bg-gray-100 mx-auto ">

                        </div>
                        <div className="text-center  w-3/4 bg-gray-200 mx-auto p-2">
                            {/* <div className="bg-red-50">{doc.caseType}</div> */}
                            <div>{truncateString(doc.title , 20)}</div>
                            <div className="text-xs">Last opened {processDate(doc.lastOpened)}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}