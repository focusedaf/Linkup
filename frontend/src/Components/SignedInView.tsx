import { VscArrowRight } from "react-icons/vsc";
import { FaPhoneAlt, FaSearch, FaComment, FaEllipsisV } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";

const SignedInView = () => {
  return (
    <div className="absolute top-0 left-0 flex flex-col min-h-screen w-screen justify-center items-center bg-[radial-gradient(500px_circle_at_bottom,_var(--tw-gradient-stops))] from-gradient via-mid to-background">
      <div className="flex flex-col text-center">
        <div className="font-bold text-3xl space-y-3">
          <p className="text-white">
            Welcome back <span className="text-blue-700">user</span>!
          </p>
          <p className="text-white">
            Ready to <span className="text-blue-700">connect</span>?
          </p>
          <p className="text-white">
            Start a <span className="text-blue-700">call</span> now!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 mt-6">
          <button className="bg-blue-700 text-white rounded-xl px-4 py-2 pr-10 flex items-center relative hover:bg-blue-800 transition cursor-pointer">
            <VscArrowRight className="w-6 h-6 absolute right-3 top-1/2 transform -translate-y-1/2" />
            Start A Call
          </button>

          <button className="bg-blue-700 text-white rounded-xl px-4 py-2 pr-10 flex items-center relative hover:bg-blue-800 transition cursor-pointer">
            <VscArrowRight className="w-6 h-6 absolute right-3 top-1/2 transform -translate-y-1/2" />
            Schedule A Call
          </button>
        </div>
      </div>

      {/* features */}
      <div className="flex flex-col sm:flex-row justify-evenly items-center w-full ">
        {/* Chat */}
        <div className="flex flex-col gap-5 backdrop-blur-xl bg-gray/50 rounded-xl p-5">
          <div className="flex gap-7 justify-center items-center">
            <p className="text-white font-semibold">Chat</p>
            <button className="bg-blue-700 text-white rounded-xl px-4 py-2 hover:bg-blue-800 transition cursor-pointer">
              Create DM
            </button>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-white relative pl-10">
              <div className="flex w-7 h-7 rounded-full items-center justify-center bg-amber-200 absolute left-0">
                1
              </div>
              john
            </div>
            <div className="text-white relative pl-10">
              <div className="flex w-7 h-7 rounded-full items-center justify-center bg-amber-200 absolute left-0">
                1
              </div>
              jane
            </div>
            <div className="text-white relative pl-10">
              <div className="flex w-7 h-7 rounded-full items-center justify-center bg-amber-200 absolute left-0">
                1
              </div>
              mia
            </div>
            <div className="text-white relative pl-10">
              <div className="flex w-7 h-7 rounded-full items-center justify-center bg-amber-200 absolute left-0">
                1
              </div>
              peter
            </div>
          </div>
        </div>

        {/* friends */}
        <div className="flex flex-col gap-5 backdrop-blur-xl bg-gray/50 rounded-xl p-5">
          <div className="flex gap-7 items-center">
            <p className="text-white font-semibold">Friends</p>
            <div className="backdrop-blur-xl bg-gray/50 rounded-xl border border-gray-100 pr-20 p-1 m-5 relative ">
              <FaSearch className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2" />
              Search
            </div>

            <button className="bg-blue-700 text-white rounded-xl px-4 py-2 hover:bg-blue-800 transition cursor-pointer">
              Add Friend
            </button>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-white relative pl-10">
              <div className="flex w-7 h-7 rounded-full items-center justify-center bg-amber-200 absolute left-0">
                1
              </div>
              john
              <FaComment className="w-4 h-4 absolute right-10 top-1/2 transform -translate-y-1/2" />
              <FaEllipsisV className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2" />
            </div>
            <div className="text-white relative pl-10">
              <div className="flex w-7 h-7 rounded-full items-center justify-center bg-amber-200 absolute left-0">
                1
              </div>
              jane
              <FaComment className="w-4 h-4 absolute right-10 top-1/2 transform -translate-y-1/2" />
              <FaEllipsisV className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2" />
            </div>
            <div className="text-white relative pl-10">
              <div className="flex w-7 h-7 rounded-full items-center justify-center bg-amber-200 absolute left-0">
                1
              </div>
              mia
              <FaComment className="w-4 h-4 absolute right-10 top-1/2 transform -translate-y-1/2" />
              <FaEllipsisV className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2" />
            </div>
            <div className="text-white relative pl-10">
              <div className="flex w-7 h-7 rounded-full items-center justify-center bg-amber-200 absolute left-0">
                1
              </div>
              peter
              <FaComment className="w-4 h-4 absolute right-10 top-1/2 transform -translate-y-1/2" />
              <FaEllipsisV className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-evenly items-center w-full">
        {/* vibes */}
        <div className="flex flex-col gap-4 backdrop-blur-xl bg-gray/50 rounded-xl p-5">
          <p className="text-white font-semibold">Vibes</p>
          <button className="pr-10 flex items-center relative">
            <FiUpload className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2" />
            Themes
          </button>
          <button className="pr-10 flex items-center relative">
            <FiUpload className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2" />
            Status
          </button>
          <button className="pr-10 flex items-center relative">
            <FiUpload className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2" />
            Profile Music
          </button>
          <button className="pr-10 flex items-center relative">
            <FiUpload className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2" />
            Virtual Background
          </button>
        </div>

        {/* events */}
        <div className="flex flex-col gap-4 backdrop-blur-xl bg-gray/50 rounded-xl p-5 ">
          <p className="text-white font-semibold">Events</p>
          <button className="pr-10 flex items-center relative">
            <FaPhoneAlt className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2" />
            Upcoming Calls
          </button>
          <button className="pr-10 flex items-center relative">
            <FaPhoneAlt className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2" />
            Schedule A Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignedInView;

// <div className="flex justify-evenly items-center w-full">
//   {/* vibes */}
//   <div className="flex flex-col gap-4 backdrop-blur-xl bg-gray/50 rounded-xl p-5">
//     <p className="text-white font-semibold">Vibes</p>
//     <button className="pr-10 flex items-center relative">
//       <FiUpload className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2" />
//       Themes
//     </button>
//     <button className="pr-10 flex items-center relative">
//       <FiUpload className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2" />
//       Status
//     </button>
//     <button className="pr-10 flex items-center relative">
//       <FiUpload className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2" />
//       Profile Music
//     </button>
//     <button className="pr-10 flex items-center relative">
//       <FiUpload className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2" />
//       Virtual Background
//     </button>
//   </div>

//   {/* events */}
//   <div className="flex flex-col gap-4 backdrop-blur-xl bg-gray/50 rounded-xl p-5 ">
//     <p className="text-white font-semibold">Events</p>
//     <button className="pr-10 flex items-center relative">
//       <FaPhoneAlt className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2" />
//       Upcoming Calls
//     </button>
//     <button className="pr-10 flex items-center relative">
//       <FaPhoneAlt className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2" />
//       Schedule A Call
//     </button>
//   </div>
// </div>;
