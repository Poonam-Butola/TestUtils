
import './components/App.css';
import './components/index.css';
import Navbar from './components/Navbar.js';
import Textform from './components/Textform.js';
import Alert from './components/alert.js';
// import About from './components/About.js';
import React, {useState} from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState ("light");
  const [modeText, setModetext] = useState("");
  const [alert, setAlert] = useState(null);

  //console.log(alert);



 const toggleMode = () =>{
    //  removeClass();
     // console.log("theme func");
   //   document.body.classList.add('bg-'+cls);

  if (mode === "light") {   
    setMode("dark");
    showModetext("Enable dark mode theme");
    document.body.style.backgroundColor = "#042743";
    showAlert("Dark mode enabled" , "success");
    console.log("dark executed");
    //console.log(document.value);
    
  }
  else  {
    setMode("light");
    showModetext("Enable light mode theme");
    document.body.style.backgroundColor = "#fff";
    showAlert("Light mode enabled", "warning");
    console.log("light executed")
  
  }

}



    const showAlert = (message,type) =>{
    //  console.log("alert triggered");
       setAlert ({
        msg: message,
        type: type
       })
      }

    setTimeout(() =>{
       setAlert(null);}
        ,1500)


  const showModetext = (message) => {
        setModetext (message) ;
       // console.log(message);      
     }


     const removeClass = () =>{
      document.body.classList.remove('bg-primary');
      document.body.classList.remove('bg-warning');
      document.body.classList.remove('bg-success');
      
     }

     const colorPallete = (cls) =>{
      removeClass();
      // console.log("theme func");
       document.body.classList.add('bg-'+cls);
     }
 


  return (
    <>
      
      <Navbar title="TestUtils" home="Home" about="About" navMode={mode} theme = {modeText} toggleMode = {toggleMode} pallete= {colorPallete}  />
      <Alert   alert={alert}/>
      <div className='main_container'>
   
     
    <Textform  heading="Enter the text to analyze below" textmode = {mode} showAlert = {showAlert}/>

      </div>

    </>
  );

}

export default App;
