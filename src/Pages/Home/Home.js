import React from 'react';
import Banner from './Banner/Banner';
import './Home.css';
import Services from './Services/Services';
import Slider from './Slider/Slider';
import Story from './Story/Story';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Banner></Banner>
            <Services></Services>
            <Story></Story>
        </div>
    );
};

export default Home;