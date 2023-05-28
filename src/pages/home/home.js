import React from 'react';
import Banner from "../../components/Banner/Banner";
import image from '../../assets/imgbannerhome.png'
import LodgingList from "../../components/LodgingList/LodgingList";

function Home() {
    return (
    <main>
        <section>
            <Banner 
            title={'Chez vous, partout et ailleurs'}
            image={image}
            />
        </section>
        <section>
            <LodgingList />
        </section>
    </main>   
    ); 
};

export default Home;

