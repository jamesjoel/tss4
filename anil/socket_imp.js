1. socket.emit("", "")
	------ sending to sender client only

2. socket.broadcast.emit("", "")
	----- sending to all connected client except sender

3. socket.broadcast.to("sport").emit("", "")
	----- sending to all connected clients in "sports" room except sender

4. socket.to("sport").emit("", "")
	----- sending to sender client in "sports" room

5. socket.broadcast.to(socket.id).emit("", "")
	----- sending to specific socket id

6. io.emit("", "")
	----- sending to all connected client include sender

7. socket.on("", function(data){
	
})
	----- event listener for emmiting message and its receiced in data variable
