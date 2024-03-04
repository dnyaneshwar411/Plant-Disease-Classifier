import { EditorProvider, useCurrentEditor } from '@tiptap/react';
import Underline from "@tiptap/extension-underline";
import TextAlign from '@tiptap/extension-text-align';
import Image from '@tiptap/extension-image'
import StarterKit from '@tiptap/starter-kit';
import Menu from './Menu';
import { useEffect, useLayoutEffect, useState } from 'react';
import FormModal from './FormModal';
import { useContext } from 'react';
import { UserContext } from '../../Contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const cont = `write your blog post...`;
const extensions = [
  StarterKit,
  Underline,
  Text,
  Image,
  TextAlign.configure({
    types: ['heading', 'paragraph'],
  })
];

export default function Editor() {
  const [ismodalShown, setIsModalShown] = useState(false);
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const { user } = useContext(UserContext);
  useLayoutEffect(function () {
    function navigateUser() {
      if (!user) navigate("/")
    }
    navigateUser()
    return navigateUser
  }, [user]);

  return <>
    <div className="py-6 px-8 border-2">
      <div className={`${ismodalShown ? "opacity-5" : ""}`}>
        <EditorProvider slotBefore={<Menu setIsModalShown={setIsModalShown} setContent={setContent} />} extensions={extensions} content={cont}></EditorProvider>
      </div>
      {ismodalShown && <FormModal setIsModalShown={setIsModalShown} content={content} />}
    </div>
  </>
}