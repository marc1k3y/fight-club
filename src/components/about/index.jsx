import cn from "./style.module.css"
import fcLogo from "../../assets/fc_orel.jpg"
import { Modal } from "../modal"
import { useState } from "react"
import { MyButton } from "../UI/button"
import map from "../../assets/map.svg"
import EmailForm from "../emailForm"

export const About = () => {
  const [modal, setModal] = useState(false)
  return (
    <div className={cn.aboutWrapper}>
      <div className={cn.clubLogo}>
        <img src={fcLogo} alt="fight club logo" />
      </div>
      <h1>БОЙЦОВСКИЙ КЛУБ ОРЁЛ</h1>
      <div className={cn.addrWrap}>
        <img src={map} alt="map" />
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
      <div className={cn.connect}>
        <MyButton
          click={() => setModal(true)}>
          Связаться с тренером
        </MyButton>
      </div>
      <Modal visible={modal} close={setModal}>
        <EmailForm />
      </Modal>
    </div>
  )
}