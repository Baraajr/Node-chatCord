const http = require('http')
const path = require('path')
const express = require('express')
const socketIo = require('socket.io')
const formatMessage = require('./utils/messages')
const {userJoin, getCurrentUser, userLeave,getRoomUsers} = require('./utils/users')

const app = express()
const server = http.createServer(app)
const io = socketIo(server)

// serving static files
app.use(express.static(path.join(__dirname,'public')))

const bot = 'chatCord'

io.on('connection',socket => {

    socket.on('joinRoom', ({username, room}) => {

        const user = userJoin(socket.id, username, room)

        socket.join(user.room)

        // welcome to chatCord
        socket.emit('message', formatMessage(bot,'welcome to chatCord'))

        // broadcast emit will be emitted  to users who are not conected
        socket.broadcast.to(user.room).emit('message', formatMessage(bot, `${user.username} has joined the chat`))

        //send users and room info 
        io.to(user.room).emit('roomUsers',{
            room: user.room,
            users:getRoomUsers(user.room)
        })
        
    })

    //listen for chatMessage from user
    socket.on('chatMessage', message => {
        const user = getCurrentUser(socket.id)

        io.to(user.room).emit('message',formatMessage(user.username,message))
    })
    
    // runs the client disconnect
    socket.on('disconnect',() => {

        const user = userLeave(socket.id)

        if(user){

            io.to(user.room).emit('message', formatMessage(bot,`${user.username} left the chat`))

            //send users and room info 
            io.to(user.room).emit('roomUsers',{
                room: user.room,
                users:getRoomUsers(user.room)
            })
            console.log(getRoomUsers(user.room))
        }
        
        
    })

})






const port = 3000 || process.env.port
server.listen(port,() => {
    console.log(`server listening on port: ${port}`)
})