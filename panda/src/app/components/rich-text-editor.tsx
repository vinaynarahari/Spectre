// src/app/components/rich-text-editor.tsx
"use client";

import { useEffect, useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TipTap from "@/app/components/tiptap-editor"
import { v4 as uuidv4 } from "uuid"

export default function RichTextEditor({content, caseId}) {

    const [editorContent, setEditorContent] = useState(content);
    
    const handleContentChange = (reason: any) => (
        setEditorContent(reason)
    )

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const data = {
            id: caseId,
            title: "New Case",
            content: editorContent,
            lastOpened: new Date().toISOString(),
            caseType: "OT"
        };
        
        console.log(caseId)

        try {
            const response = await fetch(`http://localhost:4000/cases/${caseId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            if (response.ok) {
                console.log("Data saved successfully");
            } else {
                console.error("Failed to save data", response.status);
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <TipTap
                content={content}
                onChange={(newContent: string) => handleContentChange(newContent)}
            />
            <button
                type="submit"
                className="px-4 bg-sky-700 text-white py-2 rounded-md"
            >
                Add
            </button>
        </form>
    )

};
