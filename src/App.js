import React from 'react';
import { BrowserRouter,Route,Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Report from './pages/Report';
import FAQPage from './pages/FAQPage';
import Login from './pages/Login';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/report' element={<Report/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
        <Route path='/faqpage' element={<FAQPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
