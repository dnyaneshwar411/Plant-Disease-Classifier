import { useContext, useEffect, useState } from "react"
import { collection, query, getDocs, getFirestore } from "firebase/firestore";
import { UserContext, app } from "../Contexts/UserContext";
import BlogItem from "../Components/Blogs/BlogItem";
import { NavLink } from "react-router-dom";

export async function getBlogs() {
  const db = getFirestore(app);
  const q = query(collection(db, "blogs"));
  const querySnapshot = await getDocs(q);
  const allBlogs = []
  querySnapshot.forEach((doc) => {
    allBlogs.push(doc.data());
  });
  return allBlogs;
}

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  const { user } = useContext(UserContext);

  useEffect(function () {
    async function func() {
      const res = await getBlogs();
      setBlogs(res)
    }
    func()
  }, [setBlogs]);
  return <>
    {user && <NavLink to="/blogs/create-blog"><button className="bg-red-600 mb-10">Publish Blog</button></NavLink>}
    <div className="gap-10 flex flex-wrap justify-stretch grow">
      {blogs.map(blog => <BlogItem key={blog.createdAt} blog={blog} />)}
    </div>
  </>
}