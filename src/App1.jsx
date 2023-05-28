import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home1/Home1';
import About from './pages/About1/About1';
import Lodging from './pages/Lodging1/Lodging1';
import Error from './pages/404/404';
import Header from "./components/Header1/Header1";
import Footer from './components/Footer1/Footer1';

function App() {
    return ( 
    <BrowserRouter>
            <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/logement/:id" element={<Lodging />} />
            <Route path="*" element={<Error />} />
        </Routes>
            <Footer />
    </BrowserRouter> 
    );
};

export default App;