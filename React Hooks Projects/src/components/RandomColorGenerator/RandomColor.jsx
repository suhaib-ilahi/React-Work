import { useState } from "react"

const RandomColor = () => {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');
    const changeHexColor = () => {
        let temp = "#" + Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0")

            
        setColor(temp)
              console.log(color);

    }
    const changeRGBColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        
      setColor( `rgb(${r}, ${g}, ${b})`);
      console.log(color);
      
    }
    const setHex = () => {
        setTypeOfColor('hex')
        changeHexColor()

    }
    const setRGB = () => {
        setTypeOfColor('rgb')
        changeRGBColor()
    }

    return (
        <div className={`w-full h-80`}   style={{ backgroundColor: color }}
>
            <div className="flex flex-row justify-center">
                <button onClick={() => setHex()} className="w-auto h-auto p-3 gap-2 m-3 bg-green-300 rounded-2xl cursor-pointer" >Set HEX Color</button>
                <button onClick={() => setRGB()}  className="w-auto h-auto p-3 gap-2 m-3 bg-fuchsia-500 rounded-2xl" >Set 
                    RGB Color</button>
                <button onClick={typeOfColor === 'hex' ? () => changeHexColor() : () => changeRGBColor()} className="w-auto h-auto p-3 gap-2 m-3 bg-violet-300 rounded-2xl cursor-pointer" >Generate Random Color</button>
            </div>
            <h1 className="text-center m-auto text-4xl text-white cursor-pointer">{typeOfColor === 'hex' ? "HEX Color" : "RGB Color"}</h1>
            <h2 className="text-center text-white text-2xl">{color}</h2>
        </div>
    )
}

export default RandomColor