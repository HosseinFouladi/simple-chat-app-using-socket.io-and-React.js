 import styled from "styled-components";
import { COLORS } from "../GlobalStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { device } from "../GlobalStyles";

 export const HeadBox=styled.div` 
  width: 100%;
  flex: 1;
  background-color: ${COLORS.blue};
  border-top-right-radius: 10px;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: start;
  align-items: center;
 `

 export const GroupName=styled.span` 
  color: ${COLORS.white};


  @media ${device.mobileS} {
    font-size: 16px;
    font-weight:500;
  }
  @media ${device.mobileM} {
    font-size: 18px;
    font-weight: 600;
  }
  @media ${device.tablet} {
    font-size: 20px;
    font-weight: 700;
  }
  @media ${device.laptop} {
    font-size: 25px;
    font-weight: 700;
  }
 `
 export const GroupSize=styled.p` 
  color: ${COLORS.white};
  

  @media ${device.mobileS} {
    font-size: 8px;
  }
  @media ${device.mobileM} {
    font-size: 10px;
  }
  @media ${device.tablet} {
    font-size: 10px;
  }
  @media ${device.laptop} {
    font-size: 12px;
  }
 `
export const GroupInfoContainer=styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  flex:1;
  @media ${device.mobileS} {
    margin-right: -15px;
  }
  @media ${device.mobileM} {
    margin-right: -20px;
  }
  @media ${device.tablet} {
    margin-right: -25px;
  }
  @media ${device.laptop} {
    margin-right: -30px;
  }
`
 export const ExitIcon=styled(FontAwesomeIcon)`
    color:${COLORS.white};
    
    cursor: pointer;

    @media ${device.mobileS} {
      font-size: 18px;
  }
  @media ${device.mobileM} {
    font-size: 20px;
  }
  @media ${device.tablet} {
    font-size: 25px;
  }
  @media ${device.laptop} {
    font-size: 30px;
  }
 `
 export const ExitBox=styled.div` 
  display: flex;
  align-items: center;
  justify-content: end;
  flex:1;
  

  @media ${device.mobileS} {
    padding-right: 12px;
  }
  @media ${device.mobileM} {
    padding-right: 15px;
  }
  @media ${device.tablet} {
    padding-right: 18px;
  }
  @media ${device.laptop} {
    padding-right: 20px;
  }
 `
 