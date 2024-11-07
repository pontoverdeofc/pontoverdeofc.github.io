// src/components/MenuLink.tsx

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Link {
  title: string;
  path: string;
}

interface MenuLinkProps {
  buttonClicked: string;
  setButtonClicked: (title: string) => void;
  isLoggedIn: boolean;
}

const links: Link[] = [
  { title: "Home", path: "/" },
  { title: "Sobre", path: "/sobre" },
  { title: "Serviços", path: "/servicos" },
];

const linksLogado: Link[] = [
  { title: "Home", path: "/" },
  { title: "Sobre", path: "/sobre" },
  { title: "Serviços", path: "/servicos" },
  { title: "Dashboard", path: "/dashboard" },
  { title: "Logout", path: "/logout" },
];

export const MenuLink: React.FC<MenuLinkProps> = ({ buttonClicked, setButtonClicked, isLoggedIn }) => {
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
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-green-800 dark:border-gray-700">
        {menuLinks.map((link, index) => (
          <li key={index}>
            <button
              className={`block py-4 px-6 bg-lime-700 hover:bg-lime-900 md:p-1 hover:text-blue-300 hover:border-none ${
                buttonClicked === link.title
                  ? "text-sky-700 font-bold"
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
