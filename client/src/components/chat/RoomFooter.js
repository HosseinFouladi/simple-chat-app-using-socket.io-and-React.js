import { FooterBox,  SendIcon, SendInput } from "../../styles/chat/RoomFooter";
import {faPaperPlane}from'@fortawesome/free-solid-svg-icons';
import { useRef, useState } from "react";

 const RoomFooter=({AddMessage})=>{
    const [message,setMessage]=useState('');
    const inputRef=useRef();
    const setMessageValue=e=>{
        setMessage(e.target.value);
    }
    const sendMessage=e=>{
        e.preventDefault();
        if(message!=='')
        AddMessage(message);
        setMessage('');
        inputRef.current.focus();
   
    }
    return(
        <FooterBox>
                <SendInput onChange={setMessageValue} ref={inputRef}  value={message} placeholder="Typesomething..."
                     onKeyPress={(event) => {
                        event.key === "Enter" && sendMessage(event);
                      }}/>  
                <SendIcon onClick={sendMessage} icon={faPaperPlane}/>        
        </FooterBox>
    )
 }
 export default RoomFooter;