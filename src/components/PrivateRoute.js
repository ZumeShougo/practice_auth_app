import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/authContext';

const PrivateRoute = ({ children }) => {
  const { user } = useAuthContext();
  if (!user) {
    return <Navigate to="/login" />
  }
  return children;
};

export default PrivateRoute;