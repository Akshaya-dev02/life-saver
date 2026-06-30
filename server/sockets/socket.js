const { Server } = require("socket.io");

let io;

const initializeSocket = (server) => {

    io = new Server(server, {
        cors: {
            origin: process.env.CLIENT_URL,
            methods: ["GET", "POST"]
        }
    });

    io.on("connection", (socket) => {

        console.log("🟢 User Connected :", socket.id);

        socket.on("location-update", (data) => {

            io.emit("live-location", data);

        });

        socket.on("disconnect", () => {

            console.log("🔴 User Disconnected");

        });

    });

};

const getIO = () => io;

module.exports = {
    initializeSocket,
    getIO
};