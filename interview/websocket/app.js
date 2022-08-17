const WebSocket = require('ws');

const wss = new WebSocket({
    port: 1316
});

wss.on('connection', (ws) => {
    console.log(ws);
    ws.on('message', (message) => {
        console.log(message);
        let msgData = JSON.parse(message);
        // 广播
        wss.clients.forEach(client => {
            client.send(msgData);
        })
    })
})