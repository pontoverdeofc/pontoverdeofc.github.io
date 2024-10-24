import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const links = [
  { title: "Home", path: "/" },
  { title: "Sobre", path: "/sobre" },
  { title: "Servicos", path: "/servicos" },
  { title: "Login", path: "/login" },
];

const linksLogado = [
  { title: "Home", path: "/" },
  { title: "Sobre", path: "/sobre" },
  { title: "Servicos", path: "/servicos" },
  { title: "Dashboard", path: "/dashboard" },
  { title: "Logout", path: "/logout" },
];

export const MenuLink = ({ buttonClicked, setButtonClicked, isLoggedIn }) => {
  const navigate = useNavigate();
  const menuLinks = isLoggedIn ? linksLogado : links;

  useEffect(() => {
    const path = window.location.pathname;
    const link = menuLinks.find((link) => link.path === path);
    if (link && link.title !== buttonClicked) {
      setButtonClicked(link.title);
    }
  }, [buttonClicked, menuLinks, setButtonClicked]);

  return (
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {menuLinks.map((link, index) => (
          <li key={index}>
            <button
              className={`block py-2 px-3 rounded md:p-0 hover:text-blue-300 ${
                buttonClicked === link.title
                  ? "text-blue-700 font-bold"
                  : "text-white font-normal"
              }`}
              aria-current="page"
              onClick={() => {
                setButtonClicked(link.title);
                navigate(link.path);
              }}
            >
              {link.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
