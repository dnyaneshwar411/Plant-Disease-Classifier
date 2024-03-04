import { NavLink } from "react-router-dom";

export default function BlogItem({ blog }) {
  return <div className="w-1/4 rounded-md overflow-hidden border-2">
    <NavLink to={blog.slug}>
      <img src={blog.thumbnail} className="w-full aspect-video object-cover" alt="" />
      <div className="px-6 py-4 text-white">
        {blog?.description.slice(0, 100) + " ..."}
      </div>
    </NavLink>
  </div>
}