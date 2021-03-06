import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Provider} from 'react-redux';
import {store} from './redux/store'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
//swiper js
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css';


//noty Js
import Noty from 'noty';  
import "../node_modules/noty/lib/noty.css";  
import "../node_modules/noty/lib/themes/mint.css";  

ReactDOM.render(
 
    <Provider store={store}>
        <App />
    </Provider>,
  
  document.getElementById('root')
);