import { useCurrentEditor } from "@tiptap/react"


const editor = useCurrentEditor();
export const bold = () => editor.chain().focus().toggleBold().run()