import styled from "styled-components";
import { COLORS } from "../GlobalStyles";
import { device } from "../GlobalStyles";
export const BodyBox=styled.div` 
 flex: 4;
 width: 100%;
 background-color:#f7f7f7;
 display: flex;
 flex-direction: column;
 overflow-y: scroll;
 overflow-x: hidden;
 border-bottom: 1px solid ${COLORS.lightGray};
`
export const MessageContainer=styled.div` 

 display: flex;
 align-items: center;
 justify-content: ${(props) => props.me==='msg'?'center':props.me==='end'?'end':'start'};

 
 @media ${device.mobileS} {
  width:65%;
  padding:2px 10px;
  }
  @media ${device.mobileM} {
    padding:4px 10px;
    width: 87%;
  }
  @media ${device.tablet} {
    padding:8px 10px;
    width: 90%;
  }
  @media ${device.laptop} {
    padding:10px 10px;
    width: 95%;
  }

 
`
export const MessageBox=styled.div` 
 background-color: ${(props)=>props.me==='end'?'#99FFCC':'#FFFF66'};//#43a047;
 color:black;

 height: auto;
 max-width: 70%;
 width: fit-content;

 display: flex;
 flex-direction: column;

 @media ${device.mobileS} {
    border-radius: 5px;
    padding: 5px 10px;
  }
  @media ${device.mobileM} {
    border-radius: 6px;
    padding: 6px 10px;
  }
  @media ${device.tablet} {
    border-radius: 8px;
    padding: 8px 12px;
  }
  @media ${device.laptop} {
    border-radius: 10px;
    padding: 10px 15px;
  }
 
`
export const UserNameContainer=styled.div` 
 width: 100%;
 display: flex;
 justify-content: start;
 align-items: center;


 @media ${device.mobileS} {
  height:1px;
  }
  @media ${device.mobileM} {
    height: 1px;;
  }
  @media ${device.tablet} {
    height: 1px;
  }
  @media ${device.laptop} {
    height: 2px;
  }
`
export const TextBox=styled.p` 
 flex: 1;
 width: 100%;
 

 @media ${device.mobileS} {
  font-size: 10px;
  }
  @media ${device.mobileM} {
    font-size: 12px;
  }
  @media ${device.tablet} {
    font-size: 14px;
  }
  @media ${device.laptop} {
    font-size: 16px;
  }
`
export const TimeContainer=styled.div` 
 width: 100%;
 display: flex;
 justify-content: end;
 align-items: center;

 @media ${device.mobileS} {
    height:1px;
  }
  @media ${device.mobileM} {
    height:1px;
  }
  @media ${device.tablet} {
    height:1px;
  }
  @media ${device.laptop} {
    height:2px;
  }
`
export const UserName=styled.span` 

 color:${COLORS.orangeDark};

 @media ${device.mobileS} {
     font-size:8px;
  }
  @media ${device.mobileM} {
    font-size: 10px;
  }
  @media ${device.tablet} {
    font-size: 12px;
  }
  @media ${device.laptop} {
    font-size: 14px;
  }
`
export const Time=styled.span` 
  @media ${device.mobileS} {
     font-size:8px;
  }
  @media ${device.mobileM} {
    font-size: 8px;
  }
  @media ${device.tablet} {
    font-size: 10px;
  }
  @media ${device.laptop} {
    font-size: 10px;
  }
 color:#2F4F4F;
`
export const WellcomeMessage=styled.h2` 
  color:blue;
  @media ${device.mobileS} {
     font-size:10px;
  }
  @media ${device.mobileM} {
    font-size: 12px;
  }
  @media ${device.tablet} {
    font-size: 14px;
  }
  @media ${device.laptop} {
    font-size: 16px;
  }
`

