import { Outlet, Navigate  } from 'react-router-dom';

const ProtectedRoutesAUth = () => {
    const user = localStorage.getItem("authid");
    return !user ? <Outlet /> : <Navigate to={"/"}/>
}
export default ProtectedRoutesAUth;