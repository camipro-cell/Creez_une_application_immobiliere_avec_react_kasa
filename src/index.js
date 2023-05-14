import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/index.css';
import Home from './pages/home/home';
import About from './pages/about/about';
import Lodging from './pages/lodging/lodging';
import Error from './pages/404/404';
import Header from "./components/header/header";
import Footer from './components/footer/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/logement" element={<Lodging />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            <Footer />
    </BrowserRouter>
  </React.StrictMode>
);



