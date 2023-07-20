import { motion } from "framer-motion"

function Header() {
  return (
    <div className="drawer drawer-end">
    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">
        <motion.label htmlFor="my-drawer-4" className="drawer-button btn-primary">
        <motion.svg whileHover={{scale:1.1}}  width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" fill="#C7C7A6"/>
        </motion.svg>
        </motion.label>
    </div> 
    <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
        {/* Sidebar content here */}
        <li><a href="#about">Jada Ganim</a></li>
        <li><a href="#films">Written & Directed Work</a></li>
        <li><a href="#assisted">Producer & Assistant Director Work</a></li>
        <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
    </div>
  )
}

export default Header
