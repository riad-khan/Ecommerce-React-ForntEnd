import React from 'react'
import { productFailed } from '../../redux/actionCreators/productActionCreator'
import stars from '../../assets/images/star.png';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { API } from '../../config/config';
import { Component } from 'react';

class ProductModal extends Component {
    state = {
        product: this.props.product
    }

    closeModal = () => {
        this.props.handleClose(true)
    }
    render() {
        const options = {
            autoplay: true,
            autoplayTimeout: 3000,
            loop: true,
            items: 1,
            center: true,
            nav: true,
            dots: true,

        }



        console.log(this.props.index);


        const product = this.props.product[this.props.index];


        return (
            <div>
                <div className="modal bottom wide-xl fade" id="ModalQuick" tabIndex="-1" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content border-0">
                            <button type="button" onClick={this.closeModal} className="close" data-dismiss="modal" aria-label="Close"><i className="ti-close text-grey-500"></i></button>
                            <div className="modal-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 pt-lg--7 pt-5 bg-greylight">
                                        <OwlCarousel loop margin={10} nav {...options}>

                                            <div className="col-lg-12 item" style={{ width: '100%' }}>
                                                <img style={{ width: '100%' }} src={`${API}/product/photo/${product._id}`} />

                                            </div>



                                        </OwlCarousel>
                                    </div>
                                    <div className="col-lg-6 col-md-12 pl-5 pb-5">
                                        <h2 className="fw-700 text-grey-900 display1-size lh-3 mt-5 porduct-title"> {product.name}</h2>
                                        <div className="star d-block w-100 text-left">
                                            <div className="star d-block w-100 text-left">
                                                <img src={stars} alt="star" className="w15 float-left" />
                                                <img src={stars} alt="star" className="w15 float-left" />
                                                <img src={stars} alt="star" className="w15 float-left" />
                                                <img src={stars} alt="star" className="w15 float-left" />
                                                {/* <img src="images/star-disable.png" alt="star" className="w15 float-left mr-2" /> */}
                                            </div>
                                        </div>
                                        <p className="review-link font-xsss fw-400 text-grey-500 lh-3"> 2 customer review</p>
                                        <div className="clearfix"></div>
                                        <p className="font-xsss fw-400 text-grey-500 lh-30 pr-5 mt-3 mr-5">{product.description}</p>

                                        <h6 className="display3-size fw-700 text-current ls-2 mb-5"><span className="font-xl">Tk</span>{product.price} </h6>
                                        <form action="#" className="form--action mt-4 mb-3">
                                            <div className="product-action flex-row align-items-center">
                                                <div className="quantity mr-3">
                                                    <input type="number" className="quantity-input" name="qty" id="qty" min="1" value='1' />
                                                    <div className="dec qtybutton">-</div>
                                                    <div className="inc qtybutton">+</div>
                                                </div>

                                                <a href="#" className="add-to-cart bg-dark text-white fw-600 text-uppercase font-xsss float-left border-dark border rounded-lg border-size-md d-inline-block mt-0 p-3 text-center ls-3">Add to cart</a>
                                                <a href="#" className="btn-round-xl alert-dark text-white d-inline-block mt-0 ml-4 float-left"><i className="ti-heart font-sm"></i></a>
                                            </div>
                                        </form>
                                        <div className="clearfix"></div>
                                        <ul className="product-feature-list mt-5">
                                    <li className="w-50 lh-32 font-xsss text-grey-500 fw-500 float-left"><b className="text-grey-900"> Category : </b>{product.category.name}</li>
                                  
                              
                                  
                                   
                                   
                                </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductModal