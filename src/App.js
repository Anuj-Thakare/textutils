// import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1800);


  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Rapp - Darkmode';

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      document.title = 'Rapp - Lightmode';
    }
  }

  return (
    <>
       <Router>
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-4">
        <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter the text" mode={mode} />
          </Route>
        </Switch>
           <TextForm showAlert={showAlert} heading="Enter the text" mode={mode} />
     </div>
     </Router>

      
    </>
  );
}
export default App;
// import './App.css';
// import React,{useState} from 'react';
// import Navbar from './component/Navbar';
// import TextForm from './component/TextForm';
// import Alert from './component/Alert';
// import About from './component/About';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";



// function App() {
//   const [mode, setmode] = useState('light');
//   const [alert, setalert] = useState(null);

// const showmealert=(message,type)=>{
// setalert({
//   msg:message,
//   typ:type
// })
// setTimeout(() => {
//   setalert(null);
  
// }, 1000);
   
// }
// const toggleMode=()=>{
//     if(mode === 'light'){
//       setmode('dark');
//       document.body.style.backgroundColor='grey';
//       showmealert("DARK MODE ENABLED","success");
//       document.title= 'TEXTUTILS-DARK MODE';
//     }
//     else{
//       setmode('light');
//       document.body.style.backgroundColor='white';
//       showmealert("LIGHT MODE ENABLED",'success');
//       document.title= 'TEXTUTILS-LIGHT MODE';
//     }
// }


// return (
// <>
// <Router>

// <Navbar TITLE="TEXTUTILS" moded={mode} toggleModed={toggleMode} enablemoded={mode==='light'?'ENABLE DARK MODE':'ENABLE LIGHT MODE'}/>
// <Alert alert={alert}/>

// <div className="container my-3">
  
//   <Switch>
//           <Route exact path="/about">
//             <About moded={mode}/>
//           </Route>
//           <Route exact path="/">
           
//           <TextForm heading="ENTER THE TEXT AS PER YOUR CHOICE" moded={mode} showmealert={showmealert}/>
//           </Route>
//   </Switch>
//   </div>
//   </Router>


// </>
//  ); 
// }
// export default App;