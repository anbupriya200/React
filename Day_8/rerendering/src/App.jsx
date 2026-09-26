import React, { useState } from 'react'
import Text from './component/Text'

const App = () => {
  const [countNumber,setCountNumber]=useState(0)

  const handleIn =()=>{
    setCountNumber(countNumber+1)
  }

  const handleDe =()=>{

    setCountNumber(countNumber-1)
  }

  const handlereset =()=>{
    setCountNumber(0)
    

  }
  <Text />
 
  return (

    <>
    <h1>{countNumber}</h1>
    <button onClick={handleIn}>Increase</button>
    <button onClick={handleDe}>Decrease</button>
    <button onClick={handlereset}>ReSet</button>

    </>
  )
}

export default App

 
 