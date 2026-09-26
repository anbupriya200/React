
const Text =()=>{
  const [textChange,setTextChange]=useState("Hello React")

  const firsttext =()=> {
    setTextChange("Change Text")
    
  }

  return(
     <>
     <h1>{textChange}</h1>

    <button onClick={firsttext}></button>
     </>
  )
}
 
export default Text