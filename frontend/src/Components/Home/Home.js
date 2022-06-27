import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../Context/AuthProvider";
import './home.css';

const Home = () =>{
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    // const logout = async () => {
    //     // if used in more components, this should be in context 
    //     // axios to /logout endpoint 
    //     setAuth({});
    //     navigate('/linkpage');
    // }

    return (
      <div className="Home">
        <h1>HOME - LOGGED IN USER</h1>
      </div>
    )
}


//   const { setAuth } = useContext(AuthContext);
  
//     return (

//     );
//  }


export default Home;
