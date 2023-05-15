import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/home/home';
import About from '../pages/about/about';
import Lodging from '../pages/lodging/lodging';
import Error from '../pages/404/404';
import Header from "./header/header";
import Footer from './footer/footer';

function Root() {
    return ( 
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
    );
};

export default Root;