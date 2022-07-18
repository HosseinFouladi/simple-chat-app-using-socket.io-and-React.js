import styled from "styled-components";
import { COLORS } from "../GlobalStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { device } from "../GlobalStyles";
export const FooterBox=styled.div` 
 flex: 1;
 width: 100%;
 border-bottom-right-radius:10px;
 display: flex;
 justify-content: center;
 align-items: center;
 background-color:#f7f7f7;
`
export const SendContainer=styled.div` 
 position: absolute;
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
 height: 100%;
`
export const SendInput=styled.input` 

 &:focus{
    outline: none;
 }

 background-color: ${COLORS.white};
 border: 1px solid gray;

 @media ${device.mobileS} {
   width: 60%;
   height: 15px;
   border-radius: 4px;
   padding: 4px 8px;
   font-size: 8px;
  }
  @media ${device.mobileM} {
   width: 65%;
   height: 20px;
   border-radius: 4px;
   padding: 4px 10px;
   font-size: 10px;
  }
  @media ${device.tablet} {
   width: 80%;
   height: 25px;
   border-radius: 5px;
   padding: 5px 12px;
   font-size: 12px;
  }
  @media ${device.laptop} {
   width: 80%;
   height: 30px;
   border-radius: 5px;
   padding: 5px 15px;
   font-size: 14px;
  }

`
export const SendIcon=styled(FontAwesomeIcon)` 

 z-index: 2;
 color:${COLORS.blue};
 cursor: pointer;

 @media ${device.mobileS} {
   margin-left: -16px;
   font-size: 14px;
  }
  @media ${device.mobileM} {
   margin-left: -22px;
   font-size: 16px;
  }
  @media ${device.tablet} {
   margin-left: -24px;
   font-size: 20px;
  }
  @media ${device.laptop} {
   margin-left: -28px;
   font-size: 24px;
  }
`