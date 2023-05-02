import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import Alert from './components/Alert';


function App() {
  const[mode,setMode]=useState("light")
  const[alert,setAlert]=useState(null)

  const showAlert =(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })  
      setTimeout(()=>{
          setAlert(null); 
      },2000);
  }

  const toggleMode =()=>{
    if(mode==="light"){
    setMode("dark")
    document.body.style.backgroundColor='#042743'
    showAlert("Dark mode has been enabled","success")
    document.title='MY TEXT APP - DARK';
    }
    else{
      setMode("light")
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")
      document.title='MY TEXT APP - LIGHT';
    }
  }
  return (
      <>
        {/*<Navbar titel="TextUtils"  AboutText="About TextUtils"/>*/}
        
        <Navbar titel="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
        <TextFrom showAlert={showAlert} heading="Enter The Text To Analyze Below" mode={mode}/>
        {/*<About/>*/}
        </div>
        
    </>
  );
}

export default App;
