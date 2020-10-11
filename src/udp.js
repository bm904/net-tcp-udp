const dgram = require('dgram');
const socket = dgram.createSocket('udp4');

socket.on('message', (msg, rinfo) => {
  console.log(`server received the message : ${msg} from ${rinfo.address}:${rinfo.port}`);
});

socket.bind(8081);
console.log("Starting server UDP on 8081")