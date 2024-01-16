const express = require("express")
const cors = require('cors');
const mongoose = require('mongoose')
const io = require('socket.io')(8080,{
	cors:{
		origin:['http://localhost:3000'],
	}
})


const app = express();
app.use(cors());  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const userRoutes = require('./routers/authrouters');
const chatRoutes = require('./routers/Chatroutes');
const { Socket } = require("socket.io");
app.use('/auth', userRoutes);
app.use('/messages', chatRoutes);

//connect to db
mongoose.connect(
	"*******************************************************"
);
mongoose.connection.on("connected", () => {
	console.log("DB connected");
});
mongoose.connection.on("error", (err) => {
	console.log("DB failed with err - ", err);
});
//create socket server 

io.on('connection', Socket => {
	console.log(Socket.id)
	Socket.on('send-message',(message,room,username,profilepic)=>{
		if(room === ''){
			Socket.broadcast.emit('receive-message',message) 
			console.log(message)
		}
		else{
			Socket.to(room).emit('receive-message',message,username,profilepic) 
		}
		
	})
	Socket.on("join-room",room =>{
		Socket.join(room)
	})
	
})


//create server 
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
