import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const text = useRef();
  useEffect(() => {
    document.title = `Counter ${count}`
    if(count < 0){
      text.current.style.color = 'red'
    }else if(count > 0) {
      text.current.style.color = 'green'
    }else{
      text.current.style.color = '#FFD700'
    }
  }, [count])

  return (
    <div className="bg-black rounded border-amber-400 border-4 p-5 flex justify-center text-center flex-col w-1/2 h-1/2 mx-auto mt-20">
      <h1 className='text-2xl font-bold p-3.5 text-amber-300'>COUNTER</h1>
      <h1 ref={text} className='text-4xl font-bold p-3.5 '>{count}</h1>
      <button onClick={() => setCount(count + 1)} className='border bg-green-500 text-white pr-4 pl-4 p-2 m-1 rounded'>Increase</button>
      <button onClick={() => setCount(count - 1)} className='border bg-red-500 text-white pr-4 pl-4 p-2 m-1 rounded'>Decrease</button>
      <button onClick={() => setCount(0)} className='border bg-blue-500 text-white pr-4 pl-4 p-2 m-1 rounded'>Reset</button>
    </div>
  )
}

export default App
