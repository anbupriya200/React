 
const App = () => {
  const student =[{Id:1, Name :" priya",Age :23 , Course :"Fullstack "},
    {Id:2, Name :"Anbu",Age :30 , Course :" React"},
    {Id:3, Name :" Anitha",Age : 28, Course :"Python "},
    {Id:4, Name :" Kavi",Age : 22, Course :"DataScience  "},
    {Id:5, Name :"lavan",Age : 21, Course :"Node Js "}
  ]


  const product =[{Id:1 ,Name:"Mobile",price :30000 ,category :"Smartphone"},
    {Id: 2 ,Name:"No7 Future Renew Day Cream SPF40 (50ml)",price : 5901 ,category :"Face Moisturizer / Anti-Aging"},
     {Id:3 ,Name:"No7 Radiance+ 15% Vitamin C Serum",price :3165 ,category :"Skin Treatment / Face Serum"},
      {Id: 4 ,Name:"No7 Protect & Perfect Intense ADVANCED Day Cream (50ml)",price :4026 ,category :" Face Moisturizer"},
       {Id:5 ,Name:" No7 Lift & Luminate Triple Action Night Cream (50ml)",price :5599 ,category :" Face Moisturizer / Night Cream"},
  ]


  return (
     <>
     <div  className="flex justify-center items-center gap-10 p-10" >
      {student.map((student)=>(
         <div key={student.Id} >
          {/* <p>{student.Id}</p> */}
          <p>{student.Name}</p>
          <p>{student.Age}</p>
           <p>{student.Course}</p>
         </div>

      ))
        
      }
     </div><hr />


      <div  className="flex justify-center items-center gap-10 p-10 bg-amber-200 m-5 " >
      {product.map((product)=>(
         <div key={product.Id}  className="w-100 bg-gray-400 h-50 p-5 border-4">
          {/* <p>{student.Id}</p> */}
          <p>{product.Name}</p>
          <p>{product.price}</p>
           <p>{product.category}</p>
         </div>

      ))
        
      }
     </div> <hr />
       

     </>
  )
}

export default App



// const students = [
//     {
//         id: 1,
//         name: "Arun",
//         age: 22
//     },
//     {
//         id: 2,
//         name: "Bala",
//         age: 23
//     },
//     {
//         id: 3,
//         name: "Kumar",
//         age: 21
//     }
// ];

// const App = () => {
//     return (
//         <div>

//             {students.map((student) => (
//                 <div key={student.id}>

//                     <h2>{student.name}</h2>

//                     <p>
//                         Age: {student.age}
//                     </p>

//                 </div>
//             ))}

//         </div>
//     );
// };

// export default App;