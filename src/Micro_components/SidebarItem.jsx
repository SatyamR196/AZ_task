import React from 'react'
import styled from 'styled-components';

function SidebarItem({text,logo,bg="white",weight=400}) {
  return (
    <Item bg={bg}>
      <IconDiv>
        <img src={logo}/>
      </IconDiv>
      <TextDiv weight={weight}>{text}</TextDiv>
    </Item>
  )
}


export default SidebarItem


const Item = styled.div`
    /* width:267px; */
    height: 64px;
    /* background-color: ${props=>props.bg}; */
    display: flex;
    /* justify-content: center; */
    align-items: center;
    padding-left: 20px;
    gap:20px;
    flex-grow: 0;
    flex-shrink: 0;

`
const IconDiv = styled.div`
    width:32px;
    height: 32px;
    background-color: white;
`
const TextDiv = styled.div`
    height: 40px;
    font-weight: ${props=>props.weight};
    font-size: 24px;
    font-family: 'DM Sans','sans-serif';
    line-height: 40px;
    letter-spacing: -0.03em;
    text-align: left;
`