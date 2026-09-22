 
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
     <div>
        App
         {obj.map((e,i)=>(
            <p className="bg-amber-300 w-50 text-black text-center p-2 rounded-3xl" key={i+1}>{e}</p>
         ))}
     </div>

     <div>
        <p>{object.name}</p>
         <p>{object.node}</p>
     </div>

     {/* <div>
         {arrobj.map((e,i)=>(
            <p className="bg-amber-300 w-50 text-black text-center p-2 rounded-3xl" key={i+1}>{e} </p>
         ))}
     </div> */}
     </>
  )
}

export default App