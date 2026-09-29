import { useState } from "react"

const Text =()=>{
  const [textChange,setTextChange]=useState("Hello React")

  const firsttext =()=> {
    setTextChange("Change Text")
    
  }

  // const [title,setTitle] = useState("This is react")
 
  const [isActive,setIsActive] = useState(true)

  

  const SHowText = ()=>{

    setIsActive(!isActive)

  }

  return(
     <>
      <h1>{textChange}</h1>

    <button onClick={firsttext}>Submit</button> 
    {isActive&&<p>This is Frontend</p>}  

    <button onClick={SHowText}>{isActive?"Show":"Hide"}</button>



     </>
  )
}
 
export default Text