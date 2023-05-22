import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import Alert from './Components/Alert';
import React, { useState } from 'react';
// import { createRoot } from "react-dom/client";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const removeBodyClasses = () =>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
  }

  const toggleMode = (cls) => {
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls)

    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success")
      document.title = 'Textutils-Dark Mode' //to change the title dynamically
      // setInterval(() => {
      //   document.title = 'Kyarey nai vaaparvanu'
      // }, 2000);
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      document.title = 'Textutils-Light Mode'
    }
  }
  
  return (
    <>
      {/* <router> */}
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Switch>
            <Route path="/about"> */}
              <About mode={mode} />
            {/* </Route>
            <Route path="/"> */}
              <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
            {/* </Route>
          </Switch> */}
          {/* <About /> */}
        </div>
      {/* </router> */}
    </>
  );
}

export default App;
