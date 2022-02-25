
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DeleteCart, updateCart } from '../../api/apiCart';
import { API } from '../../config/config';
import { FetchCart } from '../../redux/actionCreators/cartActionCreators';
import { success, danger } from '../../helpers/Notification'
import { isAuthenticated, userInfo } from '../../helpers/auth';
import {Link} from 'react-router-dom'
export class Cart extends Component {
    state = {
        index: 0,
        deliveryCharge: null
    }

    componentDidMount = () => {
        const token = JSON.parse(localStorage.getItem('token'));
        this.props.fetchCart(token)


    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.cartItems[this.state.index] === this.props.cartItems[this.state.index]) {
            const token = JSON.parse(localStorage.getItem('token'));
            this.props.fetchCart(token)
        }
    }
    incrementQuantity = (item, i) => {
        this.setState({
            index: i
        })


        const token = JSON.parse(localStorage.getItem('token'));
        if (item.count === 5) return
        const cartItem = {
            ...item,
            count: item.count + 1
        }
        updateCart(token, cartItem)
            .then(response => {
                success(response.data.message)
            })
            .catch(error => {
                danger(error.response.data)
            })
    }
    DecrementQuantity = (item, i) => {
        this.setState({
            index: i
        })
        const token = JSON.parse(localStorage.getItem('token'));
        if (item.count === 1) return
        const cartItem = {
            ...item,
            count: item.count - 1
        }
        updateCart(token, cartItem)
            .then(response => {
                success(response.data.message)
            })
            .catch(error => {
                danger(error.response.data)
            })
    }
    DeleteCartItem = (item, i) => {
       
        const token = JSON.parse(localStorage.getItem('token'));
        const id = item._id

        DeleteCart(token, id)
            .then(response => {
                success(response.data)
                this.setState({
                    index: i
                })

            })
            .catch(error => {
                danger(error.response.data)
            })


    }
    // handleDelivery =(e) =>{
    //        if(e.target.value === 'dhaka'){
    //            this.setState({
    //             deliveryCharge : 60
    //            })
    //        }
    //        if(e.target.value === 'outside'){
    //         this.setState({
    //          deliveryCharge : 120
    //         })
    //     }
    // }
    render() {
       
        const total = (this.props.cartItems.reduce((total, currentItem) => total = total + currentItem.count * currentItem.price, 0))
        const cartItems = this.props.cartItems.map((item, i) => {
            if (item.length === 0) {
                return (
                    <h2>No products in your cart</h2>
                )
            } else {
                return (
                    <tr>
                        <td className="product-thumbnail text-left">
                            <img src={`${API}/product/photo/${item.product._id}`} alt="Product Thumnail" className="w75 rounded-lg" />
                        </td>
                        <td className="product-headline text-left wide-column">
                            <h3>
                                <a href="#" className="text-grey-900 fw-600">{item.product.name}</a>
                            </h3>
                        </td>
                        <td className="product-p">
                            <span className="product-price-wrapper">
                                <span className="money text-grey-500 fw-500">{item.price} TK</span>
                            </span>
                        </td>
                        <td className="product-quantity">
                            <div className="quantity">
                                <input type="number" className="quantity-input" value={item.count} name="qty" id="qty-1" />
                                <a onClick={this.DecrementQuantity.bind(this, item, i)} className="dec qtybutton">-</a><a onClick={this.incrementQuantity.bind(this, item, i)} className="inc qtybutton">+</a></div>
                        </td>
                        <td className="product-total-price">
                            <span className="product-price-wrapper">
                                <span className="money fmont"><strong>{item.count * item.price} TK</strong></span>
                            </span>
                        </td>
                        <td className="product-remove text-right"><a onClick={this.DeleteCartItem.bind(this, item, i)} ><i className="ti-trash font-xs text-grey-500"></i></a></td>
                    </tr>
                )
            }
        })
        return (
            <div>
                <div className="page-nav bg-lightblue">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center"><h1 className="text-grey-800 fw-700 mont-font display4-size">Cart</h1></div>
                        </div>
                    </div>
                </div>

                <div className="cart-wrapper pt-7 pb-7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mb-3">
                                <div className="table-content table-responsive">
                                    <table className="table text-center">
                                        <thead className="bg-greyblue rounded-lg">
                                            <tr>
                                                <th className="border-0 p-4">&nbsp;</th>
                                                <th className="border-0 p-4 text-left">Product</th>
                                                <th className="border-0 p-4">Price</th>
                                                <th className="border-0 p-4">Quantity</th>
                                                <th className="border-0 p-4">Total</th>
                                                <th className="border-0 p-4">&nbsp;</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {isAuthenticated() ? cartItems : (<h4 class="mt-5 mont-font fw-500 font-xxl mb-5">Please Login First</h4>)}


                                        </tbody>
                                    </table>
                                </div>
                                <div className="coupon float-left mb-2">
                                    <input type="text" className="input-code form-control h60 p-3" placeholder="Coupon Code.." />
                                    <a href="#" className="bg-dark text-white fw-600 text-uppercase font-xsss border-dark border rounded-lg border-size-md d-inline-block w175 p-3 text-center ls-3">Apply Coupon</a>
                                </div>

                            </div>
                            <div className="col-lg-4">
                                <div className="checkout-payment card border-0 mb-3 bg-greyblue p-5">
                                    <div className="cart-totals">
                                        <h4 className="mont-font fw-500 font-xxl mb-5">Cart totals</h4>
                                        <div className="table-content table-responsive">
                                            <table className="table order-table">
                                                <tbody>
                                                    <tr>
                                                        <td className="fmont pt-2 fw-600">Subtotal</td>
                                                        <td className="fmont pt-2 text-right">{total} TK</td>
                                                    </tr>
                                                    <tr>
                                                        
                                                    </tr>
                                                    <tr className="order-total">
                                                        <td className="fmont pt-2 fw-600">Total</td>
                                                        <td className="fmont pt-2 text-right">
                                                            <span className="product-price-wrapper">
                                                                <span className="money fmont">{total + this.state.deliveryCharge} TK</span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                </div>
                               {isAuthenticated() ? ( <Link to='/checkout' className="bg-dark float-right text-white fw-600 text-uppercase font-xsss border-dark border rounded-lg border-size-md d-inline-block w-100 p-3 text-center ls-3">Proceed To Checkout</Link>): (<Link to='/login'>Please Login to Checkout</Link>)}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cartItems: state.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCart: (token) => dispatch(FetchCart(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)