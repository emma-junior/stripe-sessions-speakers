import "./styles/index.scss"
import Speakers from "./components/Speakers"
import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext"

function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <section className={`app ${theme}`}>
      <Speakers />
    </section>
  )
}

export default App

