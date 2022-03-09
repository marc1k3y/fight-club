import cn from "./style.module.css"
import { useState } from "react"
import { send } from "emailjs-com"
import { MyButton } from "../UI/button"

export default function EmailForm() {

  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to_number: "+7"
  })

  const clearForm = () => {
    setToSend({ ...toSend, from_name: "", message: "", reply_to_number: "+7" })
  }

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    send(
      "service_dx76adt",
      "template_8vb63fg",
      toSend,
      "user_x0Z66RspzE2Gvkh1TsUk1"
    )
      .then(() => {
        clearForm()
      })
      .catch((err) => {
        console.log("FAILED...", err)
      })
  }
  return (
    <form onSubmit={onSubmit} className={cn.emailFormWrapper}>
      <h3>Связаться с тренером</h3>
      <div>
        <label htmlFor="reply_to_number">Ваш номер телефона</label>
        <input
          type="tel"
          name="reply_to_number"
          min-length="12"
          maxLength="12"
          value={toSend.reply_to_number}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="from_name">Ваше имя</label>
        <input
          type="text"
          name="from_name"
          value={toSend.from_name.charAt(0).toUpperCase() + toSend.from_name.slice(1)} // capitalize name
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Можно оставить сообщение</label>
        <textarea
          name="message"
          cols="30"
          rows="3"
          value={toSend.message}
          onChange={handleChange}
          required />
      </div>
      <MyButton type="submit">
        Отправить
      </MyButton>
    </form>
  )
}