
const App = () => {
  const newobj =[{Enroll:1, Name:"Priya", Age:21, Course:"Fullstack", City:"Chennai", Degree:"IT" },
    {Enroll:2, Name:"Dhanu", Age:22, Course:"Python", City:"Chennai", Degree:"CSE" },
    {Enroll:3, Name:"Moni", Age:23, Course:"React", City:"Chennai", Degree:"MSC" },
    {Enroll:4, Name:"Bhuvi", Age:24, Course:"Java", City:"Chennai", Degree:"EEE" },
    {Enroll:5, Name:"Abi", Age:25, Course:"AI", City:"Chennai", Degree:"BSC" },
    {Enroll:6, Name:"Dharshini", Age:20, Course:"DSA", City:"Chennai", Degree:"EEE" },
    {Enroll:7, Name:"Dhinesh", Age:22, Course:"Analytic", City:"Chennai", Degree:"AI" },
    {Enroll:8,Name:"Diva", Age:18, Course:"Frontend", City:"Chennai", Degree:"IT" },
    {Enroll:9, Name:"Lavan", Age:19, Course:"Backend", City:"Chennai", Degree:"IT" },
    {Enroll:10, Name:"Aki", Age:23, Course:"JS", City:"Chennai", Degree:"IT" }
  ]


  const Student =["Anbu","Priya" ,"Moni" ,"Dhanu","Bhuvi","Abi","Dhinesh","Karthi"]


  return (
     <>
     <div className="bg-red-500 flex justify-between items-center gap-2 h-240 flex-wrap ">
      {
        newobj.map((e,i)=>(
          <div key={i} className="bg-sky-200 w-60 h-60 rounded-2xl p-4 m-4 text-center"> 
            <p>Enroll :{e.Enroll}</p>
            <p>Name :{e.Name}</p>
            <p>Age :{e.Age}</p>
            <p>Course :{e.Course}</p>
            <p>City :{e.City}</p>
            <p>Degree:{e.Degree}</p>
            <button type="button" className="bg-black text-white w-40  p-1 rounded-2xl  ">Click to explore</button>
          </div>
        ))
      }
     </div>

     <div className="bg-amber-200 flex gap-3">
      {Student.map((e,i)=>(
        <p key={i} className="bg-red-400 w-20 h-20 m-7 rounded-2xl flex justify-between items-center p-4 ">{e}</p>
      ))

      }
     </div>
     </>
  )
}

export default App