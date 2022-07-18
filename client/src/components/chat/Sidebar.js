import { Header, Logo, SideContainer, Title, UserList, UserNames } from "../../styles/chat/Sidebar";

const Sidebar=({users,username})=>{
    return(
        <SideContainer>
            <Header>
                <Logo></Logo>
                <Title>Hossein Chat</Title>
            </Header>
            <UserList>
                {users.map((user,index)=>{
                    return<UserNames key={index} you={user.username===username?true:false} >{user.username}</UserNames>
                })}
            </UserList>
        </SideContainer>
    )
}

export default Sidebar;