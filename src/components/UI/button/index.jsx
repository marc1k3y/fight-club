import cn from "./style.module.css"

export const MyButton = ({ click, children }) => {
  return (
    <button className={cn.myBtn} onClick={click}>{children}</button>
  )
}