import { ChevronRight } from "lucide-react";
import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();
  const pathSlice = location.pathname.split("/").filter((e) => e);

  if (pathSlice.length === 0) {
    return (
      <span className="text-gray-700 cursor-default dark:text-gray-400">
        Dashboard
      </span>
    );
  }

  return (
    <>
      {pathSlice.map((e, i) => {
        const label = e.charAt(0).toUpperCase() + e.slice(1);
        const url = "/" + pathSlice.slice(0, i + 1).join("/");
        const isLast = i === pathSlice.length - 1;
        const isFirst = i === 0;

        return (
          <Fragment key={url}>
            {i > 0 && <ChevronRight size={16} className="text-gray-400" />}

            {isFirst ? (
              <span className="text-gray-700 dark:text-gray-400 cursor-default">
                {label}
              </span>
            ) : (
              <Link
                to={url}
                className={isLast ? "text-primary" : "text-gray-400"}
              >
                {label}
              </Link>
            )}
          </Fragment>
        );
      })}
    </>
  );
}
