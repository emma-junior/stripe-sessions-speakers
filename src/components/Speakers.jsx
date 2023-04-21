import { useState } from "react"
import { data } from "../data"
import leftArrow from "../assets/icons/arrow-left.svg"
import rightArrow from "../assets/icons/arrow-right.svg"
import "./speakers.scss"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import Moonsvg from "../assets/icons/Moonsvg"
import Sunsvg from "../assets/icons/Sunsvg"

const Speakers = () => {
    const [big, setBig] = useState(0)
    const { theme, setTheme } = useContext(ThemeContext)
    const toggleIcon = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
  return (
    <div className='speakers-section'>
        <div className="header">
        <div className="writeup">
          <h1>Meet our speakers</h1>
          <p>Our speaker lineup comprises leaders from stripe and beyond, who'll share knowledge and advice on the most pressing topics facing companies today. Stay tuned for more announcements.
          </p>
        </div>
        <div className="btns">
            {theme === 'light' ? <div className="weather-icon" onClick={toggleIcon}><Moonsvg  /></div> : <div className="weather-icon" onClick={toggleIcon}><Sunsvg color="#fff" /></div>}
          <button
            className="arrow-btns"
            onClick={() => {
              big > 0 && setBig(big - 1)
            }}
          ><img src={leftArrow} alt="" /></button>
          <button
            className="arrow-btns"
            onClick={() => {
              big < data.length - 1 &&
                setBig(big + 1);
            }}
          ><img src={rightArrow} alt="" /></button>
        </div>
      </div>
      <div className="container">
        {data.map((info, index) => {
          return (
            <div className={`card ${big === index ? "expanded" : "not-expanded"}`} key={index}>
              <div className="speaker">
                <p className="position">{info.position}</p>
                <p className="name">{info.name}</p>
              </div>
              <img src={info.img} alt="" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Speakers