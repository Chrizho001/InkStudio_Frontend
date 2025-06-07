import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import EmailConfirmation from "./pages/EmailConfirmation"
import ResetPassword from './pages/ResetPassword'
import ResetPasswordConfirm from "./pages/ResetPasswordConfirm";


const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/auth">
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="activate-account" element={<EmailConfirmation />} />
          <Route path="reset-password-confirm" element={<ResetPasswordConfirm />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>
        <Route path="/" element={<Home />} /> 
      </Routes>
    </main>
  );
};

export default App;
