import { useState } from "react"

const App = () => {

  const [nameUser,setNameUser] = useState("")
  const [ageUser,setAgeUser] = useState("")
  const [showData,setShowData] = useState([])
 
  const handleChange = (e)=> {

    setNameUser(e.target.value)



  }

  const handleAge = (e)=>{

    setAgeUser(e.target.value)

  }

  const hanldeClick =()=>{

    const obj = {id:Date.now(),name:nameUser,age:ageUser}

    const arr = [...showData]

    arr.push(obj)

    setShowData(arr)

    alert("Successfully Save")

    setNameUser("")
    setAgeUser("")

  }
 

  return (
    <>
      <div>
        <input type="text" onChange={handleChange} value={nameUser} placeholder="Enter the Name" />
        <input type="number" onChange={handleAge} value={ageUser} placeholder="Enter the Age" />
        <button onClick={hanldeClick}>Click to Login</button>
      </div>


     {/* {showData.map((e)=>(
      <div key={e.id}>
        <p>{e.id}</p>
        <p>{e.name}</p>
        <p>{e.age}</p>

      </div>
     ))

     } */}

      <div>
        <table border={"1"} cellPadding={"2"} cellSpacing={"2"}> 
          <thead>
            <tr>
              <th>Id</th>
              <th>User Name</th>
              <th>User Age</th>
            </tr>
          </thead>
          <tbody>
            {showData.map((e)=>(
              <tr key={e.id}>
                   <td>{e.id}</td>
                   <td>{e.name}</td>
                   <td>{e.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App