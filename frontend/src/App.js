import React from 'react';
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
import AllRequests from './Components/Request/AllRequests';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
          <Navbar />

          <Routes>
          {/* Routes if user not Logged In */}
            <Route index element={<Login />} />
            <Route path="/" element={<Login />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />

          {/* Routes below are only accessible with valid login */}
            <Route path="/Home" element={<Home />}/>
            <Route path="/Requests" element={<Requests />}/>
            <Route path="/Profile" element={<Profile />} />
            <Route path="/NewRequest" element={<NewRequest />} />

          {/* Employee */}
            <Route path="/Allocations" element={<Allocations />} />
            <Route path="/AllRequests" element={<AllRequests />} />

          {/* Authoriser */}
            <Route path="/Authorisations" element={<Authorisations />} />
            <Route path="/Users" element={<Users />} />

          </Routes>

          <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
