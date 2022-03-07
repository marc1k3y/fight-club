import cn from "./style.module.css"
import { links } from "./links"
import { NavLink, useLocation } from "react-router-dom"

export const Navbar = ({ visible, close }) => {
  const { pathname } = useLocation()
  return (
    <div className={cn.navbarWrapper} style={{ display: visible ? "flex" : "none" }}>
      {links.map(link =>
        <NavLink
          key={link.to}
          to={link.to}
          onClick={() => close(false)}
          style={{ backgroundColor: pathname === link.to && "gray", color: pathname === link.to && "white" }}>
          {link.title}
        </NavLink>)}
    </div>
  )
}