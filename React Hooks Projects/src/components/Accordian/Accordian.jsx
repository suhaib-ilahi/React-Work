import { useState } from "react";


 const data = [
  {
    "id": 1,
    "question": "Find the maximum element in an array",
    "description": "Given an array of integers, find and return the largest element present in the array."
  },
  {
    "id": 2,
    "question": "Reverse a string",
    "description": "Given a string, reverse the order of its characters without using any built-in reverse function."
  },
  {
    "id": 3,
    "question": "Check whether a number is prime",
    "description": "Given an integer n, determine whether the number is prime. A prime number is greater than 1 and has exactly two factors: 1 and itself."
  },
  {
    "id": 4,
    "question": "Find duplicate elements in an array",
    "description": "Given an array of integers, identify all elements that appear more than once in the array."
  },
  {
    "id": 5,
    "question": "Calculate factorial using recursion",
    "description": "Given a non-negative integer n, calculate its factorial using a recursive function."
  }
]

const Accordian = () => {
  const [selected, setselected] = useState(null);
  const [enableMultiSelection,setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
 
  const handleSelection = (key) => {
    if(selected === key){
      setselected(null)
    }
    else
     setselected(key)
  }

  const handleMultiSelection = (getCurrentId) => {
    let multipleCopy = [...multiple]
    const findIndexOfCurrentId = multipleCopy.indexOf(getCurrentId)

    if(findIndexOfCurrentId === -1) {

      multipleCopy.push(getCurrentId)
    }
    else{
      
      multipleCopy.splice(findIndexOfCurrentId, 1)
    }


    setMultiple(multipleCopy)

    }

  return (
    <div className="p-5 bg-amber-50">
      <h1 className="text-2xl font-bold text-center mb-5 block mx-auto">Accordian

        
      </h1>
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)} className="block mx-auto rounded-xl bg-red-400 w-auto text-2xl p-3 mb-4 cursor-pointer">
        Enable {enableMultiSelection ? "Single" : "Multi"} Selection
      </button>
      <main>
        
        {data && 
        data.length > 0 ? 
        data.map((item) => {return <div onClick={enableMultiSelection ? () => handleMultiSelection(item.id) : () => handleSelection(item.id)}
         key={item.id}
          className=" m-auto p-2 mb-6 w-90  rounded-xl bg-green-300 ">
            <h3 className="flex justify-between font-bold text-xl">
              {item.question}
              <span>{selected === item.id || multiple.indexOf(item.id) !== -1 ? "-" : "+"}</span>
            </h3>
           
            {
              selected === item.id || multiple.indexOf(item.id) !== -1 ?  <p>{item.description}</p> : null
            }
          
          </div>
        })
        :
        <div>No data to show</div>
        }
      </main>
    </div>
  )
}

export default Accordian