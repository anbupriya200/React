 
const App = () => {
    const obj =[1,2,3,4,7,8,9]

     const object = {name:"VTV",node:"2016",isActive:"NewArray"}

    const arrobj = [

          {name:"React",node:"2016",isActive:"NewArray"},
          {name:"JS",node:"2020",isActive:"tere"},
          {name:"JSS",node:"2021",isActive:"rayya"},
          {name:"ReNodeact",node:"2026",isActive:"ngst"}

   ]
  return (

     <>
     <div className=" flex justify-center gap-2 items-center p-4">
        
         {obj.map((e,i)=>(
            <p className="bg-amber-300 w-50 text-black text-center p-2 rounded-3xl " key={i+1}>{e}</p>
         ))}
     </div>
      
     <div className=" flex justify-center items-center gap-9">
        <p className="bg-red-400 w-50 rounded-2xl text-center">{object.name}</p>
         <p className="bg-red-400 w-50 rounded-2xl text-center">{object.node}</p>
         <p className="bg-red-400 w-50 rounded-2xl text-center">{object.isActive}</p>
     </div>
          
     <div className=" flex justify-center items-center gap-4 p-4">
         {
         arrobj.map((e,i)=>(
             <div className="bg-blue-300 w-50 text-black text-center p-2 rounded-3xl" key={i+1}>
            <p>{e.name}</p>
            <p>{e.node}</p>
            <p>{e.isActive}</p>
            </div>
         ))}
     </div>
     </>
  )
}

export default App