import { About } from "./components/about"
import { Trainer } from "./components/trainer"

export const routes = [
  { path: "*", element: <About /> },
  { path: "/trainer", element: <Trainer /> }
]