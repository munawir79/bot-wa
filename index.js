const { default: makeWASocket } = require('@whiskeysockets/baileys');

async function startBot() {
    const sock = makeWASocket({ printQRInTerminal: true });

    sock.ev.on('messages.upsert', async m => {
        console.log('Received a message:', m);
    });
}

startBot();
