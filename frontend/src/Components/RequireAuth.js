import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        auth?.user
            ? <Navigate to="/Home"  />
            
            : <Navigate to="/Login"  />
    );
}

export default RequireAuth;

{/* <Outlet /> */}