import cn from "./style.module.css"
import russia from "../../assets/russia.svg"
import trainer from "../../assets/trainer.jpg"
import ms from "../../assets/ms.svg"
import { MyButton } from "../UI/button"
import { diff_years } from "../timer"

export const Trainer = () => {
  function trainerExp() {
    const years = diff_years()
    const designation = years > 4 ? " лет" : " года"
    return years + designation
  }
  return (
    <div className={cn.trainerWrapper}>
      <div className={cn.title}>Тренер</div>
      <div className={cn.avatar}>
        <div className={cn.flag}>
          <img src={russia} alt="russia" />
        </div>
        <img src={trainer} alt="trainer" />
        <div className={cn.orden}>
          <img src={ms} alt="master of sport" />
        </div>
      </div>
      <div className={cn.name}>
          Сидоров Роман Александрович
        </div>
      <div className={cn.trainerInfo}>
        
        <div className={cn.degree}>
          Мастер спорта России по самбо
        </div>
        <div className={cn.exp}>
          <div className={cn.self}>
            Стаж собственных тренировок 16 лет
          </div>
          <div className={cn.work}>
            Тренерский стаж {trainerExp()}
          </div>
        </div>
      </div>
      <div className={cn.achiev}>
        <MyButton>Награды</MyButton>
      </div>
    </div>
  )
}