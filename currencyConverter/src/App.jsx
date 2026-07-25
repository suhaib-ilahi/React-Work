import { useState } from 'react'
import useCurrencyInfo from './hooks/currencyInfo'
import InputBox from './Components/InputBox'

function App() {
  const [from,setFrom]=useState("usd");
  const [to,setTo]=useState("inr");
  const [amount,setAmount]=useState(0);
  const [convertedAmount,setConvertedAmount] =useState(0);
  
  const currencyInfo=useCurrencyInfo(from)

 const options= Object.keys(currencyInfo)

 const swap = ()=>{
  setTo(from)
  setFrom(to)
  setAmount(convertedAmount)
  setConvertedAmount(amount)
 }

 const convert=() => {setConvertedAmount(amount * currencyInfo[to] )

 }
    
 return (
    <>
      <div
          className="w-full h-screen flex flex-wrap justify-center
           items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('https://images.pexels.com/photos/29905617/pexels-photo-29905617/free-photo-of-black-and-white-hands-handling-coins.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          }}
      >
        <h1 className='text-white text-6xl font-serif'>The Converter</h1>
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60
               rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convert()
                         
                      }}
                  >
                      <div className="w-full mb-1">
                      

                          <InputBox
                              label="From"
                              amount={amount}
                              currencyOptions={options}
                              onCurrencyChange={(currency) =>
                                setFrom(currency) }
                                selectCurrency={from}
                                onAmountChange={amount => 
                                  setAmount(amount)}
                              
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2
                               border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}
                          >
                              Swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={convertedAmount}
                              currencyOptions={options}
                              onCurrencyChange={(currency) =>
                                setTo(currency) }
                                selectCurrency={to}
                                amountDisable
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {from.toUpperCase()} to {to.toUpperCase()}

                      </button>
                  </form>
              </div>
          </div>
      </div>
      </>
  );
     
}

export default App
