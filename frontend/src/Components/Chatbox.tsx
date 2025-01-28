const Chatbox = () => {
  return (
    <div className="w-[22rem] sm:w-[25rem] rounded-md px-2">
      <div className="relative">
        {/* chatbox header */}
        <div className="text-white bg-black p-4 rounded-md">Chat</div>

        {/* chatbox body */}
        <div className="relative bg-gray-300 h-[29rem] rounded-md mt-2">
          {/* pfp and message area */}
          <div className="px-4 py-8">
            <div className="flex gap-3">
              {/* pfp */}
              <div className="w-12 h-12 rounded-full bg-rose-100 p-0.5">
                <img src="#" alt="pfp" />
              </div>

              {/* testmessage*/}
              <div className="text-sm p-5 w-[75%] bg-slate-600 text-slate-100 rounded-lg relative before:absolute before:content-[''] before:w-3 before:h-3 before:bg-slate-600 before:rotate-45 before:-left-1 before:top-4">
                <p>Hi There!</p>
                <p>
                  Looking to get Started? I can help answer your personal
                  questions!
                </p>
              </div>
            </div>

            {/* exit button */}
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-cyan-400 text-white cursor-pointer absolute right-4 -bottom-14 sm:-right-14 sm:bottom-0 z-20">
              <p className="text-3xl"> &times; </p>
            </div>
          </div>

          {/* tac */}
          <div className="text-slate-100 text-sm px-5 py-8 bg-slate-600 rounded-b-md absolute bottom-0 w-full">
            <p className="w-[98%] mb-3">
              By using the chat, I confirm I have read the
              <span className="text-cyan-500 underline cursor-pointer hover:no-underline">
                privacy policy
              </span>{" "}
              and do not object to the use of personal data.
            </p>
            <div className="w-fit px-6 py-2 cursor-pointer rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-100 active:scale-95 transition duration-300">
              <h2>I agree</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
