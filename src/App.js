// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
// import Logo form './Logo/imagesin.jpeg';

function App() {
  const [login,setlogin]=useState(true);

  const loginSwitch=()=>{
    setlogin(!login)
  }
  return (
    <div className="container">
      <div className="user">
         <img src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png" alt=""/>
        <input hidden={login} type="text" name="" placeholder='mobile number or gmail' id=""/>
        <input hidden={login} type="text" name="" placeholder='full name' id=""/>
        <input type="email" name="" placeholder='phone number,username or email' id=""/>
        <input type="password" name="" placeholder='password' id=""/>
         <button>{login?"signin":"sign up"}</button>

        <div id="footer">
{login?"dont have account":"have an account"}
<span onClick={loginSwitch} >{login?"sign up":"log in"}</span>

        </div>


          


           


      </div>




      
    </div>
  );
}

export default App;
