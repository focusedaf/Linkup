import {WebSocket,WebSocketServer} from "ws";

export const webSocketHandler=(app)=>{///websocket logic
const wss = new WebSocketServer({port:8080});

wss.on('connection',function connection(ws){
    let senderSocket = null ;
    let receiverSocket = null;
    ws.on('message',function message(data){
        const message = JSON.parse(data);


        if(message.type==="identify-as-sender"){
            senderSocket = ws;
        }else if(message.type==="identify-as-receiver"){
            receiverSocket = ws;
        }else if(message.type === "create-offer"){
            if(!receiverSocket){
                return;
            }
            receiverSocket.send(JSON.stringify({type:"offer",offer:message}))
        }else if(message.type === "create-answer"){
            if(!receiverSocket) return;
            receiverSocket.send(JSON.stringify({type:"offer",offer:message}))
        }if(ws === senderSocket){
            receiverSocket?.send(JSON.stringify({type:'iceCandidate',candidate:message.candidate}));
        }else if(ws === receiverSocket){
            senderSocket?.send(JSON.stringify({type:'iceCandidate',candidate:message.candidate}))
        }

    });
});
console.log("ws connection established");

};