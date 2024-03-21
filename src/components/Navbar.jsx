import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const getLocalTheme = () => {
  const theme = localStorage.getItem("theme");

  if (theme) {
    return theme;
  } else {
    return "light";
  }
};

const Navbar = () => {
  const [theme, setTheme] = useState(getLocalTheme());

  const handleToggleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);

    const localTheme = localStorage.getItem("theme");

    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <div className="fixed z-50 px-4 shadow-lg navbar bg-base-100">
      <div className="flex-1">
        <a className="gap-0 text-2xl normal-case btn btn-ghost text-secondary">
          Byte<span className="text-primary">Blaze</span>
        </a>
      </div>
      <div className="flex-none">
        <ul className="px-1 menu menu-horizontal">
          <li>
            <Link to="/" className="font-bold text-primary">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="font-bold">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/bookmarks" className="font-bold">
              Bookmarks
            </Link>
          </li>
        </ul>
        <label className="grid cursor-pointer place-items-center">
          <input
            type="checkbox"
            onChange={handleToggleTheme}
            checked={theme === "light" ? false : true}
            className="col-span-2 col-start-1 row-start-1 toggle theme-controller bg-base-content"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
