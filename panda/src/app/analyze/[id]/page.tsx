import { notFound } from "next/navigation";

async function getCase(id) {
    const response = await fetch(`http://localhost:4000/cases/${id}`, {
        next: {
            revalidate: 0
        }
    });

    if (!response.ok) {
        notFound();
    }
    return response.json();
}

function updateCase() {
    
}

function CaseEditor({ caseData }) {

}

export default async function CasePage({ params }) {    
    const { id } = await params;

    if (!id) {
        notFound();
    }

    const c = await getCase(id);

    return (
        <main>
            <div key={c.id} className="bg-gray-200 grid grid-cols-2 gap-10 min-h-screen">
                <div className="text-center border-r-4 border-gray-500">
                    Model Output
                </div>
                <div className="text-center">
                    {c.title}
                    {c.body}
                </div>
            </div>
        </main>
    );
}

export async function generateStaticParams() {
    const response = await fetch("http://localhost:4000/cases");
    const cases = await response.json();

    return cases.map((caseItem) => ({
        id: caseItem.id.toString()
    }));
}