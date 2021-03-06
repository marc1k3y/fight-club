import { About } from "./components/about"
import { Rating } from "./components/rating"
import { Schedule } from "./components/schedule"
import { Spman } from "./components/spman"
import { Trainer } from "./components/trainer"

export const routes = [
  { path: "*", element: <About /> },
  { path: "/trainer", element: <Trainer /> },
  { path: "/rating", element: <Rating /> },
  { path: "/spman/:id", element: <Spman /> },
  { path: "/schedule", element: <Schedule /> }
]