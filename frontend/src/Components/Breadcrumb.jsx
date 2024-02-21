import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const { pathname } = useLocation();
  let curLocation = "";

  const crumbs = pathname.split("/").filter(crumb => crumb !== "").map(crumb => {
    curLocation += `/${crumb}`
    return { crumb, location: curLocation }
  });
  const length = crumbs.length

  return <div className="breadcrumb mb-5 ">
    <Link to="/">HOME &nbsp;{length > 0 && "> "}</Link>{crumbs.map(({ crumb, location }, index) => <Link key={index} to={location} >&nbsp; {crumb.toUpperCase()} &nbsp;{index != length - 1 ? " > " : ""} </Link>)}
  </div>
}