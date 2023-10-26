
import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  let location = useLocation();
  let pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div>
      <Link to="/">Home</Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        return (
          <span key={index}>
            {" > "}
            <Link to={to}>{value}</Link>
          </span>
        );
      })}
    </div>
  );
}

export default Breadcrumbs;
