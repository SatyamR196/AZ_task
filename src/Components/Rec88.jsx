import React from 'react'
import styled from 'styled-components';
import F326 from './F326';
import G766 from './G766';
import G327 from './G327';
import G326 from './G326';

function Rec88() {
  return (
    <Container>
      <F326/>
      <G766/>
      <Line></Line>
      <G327/>
      <G326/>
    </Container>
  )
}

export default Rec88

const Container = styled.div`
  position: absolute;
  width: 1456px;
  height: 1527px;
  top: 161px;
  left: 400px;
  border-radius: 16px;
  border: 1px solid #A4E6FF;
  background-color: ${props=> props.theme.bgR88};
  overflow: scroll;
  scrollbar-width: none; /* Hide scrollbar in Firefox */
  &::-webkit-scrollbar {
    display: none;
  }

`

const Line =styled.div`
  position: absolute;
  top:162px;
  left:40px;
  height: 1px;
  width: 1376px;
  background-color: #A4E6FF;
  /* border-bottom: 5px solid; */

`
