 
const App = () => {

  const student ={ Name :"Anbupriya",Age :21, Course :"Fullstack",City :"Villupuram "}

  const Employee ={Name :"Dharshini ", Role :"Team Leader",Salary :90000 ,Location :"Chennai"}

  const Product = {Name :"Samsung Galaxy A06 5G", Price : 29000, Category :"Smartphone",Brand :"Samsung"}

  return (
     <>
     <div className="bg-amber-200 p-5 m-10 text-center">
      <p>{student.Name}</p>
      <p>{student.Age}</p>
      <p>{student.Course}</p>
      <p>{student.City}</p>
     </div>

     <div className="bg-red-300 p-5 m-10 text-center">
      <h1 className="font-extrabold p-2">Employee Details</h1>
      <p>Name :{Employee.Name}</p>
      <p>Role :{Employee.Role}</p>
      <p>Salary :{Employee.Salary}</p>
      <p>Location :{Employee.Location}</p>
     </div>



     <div className="bg-gray-300 p-5 m-10 text-center">
      <p>{Product.Name}</p>
      <p>{Product.Price}</p>
      <p>{Product.Category}</p>
      <p>{Product.Brand}</p>
     </div>
     </>
  )
}

export default App