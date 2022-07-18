import { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';
import io from "socket.io-client";
import { ChatBody, ChatBox, ChatSidebar, Container } from '../../styles/chat/Index';
import RoomBody from './RoomBody';
import RoomFooter from './RoomFooter';
import RoomInfo from './RoomInfo';
import Sidebar from './Sidebar';

const socket = io.connect("http://localhost:3001");

const Index=()=>{
    const location=useLocation();
    const{username,room}=location.state;
    const[users,setUsers]=useState([]);
    const [messages,setMessages]=useState([])

    useEffect(()=>{
        setMessages(JSON.parse(localStorage.getItem('messages')));
        socket.emit('join_room',{room,username});
        socket.on('roomUsers',data=>{
        setUsers(data.users)
    })
    },[])

    const AddMessage=async(message)=>{

       await socket.emit('send_message',{message,username,room});
       socket.on('receive_message',data=>{
        setMessages(data)
    })
    }
    return(
        <Container>
            <ChatBox>
                <ChatSidebar>
                    <Sidebar users={users} username={username}/>
                </ChatSidebar>
                <ChatBody>
                    <RoomInfo setUsers={setUsers} room={room} size={users.length}
                     username={username} socket={socket} />
                    <RoomBody socket={socket}username={username} messages={messages}/>
                    <RoomFooter AddMessage={AddMessage} />
                </ChatBody>
            </ChatBox>
        </Container>
    )
}

export default Index;