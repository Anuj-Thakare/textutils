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
    <div>
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

      
    </div>
  );
}
export default App;
