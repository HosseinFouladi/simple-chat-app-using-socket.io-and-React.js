
import {  useState} from "react";
import { Container, Input, InputBox, JoinButton, RoomBody, RoomBox, RoomHeader } from "../../styles/app/Index";
import { useNavigate} from 'react-router-dom';


function App() {
   const[room,setRoom]=useState('');
   const[username,setUsername]=useState('')
   const navigate=useNavigate();

   const setValues=(e)=>{
      const{name,value}=e.target;
      name==='username'?setUsername(value):setRoom(value);
   }


   const joinRoom=(e)=>{
    e.preventDefault();
    navigate("/chat-box",{state:{room,username}})
   }
   
  return (
    <Container >
      <RoomBox onSubmit={joinRoom}>
        <RoomHeader>Welcome to chat Room</RoomHeader>
        <RoomBody>
        <InputBox>
            <Input placeholder="Username" required={true} name='username' value={username}onChange={setValues}/>
        </InputBox>
        <InputBox>
            <Input placeholder="Room Name"name='room'required={true} value={room} onChange={setValues}/>
        </InputBox>
        <InputBox>
            <JoinButton type='submit'>Join Room</JoinButton>
        </InputBox>
        </RoomBody>
      </RoomBox>
    </Container>
  );
}

export default App;
