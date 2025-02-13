import Button from './Button'
import jenny from '../assets/jenny.svg'
import { FaMicrophone, FaVideo, FaCog,FaUser} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Calling = () => {
  const navigate = useNavigate();
  const handleClick = () =>{
    navigate("/about")
    alert("button Clicked")
  }
  return (
    <div className=" w-screen h-screen flex flex-col justify-center items-center ">
      {/* <div className="bg-black rounded p-[300px] w-full max-w-xl md:max-w-7xl m-10 text-white ">  */}
      <div className=" rounded p-[100px] w-screen md:max-w-9xl m-10 text-white "> 
        {/* logo will be added later */}
        <h2 className="text-white">Get Started</h2>
        <p className="text-gray-400 font-sm md:font-semibold">
          Prepare your audio and video setup before connecting
        </p>
        {/* buttons  */}
        <div className="flex justify-center items-center gap-3 m-4">
          <button className="inline-block px-4 py-2 rounded-md bg-red-500">
            Live
          </button>
          <Button
            onClick ={handleClick}
            label="18 others in session"
            className="font-thin text-gray-100 "
          />
        </div>
        {/* for the pre-joining screen */}
        <div className="">
          <img src={jenny} alt="jenny" className="rounded-2xl " />
          {/* icons */}
          <div className="flex items-center justify-between gap-4 md:gap-10 m-2">
            <div className="flex gap-4 md:gap-6">
              <button className=" p-2 hover:bg-gray-800 rounded-md transition-colors duration-200">
                <FaMicrophone />
              </button>
              <button className="  p-2 hover:bg-gray-800 rounded-md transition-colors duration-200">
                <FaVideo />
              </button>
              <button className="  p-2 hover:bg-gray-800 rounded-md transition-colors duration-200">
                <FaUser />
              </button>
              <button className="px-210  p-2 hover:bg-gray-800 rounded-md transition-colors duration-200">
              <FaCog />
            </button>
            </div>

          </div>
          {/* display field + join button */}
          <div className="flex  items-center gap-4 md:gap-6 m-4">
            <div className="bg-gray-900 rounded-md text-gray-400 px-4 py-2 w-full text-left">
              Jenny
            </div>
            <Button onClick={"Not so fast"} label="join now" className='font-light' />
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default Calling
