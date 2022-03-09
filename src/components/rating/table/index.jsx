import { data } from "./data"
import cn from "./style.module.css"
import gold from "../../../assets/gold.svg"
import silver from "../../../assets/silver.svg"
import bronze from "../../../assets/bronze.svg"
import { useState } from "react"

export const RatingTable = () => {
  const [modal, setModal] = useState(false)
  return (
    <table>
      <thead>
        <tr>
          <th>Спортсмен</th>
          <th>Медали</th>
          <th>Рейтинг</th>
        </tr>
      </thead>
      <tbody>
        {data.map(sportsman =>
          <tr key={sportsman.id} className={cn.sportsmanCard}>
            <td className={cn.sportsmanInfo}>
              <div className={cn.name}>{sportsman.name}</div>
              <div>{sportsman.age} года</div>
            </td>
            <td className={cn.medalsWrap}>
              <div onClick={() => setModal(true)}>Подробнее</div>
              <div className={cn.medals}>
                <div className={cn.medal}>
                  <img src={gold} alt="gold" />
                  <div>{sportsman.medals.gold.length}</div>
                </div>
                <div className={cn.medal}>
                  <img src={silver} alt="silver" />
                  <div>{sportsman.medals.silver.length}</div>
                </div>
                <div className={cn.medal}>
                  <img src={bronze} alt="bronze" />
                  <div>{sportsman.medals.bronze.length}</div>
                </div>
              </div>
            </td>
            <td className={cn.rating}>{sportsman.rating}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}