
const Navbar = () => {
  return (<>
  <div className="head">
      <Logo />
      <div className="link">
        <a href="">Home </a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Project</a>
        <a href="">Setting</a>
      </div>
     </div>
  </>
    
)
}
export default Navbar

export const Logo =()=> {
return(<>
 <img src={profileImage} alt="img"   />
</>)

}
