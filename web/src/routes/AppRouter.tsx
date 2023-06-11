import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";

import '../styles/Theme.style.scss';

const AppRouter: FC = () => {
  return (
    <section className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
      </Router>
    </section>
  );
};

export default AppRouter;