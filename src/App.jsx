import { useState } from 'react'
import './App.css'
import Project from './dashboards/ProjectDashboard'
import Login from './Login'

function App() {
  const [loggedIn, setLoggedIn]=useState(false);
  

  function handleLogin(e,name,password){
    e.preventDefault();
    console.log({"name":name, "password":password})
    if (name=="Walter" && password=="12345678"){
      setLoggedIn(true)
      return alert("Logged In Successfully");
      
    }else{
      return alert("Wrong credentials entered");
    }
    

  }
  

  return (
    <>
    <div className='container'>

      <Login onLogin={handleLogin} />
  { loggedIn && <Project />}
    </div>
    </>
  )
}

export default App
