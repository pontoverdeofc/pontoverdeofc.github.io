// src/components/Header.tsx

import logo from "../images/logo.png";
import { MenuLink } from "./MenuLink";

interface HeaderProps {
  buttonClicked: string;
  setButtonClicked: (title: string) => void;
  isLoggedIn: boolean;
}

const Header: React.FC<HeaderProps> = ({
  buttonClicked,
  setButtonClicked,
  isLoggedIn,
}) => {
  return (
    <nav className="bg-green-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        
        {/* Logo and Title */}
        <a href="/" className="flex items-center space-x-3">
          <img src={logo} className="h-10" alt="Logo" />
          <span className="text-3xl font-bold text-white tracking-wide mt-2">
            PONTO VERDE
          </span>
        </a>

        {/* Menu button for small screens */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg md:hidden hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Menu links */}
        <div className="hidden md:flex space-x-6">
          <MenuLink
            buttonClicked={buttonClicked}
            setButtonClicked={setButtonClicked}
            isLoggedIn={isLoggedIn}
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
