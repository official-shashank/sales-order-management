import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import RequireAuth from './utils/requireAuth';

import Loader from './components/Loader';

const Header = lazy(() => import('./components/Header'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const SalesOrder = lazy(() => import('./pages/SalesOrder'));
const SignUp = lazy(() => import('./pages/SignUp'));
const Login = lazy(() => import('./pages/Login'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/salesorder" element={<SalesOrder />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
