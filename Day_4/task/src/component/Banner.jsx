import banner from "../assets/thailand.avif"
const Banner = () => {
  return (
     <>
      <div className="bg-amber-200 h-100">
        <img className="w-600 h-100 p-7" src= {banner} alt="img"  />
      </div>
     </>
  )
}

export default Banner