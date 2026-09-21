 
const About = () => {
  return (
     <>
     <div className="bg-amber-100 h-100 flex justify-center items-center">
      <div className="  w-170 h-70 flex-col justify-center items-center">
        <label htmlFor="">Enter your Email :</label>
        <input className="bg-white" type="email" name="Email" id="" /><br />  <br />
        <label htmlFor="">Enter your Number :</label>
       <input className="bg-white" type="number" name="Number" id="" /><br /> <br />

      </div> 
     </div>
     </>
  )
}

export default About