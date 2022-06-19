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

  //STANDARD USER
    id: "62860fe823c9c0ba976b9ba7",
    firstName: "Claire",
    lastName: "Storey",
    isAdmin: false,
    isEmployee: false,

  //EMPLOYEE
    // id: "62860fe823c9c0ba976b9ba6",
    // firstName: "Basil",
    // lastName: "Bush",
    // isAdmin: false,
    // isEmployee: true,

  //AUTHORISOR
    // id: "62860fe823c9c0ba976b9ba5",
    // firstName: "Angela",
    // lastName: "Jones",
    // isAdmin: true,
    // isEmployee: false,

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
              <Route path="/Home" element={<Home user={thisUser}/>}/>
              <Route path="/Requests" element={<Requests user={thisUser}/>}/>
              <Route path="/Profile" element={<Profile user={thisUser}/>} />
              <Route path="/NewRequest" element={<NewRequest user={thisUser}/>} />

              {/* Employee */}
              <Route path="/Allocations" element={<Allocations user={thisUser}/>} />
              

              {/* Authoriser */}
              <Route path="/Authorisations" element={<Authorisations/>} user={thisUser}/> 
              <Route path="/Users" element={<Users />} user={thisUser}/>


            </Routes>
          </BrowserRouter>

      </div>
    );
  }
}

export default App;
