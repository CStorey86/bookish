import React , {useState, useEffect} from 'react';
import {Routes, Route } from "react-router-dom";
import RequireAuth from './Components/RequireAuth';
import './App.css';

// ROUTER LINK IMPORTS
import Home from './Components/Home/Home';
import Layout from './Components/Layout';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Requests from './Components/Request/Requests';
import Profile from './Components/Profile/Profile';
import NewRequest from './Components/Request/NewRequests/NewRequest';
import Allocations from './Components/Request/Allocations/Allocations';
import Authorisations from './Components/Request/Authorisations/Authorisations';
import Users from './Components/Users/Users';
import AllRequests from './Components/Request/AllRequests';

const ROLES = {
  "User": "Standard User",
  "Employee": "Employee",
  "Authoriser": "Authoriser"
}

//<Route element={<RequireAuth allowedRoles={ROLES.User}/>}>
// <Route element={<RequireAuth allowedRoles={[ROLES.User, ROLES.Employee, ROLES.Authoriser]}/>}>

function App() {
  return ( 
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* PUBLIC ROUTES */}
          <Route index element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="register" element={<Register />} />

        <Route element={<RequireAuth />}>
          {/* ALL USERS */}
          {/* <Route element={<RequireAuth allowedRoles={[ROLES.User, ROLES.Employee, ROLES.Authoriser]}/>}> */}
            <Route path="/Home" element={<Home />}/>
            <Route path="/Requests" element={<Requests />}/>
            <Route path="/Profile" element={<Profile />}/>
          {/* </Route> */}

          {/* STANDARD USER */}
          {/* <Route element={<RequireAuth allowedRoles={ROLES.User}/>}> */}
            <Route path="/NewRequest" element={<NewRequest />}/>
        {/* </Route> */}

        {/* EMPLOYEE */}
        {/* <Route element={<RequireAuth allowedRoles={ROLES.Employee}/>}> */}
          <Route path="/Allocations" element={<Allocations />} />
          <Route path="/AllRequests" element={<AllRequests />} />
        {/* </Route> */}

        {/* AUTHORISER */}
        {/* <Route element={<RequireAuth allowedRoles={ROLES.Authoriser}/>}> */}
          <Route path="/Authorisations" element={<Authorisations />} />
          <Route path="/Users" element={<Users />} />
        
        </Route>

      </Route>
    </Routes>

  );
}

export default App;

         

