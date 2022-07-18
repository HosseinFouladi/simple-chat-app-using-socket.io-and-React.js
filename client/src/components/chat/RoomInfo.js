import { ExitIcon, GroupName,GroupInfoContainer, GroupSize, HeadBox, ExitBox } from "../../styles/chat/RoomInfo";
import { faSignOut}from'@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";



const RoomInfo=({room,size,username,socket,setUsers})=>{
    const navigate=useNavigate();

    const exitRoom=async()=>{

         await socket.emit('exitUser',{username,room})
         socket.on('users_after_exit',data=>{
            console.log(data.users)
            setUsers(data.users)
        })
        navigate('/');
    }

    return(
        <HeadBox>
            <GroupInfoContainer>
                <GroupName>{room}</GroupName>
                <GroupSize>{size} members</GroupSize>
            </GroupInfoContainer>
            <ExitBox>
                <ExitIcon onClick={exitRoom} icon={faSignOut}/>
            </ExitBox>
        </HeadBox>
    )
}
export default RoomInfo;