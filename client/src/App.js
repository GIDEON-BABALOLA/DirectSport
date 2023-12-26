
import './App.css';
import OtpPage from "./components/Pages/otpPage"
import HomePage from './components/Pages/homePage';
import RegisterPage from './components/Pages/registerPage';
import LoginPage from "./components/Pages/loginPage"
import NewsFeed from './components/Common/newsFeed';
import Loader from './components/Common/loader';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//https://worldvectorlogo.com/
//https://youtu.be/Y3s0_Vy6Uy0?si=F-aTug12b95nbQ-T
function App() {
  return  <BrowserRouter>
 <Routes>
 <Route path="/">
 <Route index element={<HomePage />} />
 <Route path="register" element={<RegisterPage />} />
 <Route path="otp" element={<OtpPage />} />
 <Route path="login" element={<LoginPage />} />
 <Route path="news" element={<NewsFeed/>} />
 <Route path="loader" element={<Loader/>} />


 </Route>
 </Routes>
 </BrowserRouter>

}

export default App;
