import cn from "./style.module.css"

export const Schedule = () => {
  return (
    <div className={cn.scheduleWrapper}>
      <div className={cn.title}>Расписание тренировок</div>
      <div className={cn.schedule}>
        <div className={cn.monday}>
          <div className={cn.weekName}>
            Понедельник
          </div>
          <div className={cn.group}>
            С 4 до 7 лет
          </div>
          <div className={cn.trainTime}>
            C 18 до 19 часов
          </div>
          <div className={cn.group}>
            С 7 до 12 лет
          </div>
          <div className={cn.trainTime}>
            C 16:30 до 18 часов
          </div>
        </div>
        <div className={cn.thusday}>
          <div className={cn.weekName}>
            Четверг
          </div>
          <div className={cn.thusday}>
            <div className={cn.group}>
              С 4 до 7 лет
            </div>
            <div className={cn.trainTime}>
              C 18 до 19 часов
            </div>
            <div className={cn.group}>
              С 7 до 12 лет
            </div>
            <div className={cn.trainTime}>
              C 16:30 до 18 часов
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}