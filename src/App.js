import React from 'react';
import { BrowserRouter,Route,Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import FAQPage from './pages/FAQPage';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
        <Route path='/faqpage' element={<FAQPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
