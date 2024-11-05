import React from 'react'
import styled, { useTheme } from 'styled-components';
import { TextDiv } from '../Micro_components/SidebarItem';

function F326() {
  const theme=useTheme();
  return (
    <Framediv>
      <svg width="32" height="33" viewBox="0 0 32 33" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.3333 21.8333H16V16.5H14.6667M16 11.1667H16.0133M28 16.5C28 18.0759 27.6896 19.6363 27.0866 21.0922C26.4835 22.5481 25.5996 23.871 24.4853 24.9853C23.371 26.0996 22.0481 26.9835 20.5922 27.5866C19.1363 28.1896 17.5759 28.5 16 28.5C14.4241 28.5 12.8637 28.1896 11.4078 27.5866C9.95189 26.9835 8.62902 26.0996 7.51472 24.9853C6.40042 23.871 5.5165 22.5481 4.91345 21.0922C4.31039 19.6363 4 18.0759 4 16.5C4 13.3174 5.26428 10.2652 7.51472 8.01472C9.76516 5.76428 12.8174 4.5 16 4.5C19.1826 4.5 22.2348 5.76428 24.4853 8.01472C26.7357 10.2652 28 13.3174 28 16.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <TextDiv2>How it works</TextDiv2>
    </Framediv>
  )
}

export default F326

const Framediv = styled.div`
  position: absolute;
  max-width: 204px;
  max-height: 61px;
  top: 51px;
  right:40px;
  /* left: 1212px; */
  padding: 12px 16px 12px 16px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap:10px;
  border: 1.5px solid #99E4FF;
  transition: ease-in-out 0.2s;
  &:hover{
    cursor: pointer;
    background-color: ${props=>props.theme.hover};
  }
`
const TextDiv2= styled(TextDiv)`
  font-family: "DM Sans","Sans-serif";
  font-weight: 700;
  font-size: 22px;
`
