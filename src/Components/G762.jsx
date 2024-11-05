import React from 'react'
import styled from 'styled-components';
import BellIcon from "../assets/Bell.svg"
import ProfileIcon from "../assets/Btth.jpg"

function G762() {
  return (
    <Container>
      <Bell>
        <img src={BellIcon} />
      </Bell>
      <Ellipse>
        <img src={ProfileIcon}/>
      </Ellipse>
    </Container>
  )
}

export default G762

const Container = styled.div`
  position: absolute;
  /* border: 1px solid #A4E6FF; */
  width: 140px;
  height: 63px;
  top: 58px;
  left: 1716px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Ellipse=styled.div`
  border-radius: 50%;
  background-color: #D9D9D9;
  height: 63px;
  width: 63px;
  img{
    width: 100%;
    border-radius:50%;
  }
`

const Bell=styled.div`
  border-radius: 6px;
  background-color: #E7F8FF;
  height: 49.6px;
  width: 52.4px;
  display: flex;
  place-content: center;
  place-items: center;
  img{
    width: 22.4px;
    height: 25.6px;
  }
`