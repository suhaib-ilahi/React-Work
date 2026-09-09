import { useState } from "react"
import { FaStar } from "react-icons/fa"

const Rating = () => {
  const noOfStars = 8
  const [starsToShine, setStarsToShine] = useState(0)
  const [hover, setHover] = useState(0)
  const handleClick = (index) => {
    setStarsToShine(index)
  }

  const handleMouseMove = (index) => {
    setHover(index)
  }

  const handleMouseLeave = () => {
    setHover(starsToShine)
  }
  return (
    <div className="flex flex-row gap-3 justify-center items-center h-80 bg-blue-200 w-full">
      {
        [...Array(noOfStars)].map((_, index) => (
          
          <FaStar 
            key={index}
            className={ (index <= (hover || starsToShine)) ? "text-[#fff700]": "" }
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        ))
      
      }
    </div>
  )
}

export default Rating