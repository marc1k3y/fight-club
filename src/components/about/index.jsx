import cn from "./style.module.css"
import fcLogo from "../assets/fc_orel.jpg"

export const About = () => {
  return (
    <div className={cn.aboutWrapper}>
      <div className={cn.clubLogo}>
        <img src={fcLogo} alt="fight club logo" />
      </div>
      <h1>БОЙЦОВСКИЙ КЛУБ ОРЁЛ</h1>
      <div className={cn.addr}>
        <div className={cn.global}>
          Россия, Москва
        </div>
        <div className={cn.local}>
          <div className={cn.undgr}>
            метро Сокольники
          </div>
          <div className={cn.exact}>
            улица Русаковская 10с3 <br />
            школа 315
          </div>
        </div>
      </div>
    </div>
  )
}