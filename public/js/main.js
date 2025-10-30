
const socket = io()
const chatForm = document.getElementById('chat-form')
const chatMessages = document.querySelector('.chat-messages')
const roomName = document.getElementById('room-name')
const usersList = document.getElementById('users')

// get username and room from query string from package qs cdn 
const {username,room} = Qs.parse(location.search,{
    ignoreQueryPrefix: true
})

// console.log(username, room)

//join chat room 
socket.emit('joinRoom',{username, room})

// output messae
const outputMessage = function(message){
    //create a div
    const div = document.createElement('div')
    div.classList.add('message')
    div.innerHTML = `<p class="meta">${message.username} <span>${message.time}</span></p>
                    <p class="text">
                    ${message.message}
                    </p>` ;
    document.querySelector('.chat-messages').appendChild(div)
}

// add room name to dom 
const outputRoomName = function(room){
    roomName.innerText = room 
} 

//add users to dom
const outputUsers = function(users){
    usersList.innerHTML = `
        ${users.map(user => `<li>${user.username}</li>`).join('')}
    `
}

//get room users
socket.on('roomUsers',({room, users}) => {
    outputRoomName(room)
    outputUsers(users)
})

// message from server 
socket.on('message', message => {

    // calling the function
    outputMessage(message)

    //scroll down when there is a message
    chatMessages.scrollTop = chatMessages.scrollHeight
})

// message submit
chatForm.addEventListener('submit',e => {
    e.preventDefault()
    // get the input value 
    const msg = e.target.elements.msg.value

    // emit message to the server
    socket.emit('chatMessage',msg)

    // clear input 
    e.target.elements.msg.value = ''
    e.target.elements.msg.focus()
})

