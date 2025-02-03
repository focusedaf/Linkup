import { VscArrowRight } from "react-icons/vsc";
import { FaPhoneAlt } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";

const SignedInView = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full ">
      <div className="flex flex-col text-center ">
        <div className="font-bold text-3xl space-y-3">
          <p className="text-white">
            Welcome back <span className="text-blue-700">user</span> !
          </p>
          <p className="text-white">
            Ready to <span className="text-blue-700">connect</span> ?
          </p>
          <p className="text-white">
            Start a <span className="text-blue-700">call</span> now !!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 mt-6">
          <button className="bg-blue-700 text-white rounded-xl px-6 py-3 pr-12 flex items-center relative hover:bg-blue-800 transition cursor-pointer">
            <VscArrowRight className="w-6 h-6 absolute right-3 top-1/2 transform -translate-y-1/2" />
            Start A Call
          </button>

          <button className="bg-blue-700 text-white rounded-xl px-6 py-3 pr-12 flex items-center relative hover:bg-blue-800 transition cursor-pointer">
            <VscArrowRight className="w-6 h-6 absolute right-3 top-1/2 transform -translate-y-1/2" />
            Schedule A Call
          </button>
        </div>
      </div>

      {/* features */}
      <div className="flex flex-col sm:flex-row gap-10 mt-10 bg-inherit">
        {/* chat */}
        <div className="flex gap-4 justify-center items-center backdrop-blur-xl bg-gray/50 rounded-xl">
          <p className="text-white font-semibold">Chat </p>
          <button className="bg-blue-700 text-white rounded-xl px-4 py-2  hover:bg-blue-800 transition cursor-pointer">
            Create DM
          </button>
        </div>

        {/* friends */}
        <div className="flex gap-4 justify-center items-center backdrop-blur-xl bg-gray/50 rounded-xl">
          <p className="text-white font-semibold">Friends</p>
          <div className="backdrop-blur-xl bg-gray/50 rounded-xl border border-gray-100 pr-15 m-5 relative ">
            <FaSearch className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2" />
            Search
          </div>
          <button className="bg-blue-700 text-white rounded-xl px-4 py-2  hover:bg-blue-800 transition cursor-pointer">
            Add Friend
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-10 mt-10 bg-inherit">
        {/* vibes */}
        <div className="flex flex-col gap-4 justify-center items-center backdrop-blur-xl bg-gray/50 rounded-xl">
          <p className="text-white font-semibold">Vibes</p>
          <button className=" pr-10 flex items-center relative">
            <FiUpload className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2" />
            Themes
          </button>
          <button className=" pr-10 flex items-center relative">
            {" "}
            <FiUpload className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2" />
            Status
          </button>
          <button className=" pr-10 flex items-center relative">
            {" "}
            <FiUpload className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2" />
            Profile Music
          </button>
          <button className=" pr-10 flex items-center relative">
            {" "}
            <FiUpload className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2" />
            Virtual Background
          </button>
        </div>

        {/* events */}
        <div className="flex flex-col gap-4 justify-center items-center backdrop-blur-xl bg-gray/50 rounded-xl ">
          <p className="text-white font-semibold">Events</p>
          <button className=" pr-10 flex items-center relative">
            <FaPhoneAlt className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2" />
            Upcoming Calls
          </button>
          <button className="pr-10 flex items-center relative">
            <FaPhoneAlt className="w-4 h-4 absolute right-2 transform-translate-y-1/2" />
            Schedule A Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignedInView;
