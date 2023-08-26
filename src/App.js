// import logo from './logo.svg';
import './App.css';
// import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, {useState} from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert,setAlert] = useState(null)

  const showAlert = (msg,type)=>{
    setAlert({
      msg:msg,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const tooglemode = () =>{
    if(mode === 'light')
    {
      setMode('dark')
      document.body.style.background='#122f4f'
      showAlert('Dark mode is enabled','success')
      document.title="HackerU --Dark"
    }
    else{
      setMode('light')
      document.body.style.background='white'
      showAlert('Light mode is enabled','success')
      document.title="HackerU --Light"
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="HackerU" mode={mode} tooglemode={tooglemode}/>
      <Alert alert={alert}/>
      <div className="container">
      <Textform showAlert={showAlert} heading="enter your text below" mode={mode}/>
      {/* <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/">
        
        </Route>
      </Switch> */}
      </div>
      {/* </Router> */}
    </>
  
  );
}

export default App;
