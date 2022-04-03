import React,{Component} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';

class App extends Component {
  render(){
    return (
      <div className="App">
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              {/* Routes below are only accessible with valid login */}
              <Route path="home" element={<Home />} />
            </Routes>
          </BrowserRouter>

      </div>
    );
  }
}

export default App;
