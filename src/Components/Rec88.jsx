import React from 'react'
import styled from 'styled-components';

function Rec88() {
  return (
    <Container>
      
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
  overflow: hidden;

`
