import { useState } from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  const[dark,setdark] = useState("light");
  const enablemode =()=> {
    if(dark === 'light'){
      setdark('dark');
      document.body.style.backgroundColor = "black";
    }
    else{
      setdark('light');
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
      {/* <Navbar></Navbar> */}
      <Navbar title='Converter'  dark={dark} enablemode={enablemode} />
      <div className="container">
      <Textform heading="Enter Your Text Here" dark={dark} enablemode={enablemode}></Textform>
      </div>
    </>
  );
}

export default App;
