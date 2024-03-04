import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { UserContext, app } from "../../Contexts/UserContext";

export default function FormModal({ setIsModalShown, content }) {

  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [description, setDescription] = useState("");
  const db = getFirestore(app);
  const { user } = useContext(UserContext);

  async function publishBlog() {
    if (!title || !thumbnail || !description) return
    const blogTitle = title.toLowerCase().trimEnd().trimStart().split(" ").join("-");
    const blog = {
      title,
      slug: blogTitle,
      thumbnail,
      content,
      description,
      createdAt: new Date(),
      createdById: user.uid
    }
    try {
      await setDoc(doc(db, "blogs", blogTitle), blog);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return <div className="fixed height-96 bg-slate-800 px-10 py-10 top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] text-black">
    <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="p-2 my-2 block" placeholder="title" />
    <input type="text" value={thumbnail} onChange={e => setThumbnail(e.target.value)} className="p-2 my-2 block" placeholder="thumbnail url" />
    <input type="text" value={description} onChange={e => setDescription(e.target.value)} className="p-2 my-2 block" placeholder="description" />
    <button className="bg-lime-600 text-sm text-white mt-2 mr-4" onClick={publishBlog}>Publish</button>
    <button className="bg-red-600 text-sm text-white mt-2" onClick={() => setIsModalShown(false)}>Cancel</button>
  </div>;
}