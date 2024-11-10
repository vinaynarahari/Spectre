"use client";

import { useEffect, useState } from 'react';
import TipTap from "@/app/components/tiptap-editor";

export default function RichTextEditor({ content, title: initialTitle, caseId }) {
    const [editorContent, setEditorContent] = useState(content);
    const [title, setTitle] = useState(initialTitle);

    useEffect(() => {
        setEditorContent(content); 
    }, [content]);

    const handleContentChange = (newContent) => setEditorContent(newContent);
    const handleTitleChange = (e) => setTitle(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            id: caseId,
            title: title,
            content: editorContent,
            lastOpened: new Date().toISOString(),
            caseType: "OT",
        };

        try {
            let response;

            // Check if the case exists with a GET request
            const checkResponse = await fetch(`/api/cases`);
            const cases = await checkResponse.json();

            const existingCase = cases.find((c) => c.id === caseId);

            if (existingCase) {
                // Case exists; update with PUT
                response = await fetch(`/api/cases`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });
            } else {
                // Case does not exist; create with POST
                response = await fetch(`/api/cases`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });
            }

            if (response && response.ok) {
                const updatedData = await response.json();
                setTitle(updatedData.title);
                setEditorContent(updatedData.content);
                console.log("Data saved and updated successfully");
            } else {
                console.error("Failed to save data", response.status);
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                placeholder="Case Title"
                className="w-full mb-4 px-3 py-2 border rounded-md"
            />
            <TipTap
                content={editorContent}
                onChange={handleContentChange}
            />
            <button
                type="submit"
                className="px-4 bg-sky-700 text-white py-2 rounded-md mt-4"
            >
                Save
            </button>
        </form>
    );
};
