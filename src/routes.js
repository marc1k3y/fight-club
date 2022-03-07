import { About } from "./components/about"
import { Rating } from "./components/rating"
import { Trainer } from "./components/trainer"

export const routes = [
  { path: "*", element: <About /> },
  { path: "/trainer", element: <Trainer /> },
  { path: "/rating", element: <Rating /> }
]