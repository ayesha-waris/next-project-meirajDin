import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const Navbar = () => {
  return ( 
    <div className="h-20 px-4 relative">
      {/* Mobile View */}
      <div className="flex items-center justify-between h-full md:hidden"> 
      <Link href="/">
      <div className="text-2xl tracking-wide">Meiraj</div>
      </Link>
      <Menu/>
      </div>
      {/* Not Mobile View */}
      <div className="hidden md:flex items-center justify-between h-full gap-8">
        {/* Left Side of navbar*/}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
        <Link href="/" className="flex items-center gap-3">
          <Image src='/logo.png' alt="Logo" width={24} height={24}/>
          <div className="text-2xl tracking-wide">Meiraj</div>
        </Link>
        </div>

        <div className=" hidden xl:flex  gap-4">
          <Link href='/'>HomePage </Link>
          <Link href='/'>Shop </Link>
          <Link href='/'>Deals </Link>
          <Link href='/'>About </Link>
          <Link href='/'>Contact </Link>
        </div>
        
       {/* Right Side of navbar */}
       <div className="w-2/3 flex items-center justify-between gap-8 xl:w-1/2">
        <SearchBar/>
        <NavIcons/>
        {/* <Menu/> */}
       </div>
         
         </div>

  
    </div>
   );
}
 
export default Navbar;