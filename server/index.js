const { Socket } = require('dgram');
const express=require('express');
const http=require('http');
require('dotenv').config({path:'./config.env'})
const { Server } = require("socket.io");
const cors=require('cors');
const { addUserToList, findRoomUsers,getCurrentUser,formatMessage, addMessage, GetRoomMessages, exitUser } = require('./utilities');


const app=express();

app.use(cors());

const port=3001||process.env.SERVER_PORT;

const server=http.createServer(app);

const io=new Server(server,{
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST","PUT","DELETE"],
      },
})

io.on('connection',socket=>{

    socket.on('join_room',(data)=>{
          const user=addUserToList(socket.id,data.username,data.room);
          socket.join(user.room);//data coming from client
          socket.broadcast.to(user.room).emit('welcome',user.username)
           // Send users and room info
           io.to(user.room).emit("roomUsers", {
            users: findRoomUsers(user.room),
          });
    });

    socket.on("send_message", (data) => {
      addMessage(formatMessage(data.message,data.username,data.room));
      const messages=GetRoomMessages(data.room);
        io.to(data.room).emit("receive_message", messages);
    });

    socket.on("exitUser", (data) => {
      console.log(data)
      exitUser(data.username);
      io.to(data.room).emit("users_after_exit", {
        users:findRoomUsers(data.room)
      });
    });
})





server.listen(port,()=>{
    console.log("server is running...")
})