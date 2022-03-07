import cn from "./style.module.css"
import hide from "../../assets/hide.svg"
import show from "../../assets/show.svg"
import { useState } from "react"
import { Navbar } from "./navbar"

export const Header = () => {
  const [burger, setBurger] = useState(false)
  return (
    <div className={cn.headerWrapper}>
      <div className={cn.logo}>
        БК ОРЕЛ
      </div>
      <div className={cn.burger}>
        <img
          src={burger ? show : hide}
          alt="hide"
          onClick={() => setBurger(!burger)} />
      </div>
      <Navbar visible={burger} close={setBurger} />
    </div>
  )
}