import cn from "./style.module.css"
import { RatingTable } from "./table"

export const Rating = () => {
  return (
    <div className={cn.ratingWrapper}>
      <div className={cn.title}>
        Рейтинг спортсменов
      </div>
      <RatingTable />
    </div>
  )
}