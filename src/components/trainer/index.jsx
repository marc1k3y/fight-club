import cn from "./style.module.css"
import russia from "../assets/russia.svg"
import trainer from "../assets/trainer.jpg"
import ms from "../assets/ms.svg"
import { MyButton } from "../UI/button"

export const Trainer = () => {
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
      <div className={cn.degree}>
        Мастер спорта России по самбо
      </div>
      <div className={cn.exp}>
        <div className={cn.self}>
          Стаж собственных тренировок
        </div>
        <div className={cn.work}>
          Тренерский стаж
        </div>
      </div>
      <div className={cn.achiev}>
        <MyButton>награды</MyButton>
      </div>
    </div>
  )
}