import { useState } from "react"
import { data } from "./data"
import leftArrow from "./assets/icons/arrow-left.svg"
import rightArrow from "./assets/icons/arrow-right.svg"
import "./index.scss"

function App() { 
  const [big, setBig] = useState(0)
  return (
    <section className="App">
      <div className="header">
        <div className="writeup">
          <h1>Meet our speakers</h1>
          <p>Our speaker lineup comprises leaders from stripe and beyond, who'll share knowledge and advice on the most pressing topics facing companies today. Stay tuned for more announcements.
          </p>
        </div>
        <div className="btns">
          <button 
            onClick={() => {
              big > 0 && setBig(big - 1)
            }}
          ><img src={leftArrow} alt="" /></button>
          <button
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
            <div className={`card ${big === index ? "expand" : "not-expanded"}`} key={index}>
              {/* <div className="speaker">
                <p>hello</p>
                <h2>Eze Emmanuel</h2>
              </div> */}
              <img src={info.img} alt="" />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default App
