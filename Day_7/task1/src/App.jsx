
const App = () => {
  const languages =["Python ","C++","Java","SQL" ,"JS","C"]

  const City =["Chennai","Villupuram","Thindivanm","Sivagankai","Nagpatinnam"]

  const course =["Fullstack ","React","AIML","Bussiness anlytic","Data science"]
  return (
     <>
     <div className="items-center p-5">
      {languages.map((e,i)=>(
        <div key={i}>{e}</div>
      ))

      }
     </div>


<ul className="flex justify-center h-10 bg-amber-100 items-center gap-10">
  {City.map((e,i)=>(
    <li key={i}  >{e}</li>
  ))}
</ul>


<div className="bg-gray-600">
<h1 className="flex justify-center items-center font-extrabold mt-5 bg-amber-700  " >
  Available Courses
</h1>
<ul className="flex justify-center  items-center gap-10  p-10">
  {course.map((e,i)=>(
    <li key={i} className="bg-red-200 rounded-2xl  w-40 text-center h-10">{e}</li>
  ))}
</ul>
</div>
     </>
  )
}

export default App