import { WebSocket, WebSocketServer } from 'ws';

export const wss = new WebSocketServer({ port: 8080 });

let senderSocket=  null;
let receiverSocket = null;

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    const message = JSON.parse(data);
    if (message.type === 'sender') {
        console.log("sender set");
        
      senderSocket = ws;
    } else if (message.type === 'receiver') {
        console.log("receiver set");
        
      receiverSocket = ws;
    } else if (message.type === 'createOffer') {
        console.log("offer received");
        
      if (ws !== senderSocket) {
        return;
      }
      receiverSocket?.send(JSON.stringify({ type: 'createOffer', sdp: message.sdp }));

    } else if (message.type === 'createAnswer') {
        console.log("Answer received");
        
        if (ws !== receiverSocket) {
          return;
        }
        senderSocket?.send(JSON.stringify({ type: 'createAnswer', sdp: message.sdp }));
    } else if (message.type === 'iceCandidate') {
      if (ws === senderSocket) {
        receiverSocket?.send(JSON.stringify({ type: 'iceCandidate', candidate: message.candidate }));
      } else if (ws === receiverSocket) {
        senderSocket?.send(JSON.stringify({ type: 'iceCandidate', candidate: message.candidate }));
      }
    }
  });
});
 