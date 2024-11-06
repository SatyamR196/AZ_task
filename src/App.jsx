import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import styled from 'styled-components'
import Rec88 from './Components/Rec88';
import Sidebar from './Components/Sidebar';
import G762 from './Components/G762';
import Switch from './Micro_components/Switch';

const darkTheme={
  dark : true,
  bg : "linear-gradient(180deg, #23094b 0%, #103673 90%)",
  bgR88 : "#1c073c",
  color : "white",
  themeColor : "#172B4D",
  clockColor : "#f5f5f5",
  bellBg: "#4eccfa",
  hover : "#2abdf3",
  colorG766 : "linear-gradient(180deg, #488cff 0%, rgb(238 244 255 / 0%) 100%)",
  IconBg: "#4eccfa",
  colorActive: "#00b5ff",
  progress: "#00b5ff",
  BorderC : "linear-gradient(90deg, rgba(143, 223, 255, 0) 0%, #8FDFFF 49.99%, rgba(143, 223, 255, 0) 100%)"
 };
 const lightTheme={
   dark : false,
   bg : "linear-gradient(180deg, #FFFFFF 0%, #F1FBFF 100%)",
   bgR88 : "white",
   color : "#172B4D",
   themeColor : "white",
   clockColor : "#608AD2",
   bellBg: "#E7F8FF",
   hover : "#e2f3fa",
   colorG766 : "linear-gradient(180deg, #EFF5FF 0%, rgba(239, 245, 255, 0) 100%)",
   IconBg: "white",
   colorActive: "white",
   progress: "#172b4dd9",
   BorderC : "linear-gradient(90deg, rgba(23, 43, 77, 0) 0%, #172B4D 49.54%, rgba(5, 68, 94, 0) 100%)"
 }

function App() {

  const [theme,setTheme] = useState("light");
  let isDark = theme === "dark";
  const toggleTheme = ()=>{
     setTheme(isDark ? "light" : "dark");
     console.log(isDark,theme);
  }

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Wrapper>
        <Switch toggleTheme={toggleTheme} isDarkTheme={isDark}/>
        <G762/>
        <Rec88/>
        <Sidebar/>
      </Wrapper>
    </ThemeProvider>
  )
}

export default App

//----------------------styled components-------------
const Wrapper = styled.div`
    height: 1558px;
    width: 1920px;
    /* border: 5px solid skyblue; */
    background: ${(props)=> props.theme.bg};
    color : ${props=>props.theme.color};
    position: relative;
    overflow: hidden;
`;
