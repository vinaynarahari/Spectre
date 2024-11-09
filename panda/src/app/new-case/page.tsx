import { v4 as uuidv4 } from 'uuid';
import AnalyzerPrompt from '../components/analyzer-prompt';
import RichTextEditor from '../components/rich-text-editor';

export default function NewCase() {

    const id = uuidv4();

    return (
        <main>
        <div key={id} className="bg-gray-200 grid grid-cols-2 gap-10 min-h-screen">
            <div className="text-center border-r-4 border-gray-500">
                <AnalyzerPrompt />
            </div>
            <div className="text-left p-3">
                <RichTextEditor
                    content={""}
                    caseId={id} title={""}/>
            </div>
        </div>
    </main>
    )
}