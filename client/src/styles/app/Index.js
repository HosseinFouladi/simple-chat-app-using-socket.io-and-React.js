import styled from 'styled-components';
import { COLORS } from '../GlobalStyles';
import { device } from '../GlobalStyles';
export const Container=styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`
export const RoomBox=styled.form` 
    width: 40%;
    height: 60%;
    border: 2px solid ${COLORS.gray};
    border-radius: 10px;
    display: flex;
    flex-direction: column;

`
export const RoomHeader=styled.div` 
    width: 100%;
    flex: 1;
    background-color: ${COLORS.blue};
    color: ${COLORS.white};
    border-bottom:2px solid gray;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  @media ${device.mobileS} {
    font-size: 12px;
  }
  @media ${device.mobileM} {
    font-size: 14px;
  }
  @media ${device.tablet} {
    font-size:20px;;
  }
  @media ${device.laptop} {
    font-size:22px;
  }
`
export const RoomBody=styled.div`
    width:100%;
    flex: 4;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
export const InputBox=styled.div` 
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`
export const Input=styled.input` 
 
    border:1.5px solid ${COLORS.gray};
    @media ${device.mobileS} {
    width: 70%;
    height: 14px;
    border-radius: 3px;
    padding: 4px 8px;
    font-size: 10px;
  }
  @media ${device.mobileM} {
    width: 70%;
    height: 16px;
    border-radius: 3px;
    padding: 4px 8px;
    font-size: 10px;
  }
  @media ${device.tablet} {
    width: 70%;
    height: 18px;
    border-radius: 4px;
    padding: 5px 10px;
    font-size: 12px;
  }
  @media ${device.laptop} {
    width: 70%;
    height: 20px;
    border-radius: 5px;
    padding: 5px 10px;
 
  }
    &:focus{
        border:1.5px solid ${COLORS.gray};
    }
`
export const JoinButton=styled.button` 

    background-color: ${COLORS.blue};
    color: ${COLORS.white};
    cursor: pointer;
    font-size: 16px;
    border: none;
    box-shadow: 1px 1px ${COLORS.gray};

    @media ${device.mobileS} {
        width: 60px;
    height: 20px;
    padding: 6px 6px;
    border-radius: 5px;
    font-size: 8px;
  }
  @media ${device.mobileM} {
    width: 80px;
    height: 25px;
    padding: 8px 8px;
    border-radius: 7px;
    font-size: 10px;
  }
  @media ${device.tablet} {
    width: 100px;
    height: 30px;
    padding: 8px 8px;
    border-radius: 8px;
    font-size: 12px;
  }
  @media ${device.laptop} {
    width: 120px;
    height: 40px;
    padding: 10px 10px;
    border-radius: 10px;
    font-size: 15px;
  }
`