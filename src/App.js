import "./App.css";
import {useState } from "react"
import { Route,Routes  } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from './pages/Home'
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import PrivateRoute from './pages/PrivateRoute'
function App() {
   const [isLoggedin,setisLoggedin]=useState(false);
  return (<div className="w-screen h-screen bg-richblack-900 flex flex-col" >
   
              <Navbar  isLoggedin={isLoggedin} setisLoggedin={setisLoggedin}/>
            
              <Routes> 
                 <Route path="/" element={<Home isLoggedin={isLoggedin}/>}/>
                 <Route path="/login" element={<Login  setisLoggedin={setisLoggedin} />}/>
                 <Route path="/signup" element={<Signup setisLoggedin={setisLoggedin} />}/>
                 <Route path="/dashboard" element={
                  <PrivateRoute isLoggedin={isLoggedin}>
                      <Dashboard/>
                  </PrivateRoute>
                
                 }/>

                
              </Routes>
      
        </div>);
}

export default App;
