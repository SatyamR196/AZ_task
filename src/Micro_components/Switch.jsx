import React, { useState } from "react";
import "./Switch.css";
import SunIcon from "./SunIcon"
import MoonIcon from "./MoonIcon"
import styled from 'styled-components';


function Switch({toggleTheme,isDarkTheme}) {
  const [isToggled, setIsToggled] = useState(isDarkTheme);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <Switchdiv>
        <SunIcon/>
        <label className="toggle-switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className="switch" />
        </label>
        <MoonIcon/>
    </Switchdiv>
  );
}
export default Switch;

const Switchdiv= styled.div`
  position: absolute;
  top:58px;
  left: 1550px;
  width: 140px;
  height: 63px;
  display: flex;
  /* background-color: bisque; */
  place-content: center;
  place-items: center;

`