import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import UserProfile from './pages/user/Profile';
import RegistrationPage from './pages/login/RegistrationPage';
import ForgotPasswordPage from './pages/login/ForgotPasswordPage';
import Home from './pages/Home';
import './stylesheets/App.css';
import ResetPasswordPage from './pages/login/ResetPasswordPage';
// import { fakeAuthProvider } from "./auth";
const App: React.FC = () => {
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/password-reset/:token" element={<ResetPasswordPage/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/profile" element={<UserProfile />} />
          <Route path="*" element={<LoginPage/>} />
        </Routes>
      </Router>
  );
};
export default App;