import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { app } from "../../Contexts/UserContext";

import './BlogDescription.module.css'

export default function BlogDescription() {
  const { id } = useParams()
  const [content, setContent] = useState("")
  useEffect(function () {
    const db = getFirestore(app);
    async function readBlog() {
      const blog = doc(db, "blogs", id);
      const blogData = await getDoc(blog);
      if (blogData.exists()) {
        const content = blogData.data().content;
        setContent(content);
      } else {
        setContent("<p>no Such Blog Post Available");
      }
    }
    readBlog()
  }, [setContent]);

  return <div className="blogContainer max-w-[1024px] mx-auto mt-20" >
    <div dangerouslySetInnerHTML={{ __html: content }}></div>
  </ div>
}