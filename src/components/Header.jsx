import { motion } from "framer-motion";
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineClose,
} from "react-icons/ai";

function Header() {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <motion.label
          htmlFor="my-drawer-4"
          className="drawer-button btn-primary"
        >
          <motion.svg
            whileHover={{ scale: 1.1 }}
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
              fill="#000000"
            />
          </motion.svg>
        </motion.label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <ul className="menu p-4 w-50 md:w-120 space-y-2 max-h-120 bg-base-200 text-base-content rounded-lg font-semibold">
          <li>
            <a className="text-lg md:text-xl" href="#about">
              JADA GANIM
            </a>
          </li>
          <li>
            <a className="text-lg md:text-xl" href="#featured">
              FEATURED
            </a>
          </li>

          <li>
            <a className="text-lg md:text-xl" href="#films">
              NARRATIVE
            </a>
          </li>
          <li>
            <a className="text-lg md:text-xl" href="#assisted">
              COMMERCIAL
            </a>
          </li>
          <li>
            <a className="text-lg md:text-xl" href="#contact">
              CONTACT
            </a>
          </li>
          <li className="grid grid-cols-3">
            <a
              className="flex items-center justify-center"
              href="https://www.instagram.com/jadaganim"
              target="__blank"
            >
              <AiOutlineInstagram size="2em" />
            </a>
            <a
              className="flex items-center justify-center"
              href="https://www.linkedin.com/in/jada-ganim"
              target="__blank"
            >
              <AiOutlineLinkedin size="2em" />
            </a>
            <a
              className="flex items-center justify-center"
              href="https://www.youtube.com/jadaganim"
              target="__blank"
            >
              <AiOutlineYoutube size="2em" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
