import React,{Component} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';
import Requests from './Components/Request/Requests';
import Profile from './Components/Profile/Profile';
import NewRequest from './Components/Request/NewRequest';



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
              <Route path="/Home" element={<Home />} />
              {/* route for each link on navbar */}
              <Route path="/Requests" element={<Requests />} />
              <Route path="Profile" element={<Profile />} />
              <Route path="NewRequest" element={<NewRequest />} />
            </Routes>
          </BrowserRouter>

      </div>
    );
  }
}

export default App;
