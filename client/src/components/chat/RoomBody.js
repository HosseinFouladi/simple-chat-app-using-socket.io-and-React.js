import { useEffect, useState } from "react";
import {  MessageBox, MessageContainer,  TextBox, Time, TimeContainer, UserName, UserNameContainer, WellcomeMessage } from "../../styles/chat/RoomBody";
import ScrollToBottom from "react-scroll-to-bottom";
import '../../styles/chat/scroll.css';
const RoomBody=({username,socket,messages})=>{

    const [newMember,setNewMember]=useState('');
    useEffect(()=>{
        socket.on('welcome',nMember=>{
            setNewMember(nMember);
        })
    },[])
    return(
        <ScrollToBottom className="container">
            <MessageContainer me='msg'>
            {newMember!==''&& <WellcomeMessage>{newMember} has joined the chat </WellcomeMessage>}
            </MessageContainer>
            {messages.map(item=>{
                return <MessageContainer key={item.id} me={item.username===username?'end':'start'}>
                <MessageBox me={item.username===username?'end':'start'}>
                    <UserNameContainer>
                        <UserName>{item.username}</UserName>
                    </UserNameContainer>
                    <TextBox>{item.message}</TextBox>
                    <TimeContainer>
                        <Time>{item.time}</Time>
                    </TimeContainer>
                </MessageBox>
            </MessageContainer>
            })}
        </ScrollToBottom>
        
    )
}

export default RoomBody;