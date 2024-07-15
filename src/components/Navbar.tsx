import { menuLinks } from "../constants"
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="max-w-6xl mx-auto text-white flex items-center justify-between p-7">
      <div className="flex items-center gap-10" >
        <img src="/logo1.svg" alt="logo" className="w-[180px] sm:w-[200px]"  />

        <ul className="hidden sm:flex items-center gap-10 ml-4">
            {menuLinks.map((link)=>(
              <li key={link.id} 
              className="font-semibold text-[23px] cursor-pointer"
              >{link.title}</li>
            ))}
        </ul>

      </div>


      
      <div className=" gap-5 items-center hidden sm:flex">
          <span className="font-semibold text-[22px] cursor-pointer">Login</span>
          <button className="font-semibold text-[22px] px-8 py-2 bg-blue-700 rounded-3xl">Get Started</button>
        </div>

      <div className="sm:hidden cursor-pointer">
        <IoMdMenu size={32} />
      </div>
      
    </nav>
  )
}

export default Navbar