import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';

// ROUTER LINK IMPORTS
import Home from './Components/Home/Home';
import Navbar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Requests from './Components/Request/Requests';
import Profile from './Components/Profile/Profile';
import NewRequest from './Components/Request/NewRequests/NewRequest';
import Allocations from './Components/Request/Allocations/Allocations';
import Authorisations from './Components/Request/Authorisations/Authorisations';
import Users from './Components/Users/Users';
import AllRequests from './Components/Request/AllRequests/AllRequests';

import {getUserType} from './Components/Utils';

// import RequireAuth from './components/RequireAuth';
// import Layout from './Components/Layout';

export function handleLogout(){
  // REMOVE TOKEN FROM LOCAL STORAGE
  localStorage.removeItem('user');
  // GO TO LOGIN PAGE
  window.location = '/Login';
}

// GET USER FROM STORED LOGIN TOKEN 
function getUser(){
  const user = localStorage.getItem('user');
  let currentUser ={};
  if(user != null)
  {
    currentUser = JSON.parse(user);
  }
  return currentUser;
}

// GET ROLE FROM AUTH TOKEN 
    const userRole = getUserType(getUser());

const ROLES = {
  'User': "Standard User",
  'Employee': "Employee",
  'Authoriser': "Authoriser",
}




function App() {



  return (
    <div className="App">
    
      <BrowserRouter>
      
          <Navbar />

          <Routes>
            {/* <Route path="/" element={<Layout />}> */}

          {/* PUBLIC ROUTES */}
            <Route index element={<Login />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />

            {/* <Route path="unauthorized" element={<Unauthorized />} /> */}


          {/* ALL USER ROUTES */}
            {/* <Route element={<RequireAuth allowedRoles={"[ROLES.User, ROLES.Employee, ROLES.Authoriser,]"} />}>*/}
              <Route path="/Home" element={<Home />}/>
              <Route path="/Requests" element={<Requests />}/>
              <Route path="/Profile" element={<Profile />} />
              {/*</Route> */}

          {/* USER ONLY ROUTES */}
            {/* <Route element={<RequireAuth allowedRoles={"[ROLES.User]"} />}>*/}
                  <Route path="/NewRequest" element={<NewRequest />} />
            {/*</Route> */}
            

          {/* EMPLOYEE ONLY ROUTES */}
            {/* <Route element={<RequireAuth allowedRoles={"[ROLES.Employee]"} />}>*/}
              <Route path="/Allocations" element={<Allocations />} /> 
            {/*</Route> */}

          {/* AUTHORISER ONLY ROUTES */}
            {/* <Route element={<RequireAuth allowedRoles={"[ROLES.Authoriser]"} />}>*/}
              <Route path="/Authorisations" element={<Authorisations />} />
              <Route path="/Users" element={<Users />} />
            {/*</Route> */}

          {/* AUTHORISER AND EMPLOYEE ROUTES */}
            {/* <Route element={<RequireAuth allowedRoles={"[ROLES.Employee, ROLES.Authoriser]"} />}>*/}
              <Route path="/AllRequests" element={<AllRequests />} />
            {/*</Route> */}

          </Routes>

          <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
