import { useCurrentEditor } from "@tiptap/react";

import { Bars3BottomLeftIcon, Bars3BottomRightIcon, Bars3Icon, ListBulletIcon, ArrowUturnLeftIcon, ArrowUturnRightIcon, PhotoIcon } from '@heroicons/react/24/solid';

import styles from "./Menu.module.css";

export default function Menu({ setIsModalShown, setContent }) {
  const { editor } = useCurrentEditor();
  if (!editor) {
    return null
  }

  function addImage() {
    const url = window.prompt('URL');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }

  function publishBlog() {
    const html = editor.getHTML();
    setContent(html);
    setIsModalShown(true);
  }
  return (
    <div className="mb-10">
      <button className={styles.MarkupBtn} onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>h1</button>
      <button className={styles.MarkupBtn} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>h2</button>
      <button className={styles.MarkupBtn} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>h3</button>
      <button className={styles.MarkupBtn} onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}>h4</button>
      <button className={styles.MarkupBtn} onClick={() => editor.chain().focus().setParagraph().run()}>p</button>
      <button className={styles.MarkupBtn} onClick={() => editor.chain().focus().toggleBold().run()}>B</button>
      <button className={styles.MarkupBtn} onClick={() => editor.chain().focus().toggleUnderline().run()}><u>U</u></button>
      <button className={styles.MarkupBtn} onClick={() => editor.chain().focus().toggleItalic().run()}><em>i</em></button>
      <button className={styles.MarkupBtn} onClick={() => editor.chain().focus().toggleStrike().run()}><strike>$</strike></button>
      <span onClick={() => editor.chain().focus().setTextAlign('left').run()}>
        <Bars3BottomLeftIcon className={`${styles.MarkupBtn} inline p-2`} />
      </span>
      <span onClick={() => editor.chain().focus().setTextAlign('center').run()}>
        <Bars3Icon className={`${styles.MarkupBtn} inline p-2`} />
      </span>
      <span
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
      >
        <Bars3BottomRightIcon className={`${styles.MarkupBtn} inline p-2`} />
      </span>
      <span onClick={() => { }}>
        <ListBulletIcon className={`${styles.MarkupBtn} inline p-2`} />
      </span>
      <span onClick={() => editor.chain().focus().undo().run()}>
        <ArrowUturnLeftIcon className={`${styles.MarkupBtn} inline p-3`} />
      </span>
      <span onClick={() => editor.chain().focus().redo().run()}>
        <ArrowUturnRightIcon className={`${styles.MarkupBtn} inline p-3`} />
      </span>
      <span onClick={addImage}>
        <PhotoIcon className={`${styles.MarkupBtn} inline p-3`} />
      </span>
      <button onClick={publishBlog} className={`ml-auto ${styles.PublishBtn}`}>Publish</button>
    </div>
  )
}