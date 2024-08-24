import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'

function App() {
  const [count, setcount] = useState(0);

  function decreaseHandler (){
    setcount (count - 1);
  }

  function increaseHandler(){
    setcount (count+1);
  }

  function resetHandler(){
    setcount (0);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className="text-[#0398d4] font-medium text-2xl"> Increment and Decreament</div>
        <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
          <button onClick={decreaseHandler} className=" border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
            -
          </button>
          <div className="text-5xl font-bold gap-12">
            {count}
          </div>
          <button onClick={increaseHandler} className=" border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">
            +
          </button>
        </div>
        <button onClick={resetHandler} className="bg-[#0398d4] text-white px-5 py-2 rounded-sm texxt-lg">
          reset
        </button>
    </div>
  )
}

export default App
