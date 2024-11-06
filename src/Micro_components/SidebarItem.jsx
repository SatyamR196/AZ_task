import React from 'react'
import styled, { useTheme } from 'styled-components';
// var theme = useTheme();
function SidebarItem({text,logo,bg="transparent",weight=400}){
    
  return (
    <Item bg={bg}>
      <IconDiv>
        {logo}
      </IconDiv>
      {bg === "#D6F4FF" ? <TextDiv style={{color:"black"}} weight={weight}>{text}</TextDiv> : <TextDiv weight={weight}>{text}</TextDiv> }
    </Item>
  )
}


export default SidebarItem


const Item = styled.div`
    /* width:267px; */
    height: 64px;
    background-color: ${props=>props.bg};
    display: flex;
    /* justify-content: center; */
    align-items: center;
    padding-left: 20px;
    gap:20px;
    flex-grow: 0;
    flex-shrink: 0;
    transition: ease-in-out 0.25s;
    border-radius: 8px;
    &:hover{
        cursor: pointer;
        background-color: ${props=>props.theme.hover};
    }

`
const IconDiv = styled.div`
    width:32px;
    height: 32px;
    /* background-color: white; */
`
export const TextDiv = styled.div`
    height: 40px;
    font-weight: ${props=>props.weight};
    font-size: 24px;
    font-family: 'DM Sans','sans-serif';
    line-height: 40px;
    letter-spacing: -0.03em;
    text-align: left;
`