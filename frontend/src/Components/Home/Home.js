import React, { useState, useEffect  } from "react";
import jwt_decode from "jwt-decode";
import './home.css';

import Dashboard from './Dashboard';

const Home = (props) =>{

  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [user, setUser] = useState({});

   // GET LOGIN STATUS OF USER
   useEffect(() => {
    onLoad();
  }, [ isAuthenticated]);
    async function onLoad() {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        const exp = jwt_decode(user.token);
        const date = new Date();
        if (date.getTime() >= exp ){
          userHasAuthenticated(false);
        }else {
          userHasAuthenticated(true);
        }
        // GET USER
        await setUser(user);
      }
      catch(e) {
        userHasAuthenticated(false);
      }
  
    return (
      <div className="Home">
          <Dashboard user={user}/>
          <div></div>
      </div>
    );
 }
}

export default Home;
