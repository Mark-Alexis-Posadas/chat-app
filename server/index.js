require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const app = express();
app.use(cors());
const http = require("http").createServer(app);
const io = require("socket.io")(http, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  socket.on("sendMessage", (message) => {
    io.emit("receiveMessage", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected: ", socket.id);
  });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //port
    http.listen(process.env.PORT, () => {
      console.log("connected to db & listening of port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
