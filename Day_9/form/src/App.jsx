import { useState } from "react"

 
const App = () => {

  const [nameuser,setNameuser] = useState("")
  const [Age,setAge] = useState("")
  const [showdata,setShowdata] = useState([])

  const handlename=()=> {
    setNameuser(e .target.value)

  }

  const handleage=()=> {

    setAge(e .target.value)
    
  }

  const handleclick =()=> {
    
  }

  return (
     <>
     <div >
      <input type="text" onChange={handlename} placeholder="Enter the Name" />
      <input  type="text" onChange={handleage} placeholder="Enter the Age "/>
      <button onClick={handleclick}>
        Click to Login
      </button>
     </div>
     </>
  )
}

export default App