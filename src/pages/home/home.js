import React from 'react';
import Banner from "../../components/banner/banner";
import Gallery from "../../components/gallery/gallery";

function Home() {
    return (
    <main>
        <section>
            <Banner />
        </section>
        <section>
            <Gallery />
        </section>
    </main>   
    ); 
};

export default Home;

