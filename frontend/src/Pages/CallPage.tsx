import { Calling as CallingComponent } from "../Components/index"
import { Receiver as ReceiverComponent } from "../Components/index"
import {Chatbox as ChatboxComponent } from "../Components/index"
const CallPage = () => {
  return (
    <div>
      <div>
        <CallingComponent />
      </div>
      <div>
        <ReceiverComponent />
      </div>
      <div>
        <ChatboxComponent />
      </div>
    </div>
  );
}

export default CallPage
