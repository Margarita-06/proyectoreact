import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import UsersPages from './pages/UsersPages/UserPages'
import ResetPasswordPage from "./pages/ResetPasswordPage/ResetPasswordPage";


import NotFoundPage from './pages/Components/NotFound';
import ProtectedRoute from './pages/Components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Forgot" element={<ForgotPasswordPage />} />
        <Route path="/dashboard" element={<ProtectedRoute> <DashboardPage /> </ProtectedRoute>} />
        <Route path="/users" element={<ProtectedRoute> <UsersPages /> </ProtectedRoute>} />
        <Route path="/ResetPassword" element={ <ResetPasswordPage />} />

        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
