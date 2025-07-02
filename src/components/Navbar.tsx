import { IoIosArrowForward } from "react-icons/io"



function Navbar() {
  return (
    <div className="flex p-2 bg-white/30 container mx-auto items-center gap-1">
        <button className="text-md">Home</button>
        <IoIosArrowForward size={13} />
        <button className="d text-md">Courses</button>
        <IoIosArrowForward size={13} />
        <button className=" text-md">Course Details</button>
    </div>
  )
}

export default Navbar