import React from 'react'
import styled from 'styled-components';
function Item327({text="chapter 1"}) {
  return (
    <div>
    <Item>
        <Content>{text}</Content>
    </Item>
        <BBorder></BBorder>
    </div>
  )
}

export default Item327

const Item = styled.div`
  /* background-color: #ef8597; */
  width: 420px;
  max-height: 67px;
  box-sizing: border-box;
  padding: 25px 16px 25px 16px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
`
const BBorder = styled.div`
    height: 1px;
    width: 100%;
    background-image: linear-gradient(90deg, rgba(143, 223, 255, 0) 0%, #8FDFFF 49.99%, rgba(143, 223, 255, 0) 100%);
`
const Content = styled.div`
    font-family: DM Sans;
    font-size: 24px;
    font-weight: 400;
    /* line-height: 44px; */
    letter-spacing: -0.03em;
    text-align: justified;

`