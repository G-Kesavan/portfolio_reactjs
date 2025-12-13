import React from 'react';
import './App.css';
import Main from './Components/Main/Main.jsx';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import { useState,useRef } from 'react';
import Background from './Background/Background3D.jsx';

function App() {
  const topRef = useRef(null);
  const scrollTop = () => {
    topRef.current.scrollIntoView({behavior:'smooth'})
  }
  const [heading, setHeading] = useState('My portfolio')
  const setPageName =(name)=>{
    setHeading(name.charAt(0).toUpperCase()+name.slice(1))
    scrollTop()
  }
  return (
    <div className="app">
      {/* <Background/> */}
      <Header
        topRef={topRef}
        heading={heading}
      />
      <Main
        scrollTop={scrollTop}
        setPageName={setPageName}
      />
      <Footer
        setPageName={setPageName}
      />
    </div>
  );
}

export default App;
