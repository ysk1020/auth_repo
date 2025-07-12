import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import WelcomePage from './pages/WelcomePage'
import ForgotPassword from './pages/ForgotPasswordPage'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  )
}

export default App
