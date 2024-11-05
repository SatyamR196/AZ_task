import React from 'react'
import styled from 'styled-components'
import SidebarItem from '../Micro_components/SidebarItem'
import MenuIcon from "../assets/Menu.svg"
import DashB from "../assets/DashB.svg"
import LightBulb from "../assets/LightBulbOutline.svg"
import Forums from "../assets/UserGroupOutline.svg"
import UpSkill from "../assets/ClipboardOutline.svg"
import Contest from "../assets/ChartBarOutline.svg"
import LeaderB from "../assets/StarOutline.svg"
import AZ_Logo from "../assets/AZ_Logo.svg"

function Sidebar() {
  return (
    <Container>
      <Headiv>
      <SidebarItem text="AlgoZenith" logo={MenuIcon}  weight="900"/>
      </Headiv>
      <SidebarItem text="Dashboard" logo={DashB}  weight="400"/>
      <SidebarItem text="Dashboard" logo={LightBulb}  weight="400"/>
      <SidebarItem text="Dashboard" logo={Forums}  weight="400"/>
      <SidebarItem text="Dashboard" logo={UpSkill} bg="#D6F4FF" weight="400"/>
      <SidebarItem text="Dashboard" logo={Contest}  weight="400"/>
      <SidebarItem text="Dashboard" logo={LeaderB}  weight="400"/>
    </Container>
  )
}

export default Sidebar

const Container = styled.div`
  position: absolute;
  border: 1px solid #A4E6FF;
  width: 267px;
  height: 566px;
  top: 64px;
  left: 78px;
  display: flex;
  flex-direction: column;
  gap:17px;
`
const Headiv= styled.div`
  margin-bottom: 13px;
`