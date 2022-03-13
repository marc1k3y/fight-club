import cn from "./style.module.css"
import axios from "axios"
// import { useNavigate } from "react-router-dom"
import gold from "../../../assets/gold.svg"
import silver from "../../../assets/silver.svg"
import bronze from "../../../assets/bronze.svg"
import { useEffect, useState } from "react"
import { api } from "../../../constants"

export const RatingTable = () => {
  // const navigate = useNavigate()
  const [spman, setSpman] = useState([])

  useEffect(() => {
    axios.get(`${api}spman/all`)
      .then((res) => setSpman(res.data.sort((a, b) => a.rating < b.rating ? 1 : -1)))
  }, [])
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
        {spman.map(sportsman =>
          <tr key={sportsman._id} className={cn.sportsmanCard}>
            <td className={cn.sportsmanInfo}
              // onClick={() => navigate(`/spman/${sportsman._id}`)}
              >
              <div className={cn.name}>{sportsman.name}</div>
              <div>{sportsman.age} года</div>
            </td>
            <td className={cn.medalsWrap}>
              <div className={cn.medals}>
                <div className={cn.medal}>
                  <img src={gold} alt="gold" />
                  <div>{sportsman.medals?.gold.length || 0}</div>
                </div>
                <div className={cn.medal}>
                  <img src={silver} alt="silver" />
                  <div>{sportsman.medals?.silver.length || 0}</div>
                </div>
                <div className={cn.medal}>
                  <img src={bronze} alt="bronze" />
                  <div>{sportsman.medals?.bronze.length || 0}</div>
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