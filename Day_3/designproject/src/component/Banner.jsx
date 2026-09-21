 

const Banner = () => {
  return (
    <>
    <div className="banner">
      
      <Bannerimg />
      <p className="text"> Date:</p>
      <p>June 5th annually.</p><br />
      <p className="text">Established:</p>
      <p> 1972 by the United Nations General Assembly</p><br />
      <p className="text">Organizer:</p>
      <p>Led by the United Nations Environment Programme (UNEP).</p>
      
      </div>
     
    </>
  )
}

export default Banner

export const Bannerimg = ()=> {
  return(<>
  <div className="img">
    <img className="bannerimg" src="./public/banner.jpeg" alt="" srcset="" />
  </div>
  
  </>)

}