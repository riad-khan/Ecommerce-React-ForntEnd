import React, { Component } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import { FreeMode, Pagination, Autoplay, Navigation } from "swiper";

import '../../assets/css/swiper-slider.css'
import { connect } from 'react-redux';
import { fetchProducts } from '../../redux/actionCreators/productActionCreator';
import { API } from '../../config/config';
import { Link } from 'react-router-dom';
const mapStateToProps = state => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export class Products extends Component {
    componentDidMount = () => {
        this.props.fetchProducts();
    }
    render() {
        const ProductSlide = this.props.products.map((product, i) => {
            return (

                <SwiperSlide>



                    <div className="container">
                        <div className="row">

                            <div className="col-lg-12">

                                <Link to={`/product-details/${product._id}`}>
                                    <div>
                                        <div className="col-md-12  border rounded-lg" >
                                            <h4 className="fw-500 font-xsss text-grey-500 float-left mt-1">{product.category.name}</h4>
                                            {/* <a href="#" className="float-right"><i className="ti-heart font-xss text-grey-500"></i></a>
                                            <a href="#" className="float-right mr-3" data-toggle="modal" data-target="#ModalQuick"><i className="ti-eye font-xs text-grey-500"></i></a> */}
                                            <div className="clearfix"></div>
                                            <img src={`${API}/product/photo/${product._id}`} style={{ height: '170px' }} alt="product-image" />
                                            <h2 className="text-grey-800 fw-500 font-xsss lh-2">{product.name}</h2>
                                            <h6 className="font-xsss fw-500 text-grey-500 ls-2">{product.price}</h6>
                                        </div>
                                    </div>
                                </Link>









                            </div>
                        </div>
                    </div>



                </SwiperSlide>



            )
        })
        return (
            <div className="product-wrapper pt-7 pb-7">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12"><h2 className="text-grey-900 fw-500 font-xss border-bottom pb-3 mb-4 d-block">Products You Might Like</h2></div>
                        <div className="col-lg-12">

                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
                                freeMode={true}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                  }}
                               
                                modules={[FreeMode, Pagination,Navigation,Autoplay]}
                                className="mySwiper"
                            >
                                {ProductSlide}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
