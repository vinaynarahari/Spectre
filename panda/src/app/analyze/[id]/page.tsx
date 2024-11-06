// app/analyze/[id]/page.tsx
import RichTextEditor from "@/app/components/rich-text-editor";
import { notFound } from "next/navigation";
import AnalyzerPrompt from "@/app/components/analyzer-prompt";

async function getCase(id) {
    const response = await fetch(`http://localhost:4000/cases/${id}`, {
        next: {
            revalidate: 0,
        },
    });

    if (!response.ok) {
        notFound();
    }
    return response.json();
}

export default async function CasePage({ params }) {
    const { id } = await params;

    if (!id) {
        notFound();
    }
    
    const caseData = await getCase(id);

    return (
        <main>
            <div key={caseData.id} className="bg-gray-200 grid grid-cols-2 gap-10 min-h-screen">
                <div className="text-center border-r-4 border-gray-500">
                    <AnalyzerPrompt />
                </div>
                <div className="text-center">
                    <h2>{caseData.title}</h2>
                    <RichTextEditor
                        content={caseData.body}
                        caseId={id}
                    />
                </div>
            </div>
        </main>
    );
}

export async function generateStaticParams() {
    const response = await fetch("http://localhost:4000/cases");
    const cases = await response.json();

    return cases.map((caseItem) => ({
        id: caseItem.id.toString(),
    }));
}
