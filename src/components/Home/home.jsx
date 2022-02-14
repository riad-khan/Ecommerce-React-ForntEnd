import React from 'react';
import Featured from '../layout/Featured.jsx';
import Slider from '../layout/Slider.jsx';
import Banner from './Banner.jsx';
import Products from './Products.jsx';




function Home() {
    return (
        <div>
            <Slider />
            <Featured />
            <Products />
            <Banner />
        </div>
    );
}

export default Home;
