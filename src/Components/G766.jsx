import React from 'react'
import styled, { useTheme } from 'styled-components';

function G766() {
  const theme=useTheme();
  return (
    <Div766 tabindex="0">
      <Div1>
        <Div1a>
        <svg width="32" height="33" viewBox="0 0 32 33" fill={theme.IconBg} xmlns="http://www.w3.org/2000/svg">
        <path d="M10.6667 9.83333V4.5M21.3334 9.83333V4.5M9.33336 15.1667H22.6667M6.6667 28.5H25.3334C26.0406 28.5 26.7189 28.219 27.219 27.719C27.7191 27.2189 28 26.5406 28 25.8333V9.83333C28 9.12609 27.7191 8.44781 27.219 7.94772C26.7189 7.44762 26.0406 7.16667 25.3334 7.16667H6.6667C5.95945 7.16667 5.28118 7.44762 4.78108 7.94772C4.28098 8.44781 4.00003 9.12609 4.00003 9.83333V25.8333C4.00003 26.5406 4.28098 27.2189 4.78108 27.719C5.28118 28.219 5.95945 28.5 6.6667 28.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
          <Text>Mentor Sessions</Text>
        </Div1a>
        <Div1b>
        <svg width="32" height="33" viewBox="0 0 32 33" fill={theme.IconBg} xmlns="http://www.w3.org/2000/svg">
        <path d="M28 18.1734C24.1873 19.715 20.1126 20.505 16 20.5C11.756 20.5 7.7067 19.6734 4.00003 18.1734M21.3334 8.50002V5.83335C21.3334 5.12611 21.0524 4.44783 20.5523 3.94774C20.0522 3.44764 19.3739 3.16669 18.6667 3.16669H13.3334C12.6261 3.16669 11.9478 3.44764 11.4477 3.94774C10.9476 4.44783 10.6667 5.12611 10.6667 5.83335V8.50002M16 16.5H16.0134M6.6667 27.1667H25.3334C26.0406 27.1667 26.7189 26.8857 27.219 26.3856C27.7191 25.8855 28 25.2073 28 24.5V11.1667C28 10.4594 27.7191 9.78117 27.219 9.28107C26.7189 8.78097 26.0406 8.50002 25.3334 8.50002H6.6667C5.95945 8.50002 5.28118 8.78097 4.78108 9.28107C4.28098 9.78117 4.00003 10.4594 4.00003 11.1667V24.5C4.00003 25.2073 4.28098 25.8855 4.78108 26.3856C5.28118 26.8857 5.95945 27.1667 6.6667 27.1667Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
          <Text>Learing Material</Text>
        </Div1b>
      </Div1>
      
    </Div766>
  )
}

export default G766

const Div766 = styled.div`
  position: absolute;
  width: 563px;
  height: 82px;
  top: 40px;
  left: 40px;
  border-radius: 14.67px;
  background: ${props=>props.theme.colorG766};
  display: flex;
  justify-content: center;
  align-items: center;
  /* &:focus{
    background-color: red;
  } */
`
const Div1 = styled.div`
  width:528px;
  height: 62px;
  border-radius:11px;
  /* background-color: #ffa4a4; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Div1a=styled.div`
  max-width: 243px;
  max-height: 61px;
  /* background-color: #c8f79a; */
  padding: 12px 20px 12px 20px;
  border-radius: 11px;
  display: flex;
  gap:12px;

`
const Div1b= styled(Div1a)`
  position: relative;
  background-color: ${props=>props.theme.colorActive};
  border-radius: 11px;
  border: 0.92px solid #29539b7d;
  box-shadow: 0px 3.67px 3.67px 0px #29539B4D;
  border-radius: 15px;  
  /* display: flex;
  justify-content: center;
  align-items: center; */
  div{
  font-weight: 700;
  }
`

const Text=styled.div`
  font-family: DM Sans;
  font-size: 22px;
  font-weight: 400;
  line-height: 36.67px;
  letter-spacing: -0.03em;
  text-align: center;

`
