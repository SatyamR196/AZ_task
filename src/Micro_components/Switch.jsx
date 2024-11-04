import React, { useState } from "react";
import "./Switch.css";
import SunIcon from "./SunIcon"
import MoonIcon from "./MoonIcon"


function Switch({toggleTheme,isDarkTheme}) {
  const [isToggled, setIsToggled] = useState(isDarkTheme);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <div>
        <SunIcon/>
        <label className="toggle-switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className="switch" />
        </label>
        <MoonIcon/>
    </div>
  );
}
export default Switch;