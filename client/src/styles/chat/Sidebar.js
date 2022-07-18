import styled from "styled-components";
import { COLORS } from "../GlobalStyles";
import img from '../../images/chat.png';
import { device } from "../GlobalStyles";
export const SideContainer=styled.div` 
 width: 100%;
 height: 100%;
 background-color: ${COLORS.blue};
 display: flex;
 flex-direction: column;
 border-top-left-radius:10px;
 border-bottom-left-radius:10px;
 border-right: 10px solid ${COLORS.white};
`
export const Header=styled.div` 
 display: flex;
 flex: 1;
 width: 100%;
 justify-content: center;
 border-bottom: 1px solid ${COLORS.white};
 align-items: center;
`
export const UserList=styled.ul` 
 flex:4;
 width: 100%;
 display: flex;
 flex-direction: column;
 overflow: auto;
 list-style: none;
 align-items: center;


`

export const UserNames=styled.ul` 
 color: ${(props)=>props.you?`${COLORS.orangeDark}`:`${COLORS.white}`};

 display: flex;
 justify-content: start;

 @media ${device.mobileS} {
  font-size: 10px;
 padding: 3px 3px;
 width: 90%;
  }
  @media ${device.mobileM} {
    font-size: 12px;
 padding: 6px 5px;
 width: 80%;
  }
  @media ${device.tablet} {
    font-size: 14px;
 padding: 8px 5px;
 width: 80%;
  }
  @media ${device.laptop} {
    font-size: 16px;
    padding: 10px 5px;
    width: 90%;
  }
`
export const Logo=styled.div` 
    background-size: cover;
    background-image:url(${img});
    z-index: 4;
    border-radius: 10%;

    @media ${device.mobileS} {
      height: 25px;
      width: 25px;
  }
  @media ${device.mobileM} {
    height: 30px;
    width: 30px;
  }
  @media ${device.tablet} {
    height: 40px;
    width: 40px;
  }
  @media ${device.laptop} {
    height: 60px;
    width: 60px;
  }
`
export const Title=styled.span` 
  color: ${COLORS.white};


  @media ${device.mobileS} {
    margin-left: 2px;
  font-size: 8px;
  font-weight: 500;
  }
  @media ${device.mobileM} {
  margin-left: 3px;
  font-size: 10px;
  font-weight: 500;
  }
  @media ${device.tablet} {
    margin-left: 4px;
  font-size: 14px;
  font-weight: 700;
  }
  @media ${device.laptop} {
    margin-left: 5px;
  font-size: 18px;
  font-weight: 700;
  }
`