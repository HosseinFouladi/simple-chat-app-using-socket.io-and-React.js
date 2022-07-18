import styled from "styled-components";
import { COLORS } from "../GlobalStyles";
import { device } from "../GlobalStyles";
export const Container=styled.div` 
 width: 100vw;
 height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center;

`

export const ChatBox=styled.main` 

 display: flex;
 border-radius: 10px;
 z-index: 2;
 border: 2px solid ${COLORS.lightGray};
 
 @media ${device.mobileS} {
    width: 85%;
 height: 80%;
  }
  @media ${device.mobileM} {
    width: 74%;
 height: 80%;
  }
  @media ${device.tablet} {
    width: 60%;
 height: 80%;
  }
  @media ${device.laptop} {
    width: 60%;
 height: 80%;
  }
`
export const ChatSidebar=styled.div` 
 height: 100%;
 flex: 1;

`
export const ChatBody=styled.div`
 flex:3;
 display: flex;
 flex-direction: column;
 height: 100%;
`