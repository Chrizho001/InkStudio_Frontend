import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import EmailConfirmation from "./pages/EmailConfirmation"
import ResetPassword from './pages/ResetPassword'
import ResetPasswordConfirm from "./pages/ResetPasswordConfirm";
import { ToastContainer} from 'react-toastify';
import ProtectedRoute from "./components/ProtectedRoute";


const App = () => {
  
  return (
    <main>
      <Routes>
        <Route path="/auth">
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="activate/:uid/:token" element={<EmailConfirmation />} />
          <Route path="reset-password-confirm" element={<ResetPasswordConfirm />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          {/* Add more protected routes here */}
        </Route>
      </Routes>
      <ToastContainer />
    </main>
  );
};

export default App;
