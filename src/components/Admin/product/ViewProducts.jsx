import React, { Component } from 'react';
import { connect } from 'react-redux';
import { API } from '../../../config/config';
import { fetchProducts } from '../../../redux/actionCreators/productActionCreator';
import SideBar from '../../user/SideBar';

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

export class ViewProducts extends Component {
    componentDidMount = () => {
        this.props.fetchProducts();
    }
    render() {

        const allProducts = this.props.products.map((item, i) => {
            return (
                <tr key={i}>
                    <td className="product-thumbnail pl-0 text-left">
                        <img src={`${API}/product/photo/${item._id}`} alt="Product Thumnail" className="w75 rounded-lg" />
                    </td>
                    <td className="product-headline text-left wide-column">
                        <h3>
                            <a href="#" className="text-grey-900 fw-600">{item.name}</a>
                        </h3>
                    </td>
                    <td className="product-p">
                        <span className="product-price-wrapper">
                            <span className="money text-grey-500 fw-500">{item.price} TK</span>
                        </span>
                    </td>
                    <td className="product-p">
                        <span className="product-price-wrapper">
                            <span className="money text-grey-500 fw-500">{item.category.name}</span>
                        </span>
                    </td>

                    <td className="product-total-price">
                        <span className="product-price-wrapper">
                            <span className="money fmont"><strong>{item.quantity}</strong></span>
                        </span>
                    </td>
                    <td className="product-remove text-right"><a href="#"><i className="ti-trash font-xs text-grey-500"></i></a> <a href="#"><i className="ti-eye ml-2 font-xs text-grey-500"></i></a><a href="#"><i className="ti-pencil ml-2 font-xs text-grey-500"></i></a></td>
                </tr>
            )
        })
        return (
            <div>
                <div className="dashboard-wrapper bg-greylight">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="dashboard-nav bg-white rounded-lg shadow-xs">
                                    <a href="#" className="dash-menu d-none d-block-md"><i className="ti-package font-sm mr-2"></i> Menu <i className="ti-angle-down font-xsss float-right "></i></a>
                                    <SideBar path='/view/product61fd2c80606c5a2e05e330a7' />
                                </div>
                            </div>

                            <div className="col-lg-9">
                                <div className="dashboard-tab cart-wrapper p-4 bg-white rounded-lg shadow-xs">

                                    <div className="clearfix"></div>
                                    <div className="table-content table-responsive">
                                        <table className="table text-center">
                                            <thead className="bg-greyblue rounded-lg">
                                                <tr>
                                                    <th className="border-0 p-3">&nbsp;</th>
                                                    <th className="border-0 p-3 text-left">Product</th>
                                                    <th className="border-0 p-3">Price</th>
                                                    <th className="border-0 p-3">Category</th>
                                                    <th className="border-0 p-3">Quantity</th>
                                                    <th className="border-0 p-3">Total</th>
                                                    <th className="border-0 p-3">&nbsp;</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {allProducts}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewProducts);
