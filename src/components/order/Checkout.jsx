import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchProfile } from '../../redux/actionCreators/profileActionCreators';
import { userInfo } from '../../helpers/auth';
import { API } from '../../config/config';
import { Link } from 'react-router-dom';
import { FetchCart } from '../../redux/actionCreators/cartActionCreators';
const mapStateToProps = state => {
    return {
        profile: state.profile,
        cartItems: state.cart
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchProfile: (token) => (dispatch(fetchProfile(token))),
        fetchCart: (token) => dispatch(FetchCart(token))
    }
}
export class Checkout extends Component {
    componentDidMount() {
        const token = JSON.parse(localStorage.getItem('token'))
        this.props.fetchProfile(token);
        this.props.fetchCart(token);
    }
    render() {
        const data = this.props.profile;
        const subTotal = (this.props.cartItems.reduce((subTotal, currentItem) => subTotal = subTotal + currentItem.count * currentItem.price, 0))
        let shippingCost = null;
       
      if(data.city === 'dhaka' || 'Dhaka' || 'DHAKA'){
          shippingCost = 60
      }else{
          shippingCost = 120
      }
        
            
       
        if (data) return (
            <div>
                <div class="page-nav bg-lightblue">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 text-center"><h1 class="text-grey-800 fw-700 mont-font display4-size">Checkout</h1></div>
                        </div>
                    </div>
                </div>

                <div class="cart-wrapper pt-7 pb-7">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="card bg-greyblue border-0 p-4 mb-5">
                                    <p class="mb-0 mont-font font-xssss text-uppercase fw-600 text-grey-500"><i class="fa fa-exclamation-circle"></i> Have A Coupon? <a class="expand-btn text-grey-500 fw-700" href="#coupon_info">Click Here To Enter Your Code.</a></p>
                                </div>
                            </div>

                            <div class="col-xl-6 col-lg-6">
                                <div class="page-title">
                                    <h4 class="mont-font fw-500 font-xxl mb-5">Billing address</h4>
                                    <div class="card">
                                        <h5 class="card-header">Billing  Details</h5>
                                        <div class="card-body">
                                            {this.props.profile.email ? (
                                                <>
                                                    {/* <ul class="list-group list-group-flush">
                                                        <li class="list-group-item"><label className="mont-font fw-600 font-xsss" >First Name</label> : <label className="mont-font fw-600 font-xsss" >{this.props.profile.firstName}</label></li>
                                                        <li class="list-group-item"><label className="mont-font fw-600 font-xsss" >Last Name</label> : <label className="mont-font fw-600 font-xsss" >{this.props.profile.lastName}</label></li>
                                                        <li class="list-group-item"><label className="mont-font fw-600 font-xsss" >Account Email</label> : <label className="mont-font fw-600 font-xsss" >{this.props.profile.email}</label></li>
                                                        <li class="list-group-item"><label className="mont-font fw-600 font-xsss" >Contact Number</label> : <label className="mont-font fw-600 font-xsss" >{this.props.profile.phone}</label></li>
                                                        <li class="list-group-item"><label className="mont-font fw-600 font-xsss" >Country </label> : <label className="mont-font fw-600 font-xsss" >{this.props.profile.country}</label></li>

                                                        <li class="list-group-item"><label className="mont-font fw-600 font-xsss" > Address</label> : <label className="mont-font fw-600 font-xsss" >{this.props.profile.address}</label></li>

                                                        <li class="list-group-item"><label className="mont-font fw-600 font-xsss" >City </label> : <label className="mont-font fw-600 font-xsss" >{this.props.profile.city}</label></li>

                                                        <li class="list-group-item"><label className="mont-font fw-600 font-xsss" >Postal Code </label> : <label className="mont-font fw-600 font-xsss" >{this.props.profile.postCode}</label></li>
                                                    </ul><br /> */}
                                                    <p>To,</p>
                                                    <h4 style={{ fontWeight: 'bold' }}>{this.props.profile.firstName} {this.props.profile.lastName} ,</h4>
                                                    <h5>Phone : {this.props.profile.phone}</h5>
                                                    <h5> {this.props.profile.address} {this.props.profile.postCode}</h5>
                                                    <h5> {this.props.profile.country}</h5>
                                                </>
                                            ) : ''}

                                        </div>

                                    </div><br />
                                    <h4 class="mont-font fw-500 font-xxl mb-4 mt-0">Shipping address</h4>
                                    <div class="form-check text-left mb-3 mt-2">
                                        <input type="checkbox" class="form-check-input mt-2" id="exampleCheck1" />
                                        <label class="pt--1 form-check-label fw-500 font-xss text-grey-900" for="exampleCheck1">Ship to a different address ?</label>
                                    </div>

                                </div>
                            </div>
                            <div class="col-xl-5 offset-xl-1 col-lg-6">
                                <div class="order-details">
                                    <h4 class="mont-font fw-500 font-xxl mb-5">Order Details</h4>
                                    <div class="table-content table-responsive mb-5 card border-0 bg-greyblue p-5">
                                        <table class="table order-table order-table-2 mb-0">
                                            <thead>
                                                <tr>
                                                    <th class="border-0">Product</th>
                                                    <th class="text-right border-0">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.props.cartItems.map((item, i) => {
                                                    return (
                                                        <tr>
                                                            <th class="text-grey-500 fw-500 font-xsss">{item.product.name}
                                                                <strong><span> ✕</span> {item.count}</strong>
                                                            </th>
                                                            <td class="text-right text-grey-500 fw-500 font-xsss">{item.price} TK</td>
                                                        </tr>
                                                    )
                                                })}

                                            </tbody>
                                            <tfoot>
                                                <tr class="cart-subtotal">
                                                    <th>Subtotal</th>
                                                    <td class="text-right text-grey-900 font-xss fw-600">{subTotal} TK</td>
                                                </tr>
                                                <tr class="shipping">
                                                    <th>Shipping</th>
                                                    <td class="text-right">
                                                        <span class="text-grey-900 font-xss fw-600">Flat Rate : {shippingCost} TK</span>
                                                    </td>
                                                </tr>
                                                <tr class="order-total">
                                                    <th>Order Total</th>
                                                    <td class="text-right text-grey-900 font-xss fw-600"><span class="order-total-ammount">{subTotal + shippingCost} TK</span></td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                    <div class="checkout-payment card border-0 mb-3 bg-greyblue p-5">
                                        <form action="#" class="payment-form">
                                            <div class="payment-group mb-4">
                                                <div class="payment-radio">
                                                    <input type="radio" value="bank" name="payment-method" id="bank" checked="" />
                                                    <label class="payment-label fw-600 text-grey-900 ml-2" for="cheque">Direct Bank Transfer</label>
                                                </div>
                                                <div class="payment-info" data-method="bank" >
                                                    <p class="font-xsss text-grey-500 pl-4">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                                                </div>
                                            </div>
                                            <div class="payment-group mb-4">
                                                <div class="payment-radio">
                                                    <input type="radio" value="cheque" name="payment-method" id="cheque" />
                                                    <label class="payment-label fw-600 text-grey-90" for="cheque">
                                                        Cheque payments
                                                    </label>
                                                </div>
                                                <div class="payment-info cheque hide-in-default" data-method="cheque" >
                                                    <p class="font-xsss text-grey-500 pl-4">Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                                </div>
                                            </div>
                                            <div class="payment-group mb-0">
                                                <div class="payment-radio">
                                                    <input type="radio" value="cash" name="payment-method" id="cash" />
                                                    <label class="payment-label fw-600 text-grey-90" for="cash">
                                                        Cash on Delivary
                                                    </label>
                                                </div>
                                                <div class="payment-info cash hide-in-default" data-method="cash" >
                                                    <p class="font-xsss text-grey-500 pl-4">Pay with cash upon delivery.</p>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="clearfix"></div>

                                    <div class="card shadow-none border-0">
                                        <a href="#" class="btn btn-primary rounded-lg text-uppercase fw-600 ls-3">Place Order</a>
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

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);