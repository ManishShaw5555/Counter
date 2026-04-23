import React from 'react'

function BGChanger() {

  return (
    <div className='rounded flex md:flex-wrap bg-amber-300 p-5 w-full h-auto mx-auto'>
        <h1 className='text-amber-300 text-2xl font-bold bg-black w-auto h-1/2 mr-auto p-2 border-amber-600 border-2'>BGChanger</h1>
        <div className='flex flex-wrap justify-center'>
          <button className='text-amber-300 rounded-xl cursor-pointer hover:border-amber-600 hover:border-2 bg-olive-500 p-2 m-2' onClick={()=>{document.body.style.backgroundColor="Olive" ,document.title=`Olive`}}>Olive</button>
          <button className='text-amber-300 rounded-xl cursor-pointer hover:border-amber-600 hover:border-2 bg-white p-2 m-2' onClick={()=>{document.body.style.backgroundColor="White" ,document.title=`White`}}>White</button>
          <button className='text-amber-300 rounded-xl cursor-pointer hover:border-amber-600 hover:border-2 bg-black p-2 m-2' onClick={()=>{document.body.style.backgroundColor="Black" ,document.title=`Black`}}>Black</button>
          <button className='text-amber-300 rounded-xl cursor-pointer hover:border-amber-600 hover:border-2 bg-red-600 p-2 m-2' onClick={()=>{document.body.style.backgroundColor="Red" ,document.title=`Red`}}>Red</button>
          <button className='text-amber-300 rounded-xl cursor-pointer hover:border-amber-600 hover:border-2 bg-green-500 p-2 m-2' onClick={()=>{document.body.style.backgroundColor="Green" ,document.title=`Green`}}>Green</button>

        </div>
    </div>
  )
}

export default BGChanger