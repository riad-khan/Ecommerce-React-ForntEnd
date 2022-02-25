import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { API } from '../../config/config';
import { FetchCart } from '../../redux/actionCreators/cartActionCreators';


const mapStateToProps = state => {
    return {
        cartItem: state.cart
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchCart: (token) => dispatch(FetchCart(token))
    }
}
export class CartModal extends Component {
    componentDidMount() {
        const token = JSON.parse(localStorage.getItem('token'));
        this.props.fetchCart(token)


    }
    handleDelete = id =>{
        console.log(id);
    }

    render() {


        const total = (this.props.cartItem.reduce((total, currentItem) => total = total + currentItem.count * currentItem.price, 0))

        const cartProduct = this.props.cartItem.map((item, i) => {
           if(item.length === 0){
               return(
                   <h2>No product in cart</h2>
               )
           }else{
            return (
                <div class="card w-100 border-0 mt-4" key={i}>
                    <div class="row m-0">
                        <div class="float-left card-image w-25 p-2 text-center bg-greylight rounded-lg">
                            <a href="#"><img src={`${API}/product/photo/${item.product._id}`} alt="product-image" class="w45 mt-1" /></a>
                        </div>
                        <div class="float-left card-body w-75 pt-2 pb-0">

                            <h2><a href="single-product.html" class="text-grey-800 fw-500 font-xss lh-26">{item.product.name}</a></h2>
                            <h6 class="font-xsss fw-500 text-grey-500 ls-2">{item.price} Tk</h6>
                        </div>
                      
                    </div>
                </div>
            )
           }
        })
        return (
            <div>
                <div class="modal p-0 right side fade" onClick={() => this.props.closeCart(false)} id="ModalCart" tabIndex="-1" role="dialog">
                    <div class="modal-dialog ml-auto mr-0 mt-0" role="document">
                        <div class="modal-content border-0 rounded-0 p-3">
                            <button type="button" class="close" data-dismiss="modal" data-backdrop="static" data-keyboard="false" aria-label="Close"><i class="ti-close text-grey-500"></i></button>
                            <div class="modal-body pt-2 pl-4 pb-4 pr-4 vh-100 d-flex align-items-start flex-column">
                                <h2 class="fw-900 display1-size mb-2">Cart </h2>

                                {cartProduct}

                                <div class="card w-100 mt-auto border-0">
                                    <h4 class="fw-600 font-xss mb-4">Sub Total <span class="float-right fw-600 text-grey-600">{total} TK</span></h4>
                                    <Link to='/cart'  onClick={() => this.props.closeCart(false)} data-backdrop="static" data-keyboard="false" aria-label="Close"  class="mt-auto border-0 mb-4 btn-primary float-right text-white fw-600 text-uppercase font-xsss border-dark border rounded-lg  border-size-md d-inline-block w-100 p-3 text-center ls-3">View Cart</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartModal)