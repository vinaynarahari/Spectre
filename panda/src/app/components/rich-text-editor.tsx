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
            // Check if the case exists with a HEAD request
            const checkResponse = await fetch(`http://localhost:4000/cases/${caseId}`, {
                method: 'HEAD',
            });

            let response;

            if (checkResponse.ok) {
                // Case exists; update with PUT
                response = await fetch(`http://localhost:4000/cases/${caseId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });
            } else if (checkResponse.status === 404) {
                // Case does not exist; create with POST
                response = await fetch(`http://localhost:4000/cases`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });
            } else {
                throw new Error("Failed to check case existence");
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
