require('dotenv').config();

const socket = require('socket.io')();

socket.on('connection', client => {
    
    client.send("Hello, I'm Server!");
    
    const header = client.handshake.headers;

    const user_IP = header['true-client-ip'];

    console.log("User Connected: " + user_IP);

    client.conn.on('packet', (packet) => {
        
        client.send("Your IP: " + user_IP);

        console.log(packet);
    
    })
});

const PORT = process.env.PORT || 5555;

socket.listen(PORT);