
let users=[];
const messages=[];
const addMessage=data=>{
   
    messages.push(data);
}
const GetRoomMessages=(room)=>{
  const roomMessages=  messages.filter(item=>{
        return item.room===room;
    })
    return roomMessages;
}
const addUserToList=(id,username,room)=>{
    const index=users.findIndex(item=>item.username===username);
    if(index===-1){
        users.push({id,username,room});
    }
    return {id,username,room}
   
}

const findRoomUsers=(room)=>{
    return users.filter(users=>users.room===room)
}
const getCurrentUser=(id)=>{
    return users.find(user=>user.id===id)
}

const formatMessage=(msg,username,room)=>{
    return {
        message:msg,
        username,
        room,
        time:new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
}

const exitUser=(username)=>{
   users= users.filter(item=>item.username!==username);
}

module.exports={
    addUserToList,
    findRoomUsers,
    getCurrentUser,
    formatMessage,
    addMessage,
    GetRoomMessages,
    exitUser
}