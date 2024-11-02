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

export default async function CaseDetails({ params }) {    
    const { id } = await params;

    if (!id) {
        notFound();
    }

    const c = await getCase(id);

    return (
        <main>
            <div key={c.id}>
                <h2>{c.title}</h2>
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