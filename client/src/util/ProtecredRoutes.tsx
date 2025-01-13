import { Outlet, Navigate  } from 'react-router-dom';

const ProtectedRoutes = () => {
    const user = localStorage.getItem("authid");
    return user ? <Outlet /> : <Navigate to="/login"/>
}
export default ProtectedRoutes;