const http = require("http");
const app = require("./app");

const { initializeSocket } = require("./sockets/socket");

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

initializeSocket(server);

server.listen(PORT, () => {

    console.log(`🚀 Server Running on ${PORT}`);

});