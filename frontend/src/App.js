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

// const ROLES = {
//   "User": 2001,
//   "Employee": 1984,
//   "Authoriser": 5150
// }

function App() {
  return ( 
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* PUBLIC ROUTES */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          
          {/* <Route path="linkpage" element={<LinkPage />} />      
          <Route path="unauthorized" element={<Unauthorized />} /> */}

        {/* LOGGED IN USERS ROUTES*/}
        <Route element={<RequireAuth />}>
          {/* STANDARD USER */}
            <Route path="/Home" element={<Home />}/>
            <Route path="/Requests" element={<Requests />}/>
            <Route path="/Profile" element={<Profile />}/>
            <Route path="/NewRequest" element={<NewRequest />}/>

          {/* EMPLOYEE */}
            <Route path="/Allocations" element={<Allocations />} />
            <Route path="/AllRequests" element={<AllRequests />} />

          {/* AUTHORISER */}
            <Route path="/Authorisations" element={<Authorisations />} />
            <Route path="/Users" element={<Users />} />
        </Route>

      </Route>
    </Routes>

  );
}

export default App;

         
  
  
//   <Navbar />

//   <Routes>
//   <Route index element={<Login />} />
//   <Route path="/" element={<Home userID={userID} isAuth={isAuthoriser} isEmp={isEmployee}/>} />

//   <Route path="/Login" element={<Login />} />
//   <Route path="/Register" element={<Register />} />

// {/* Routes below are only accessible with valid login */}


// </Routes>

// <Footer />
