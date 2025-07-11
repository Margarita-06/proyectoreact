import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';

function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element ={<LoginPage/>}/>
    <Route path="/Register" element ={<RegisterPage/>}/>
    <Route path="/Forgot" element ={<ForgotPasswordPage/>}/>
    <Route path="/Dashboard" element ={<DashboardPage/>}/>
  
  </Routes>
      </BrowserRouter>

  );
}

export default App;
