import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Lodging from './pages/Lodging/Lodging';
import Error from './pages/404/404';
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';

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