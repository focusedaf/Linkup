import peter from "../assets/peter.svg";
import jane from "../assets/jane.svg";
import john from "../assets/john.svg";
import mia from "../assets/mia.svg";

const Chat = () => {
  return (
    <div className="flex flex-col gap-5 backdrop-blur-xl bg-gray/50 rounded-xl p-10">
      <span className="flex items-center justify-between">
        {" "}
        <p className="text-white font-semibold">Chat</p>
        <button className="bg-blue-700 text-white rounded-xl px-2 py-1 hover:bg-blue-800 transition cursor-pointer">
          Create DM
        </button>
      </span>
      <div className="flex justify-between items-center"></div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <img src={peter} alt="Peter" className="w-10 h-10" />
          <span>Peter</span>
        </div>
        <div className="flex justify-between items-center">
          <img src={jane} alt="Jane" className="w-10 h-10" />
          <span>Jane</span>
        </div>
        <div className="flex justify-between items-center">
          <img src={john} alt="John" className="w-10 h-10" />
          <span>John</span>
        </div>
        <div className="flex justify-between items-center">
          <img src={mia} alt="Mia" className="w-10 h-10" />
          <span>Mia</span>
        </div>
      </div>
    </div>
  );
};

export default Chat;
