import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home/home';
import About from './pages/about/about';
import Lodging from './pages/lodging/lodging';
import Error from './pages/404/404';
import Header from "./components/header/header";
import Footer from './components/footer/footer';

function App() {
    return ( 
    <BrowserRouter>
        <header>
            <Header />
        </header>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/logement/:id" element={<Lodging />} />
            <Route path="*" element={<Error />} />
        </Routes>
        <footer>
            <Footer />
        </footer>
    </BrowserRouter> 
    );
};

export default App;