'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export default function TipTap({onChange, content}: any) {

    const handleChange = (newContent: string) => {
        onChange(newContent)
    }

  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
    editorProps: {
        attributes: {
            class: "flex"
        }
    },

    onUpdate: ({editor}) => {
        handleChange(editor.getHTML())
    }
  })

  return <EditorContent editor={editor} />
}

