import React from 'react'
import styled from 'styled-components';
import Part from '../Micro_components/Part';
function G326() {
  return (
    <Div326>
      <Part progress={45} Npart={1} Open={true}/>
      <Part progress={20} Npart={2}/>
      <Part progress={0} Npart={3}/>  
    </Div326>
  )
}

export default G326
const Div326 = styled.div`
  position: absolute;
  width: 1002px;
  height: 1092px;
  top: 202px;
  left: 414px;
  /* background-color: #dcfadf; */
  display: flex;
  flex-direction: column;
  gap:16px;

`