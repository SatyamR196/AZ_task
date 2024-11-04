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
  bg : "linear-gradient(180deg, #23094b 0%, #103673 90%)",
  color : "white"
 };
 const lightTheme={
   bg : "linear-gradient(180deg, #FFFFFF 0%, #F1FBFF 100%)",
   color : "black"
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
        {/* <button onClick={toggleTheme}>TOggle</button> */}
        <Switch toggleTheme={toggleTheme} isDarkTheme={isDark}/>
        Hello world
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
    border: 5px solid skyblue;
    background: ${(props)=> props.theme.bg};
`;
