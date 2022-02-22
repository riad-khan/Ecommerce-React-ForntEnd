import React, { Component } from 'react';
import { connect } from 'react-redux';
import { API } from '../../config/config';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import stars from '../../assets/images/star.png'
import { isAuthenticated, userInfo } from '../../helpers/auth'
import { fetchProducts } from '../../redux/actionCreators/productActionCreator';
import axios from 'axios';
import ProductDescription from './ProductDescription';
import { addToCart } from '../../api/apiCart';
import { success, danger } from '../../helpers/Notification'



export class ProductDetails extends Component {
    state = {
        products: null,
        error: null
    }
    componentDidMount() {
        const productId = this.props.match.params.id;
        axios.get(`${API}/product/${productId}`)
            .then(response => {
                this.setState({
                    products: response.data
                })
            })
            .catch(err => {
                this.setState({
                    error: err.response.data
                })
            })
    }
    handleCart = (product) => {
        if (isAuthenticated) {
            const user = userInfo()
            const cartItem = {
                product: product._id,
                price: product.price,
                user: user.id
            }
            const token = JSON.parse(localStorage.getItem('token'))
            addToCart(token, cartItem)
                .then(response => {
                    success(response.data.message)
                })
                .catch(error => {
                    danger(error.response.data)
                })

        }
    }

    render() {
        const productId = this.props.match.params.id;
        if (!this.state.products) {
            return (
                <section>
                    <h2>Product not found!</h2>
                </section>
            )
        }

        const products = this.state.products

        const options = {
            autoplay: true,
            autoplayTimeout: 3000,
            loop: true,
            items: 1,
            center: true,
            nav: true,
            dots: true,

        }
        return (
            <>
                <div className="product-wrapper pt-lg--7 pb-lg--7 pt-5 pb-5 pb-lg--10 bg-greyblue">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 offset-lg-1 mb-4">
                                <OwlCarousel loop margin={10} nav {...options}>

                                    <div className="col-lg-12 item" style={{ width: '100%' }}>
                                        <img style={{ width: '100%' }} src={`${API}/product/photo/${productId}`} />

                                    </div>



                                </OwlCarousel>
                            </div>



                            <div className="col-lg-6  col-md-12 pad-top-lg-200 pad-bottom-lg-100 pad-top-100 pad-bottom-75 pl-md--5">
                                <h4 className="text-danger font-xssss fw-700 ls-2">{products.category.name}</h4>
                                <h2 className="fw-700 text-grey-900 display2-size lh-3 porduct-title">{products.name}  </h2>
                                <div className="star d-block w-100 text-left">
                                    <img src={stars} alt="star" className="w15 float-left" />
                                    <img src={stars} alt="star" className="w15 float-left" />
                                    <img src={stars} alt="star" className="w15 float-left" />
                                    <img src={stars} alt="star" className="w15 float-left" />
                                    {/* <img src="images/star-disable.png" alt="star" className="w15 float-left mr-2" /> */}
                                </div>
                                <p className="review-link font-xsss fw-400 text-grey-500 lh-3"> 2 customer review</p>
                                <div className="clearfix"></div>
                                <p className="font-xsss fw-400 text-grey-500 lh-30 pr-5 mt-3 mr-5">ultrices justo eget, sodales orci. Aliquam egestas libero ac turpis pharetra, in vehicula lacus scelerisque. Vestibulum ut sem laoreet, feugiat tellus at, hendrerit arcu.</p>

                                <h6 className="display2-size fw-700 text-current ls-2 mb-2"><span className="font-xl">TK </span>{products.price} <span className="font-xs text-grey-500" style={{ textDecoration: 'line-through' }}>45000</span></h6>
                                <div className="timer bg-white mt-2 mb-0 w350 rounded-lg"></div>
                                <div className="clearfix"></div>
                                <form action="#" className="form--action mt-4 mb-3">
                                    <div className="product-action flex-row align-items-center">
                                        <div className="quantity mr-3">
                                            <input type="number" className="quantity-input" name="qty" id="qty" value="1" min="1" />
                                            <div className="dec qtybutton">-</div>
                                            <div className="inc qtybutton">+</div>
                                        </div>

                                        <a href="#" onClick={() => this.handleCart(products)} className="add-to-cart bg-dark text-white fw-600 text-uppercase font-xsss float-left border-dark border rounded-lg border-size-md d-inline-block mt-0 p-3 text-center ls-3">Add to cart</a>
                                        <a href="#" className="btn-round-xl alert-dark text-white d-inline-block mt-0 ml-4 float-left"><i className="ti-heart font-sm"></i></a>
                                    </div>
                                </form>
                                <div className="clearfix"></div>
                                <ul className="product-feature-list mt-5">
                                    <li className="w-50 lh-32 font-xsss text-grey-500 fw-500 float-left"><b className="text-grey-900"> Category : </b>{products.category.name}</li>



                                    <li className="w-50 lh-32 font-xsss text-grey-500 fw-500 float-left"><b className="text-grey-900">Tags : </b>Design, Toys</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <ProductDescription details={products.description} />

            </>
        )
    }
}

export default ProductDetails