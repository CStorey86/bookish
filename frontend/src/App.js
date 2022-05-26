import React,{Component} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';
import Requests from './Components/Request/Requests';
import Profile from './Components/Profile/Profile';
import NewRequest from './Components/Request/NewRequests/NewRequest';
import Allocations from './Components/Request/Allocations/Allocations';
import Authorisations from './Components/Request/Authorisations/Authorisations';
import Users from './Components/Users/Users';


//DEV PROCESS - REMOVE AFTER LOGIN CONFIRMED
let thisUser = {
  userID: "62860fe823c9c0ba976b9ba7"
}

class App extends Component {
  render(){
    return (
      <div className="App">
          <BrowserRouter>
            <Routes>
              <Route index element={<Login />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Register" element={<Register />} />

              {/* Routes below are only accessible with valid login */}
              <Route path="/Home" element={<Home />} userID={thisUser.userID}/>
              <Route path="/Requests" element={<Requests />} userID={thisUser.userID}/>
              <Route path="Profile" element={<Profile />} userID={thisUser.userID}/>
              <Route path="NewRequest" element={<NewRequest />} userID={thisUser.userID}/>
              

              {/* Employee */}
              <Route path="Allocations" element={<Allocations />} userID={thisUser.userID}/>
              

              {/* Authoriser */}
              <Route path="Authorisations" element={<Authorisations userID={thisUser.userID}/>} /> 
              <Route path="Users" element={<Users />} />


            </Routes>
          </BrowserRouter>

      </div>
    );
  }
}

export default App;
