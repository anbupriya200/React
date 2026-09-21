 
 export const Navbar = () => {
   return (
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
   )
 }

 export const Logo = () => {
  return(<>
   <div className="logo">
      <img className="image" src="./public/world.avif" alt="img" srcset="" />
     </div>
  </>)

 }
 