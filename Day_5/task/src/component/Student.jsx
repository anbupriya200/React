
const Student = () => {
    const Studentname= "Anbupriya"
    const Age = 21
    const Course = "Fullstack"
    const IsActive =true
    const fees =40000
  return (
     <>
     <div className="bg-gray-300 p-10">
        <h1>Student Details</h1>
        <p>Name :{Studentname}</p>
        <p>Age :{Age}</p>
        <p>Course :{Course}</p>
        <p>Status :{IsActive?"Active":"Unactive"}</p>
        <p>Fees :{fees}</p>
     </div>
     </>
  )
}

export default Student