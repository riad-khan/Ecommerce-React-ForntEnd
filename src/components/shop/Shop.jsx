import React, { Component } from 'react'
import ShopSideBar from './ShopSideBar';
import Trending1 from '../../assets/images/banner-slider-2.jpg';
import Trending2 from '../../assets/images/banner-sldier-3.jpg';
import { connect } from 'react-redux';

import { fetchProducts } from '../../redux/actionCreators/productActionCreator'
import { API } from '../../config/config';
import { Link } from 'react-router-dom';
import girl from '../../assets/images/girl-1.jpg'


const mapStateToProps = state => {
    return {
        categories: state.categories,
        products: state.products,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: (order, sortBy, limit, skip, filters) => dispatch(fetchProducts(order, sortBy, limit, skip, filters))
    }
}
export class Shop extends Component {
    state = {
        order: 'desc',
        sortBy: 'createdAt',
        limit: '6',
        skip: '0',
        filters: {
            category: [],
            price: [],
        },

    }
    componentDidMount() {
        this.props.fetchProducts()
    }
    handleFilters = (myFilters, filterBy) => {
        const newFilters = { ...this.state.filters };
       
        if (filterBy === 'category' ) {
            newFilters[filterBy] = myFilters
        }
        this.setState({
            filters: newFilters,
        })
        this.props.fetchProducts(this.state.order, this.state.sortBy, this.state.limit, this.state.skip, newFilters);
        
    }
    handlePrice = (price, filterByPrice)=>{
        const newFilters = {...this.state.filters};
        if(filterByPrice === 'price'){
            newFilters[filterByPrice] = [500,parseInt(price)]
        }
        this.setState({
            filters:newFilters
        })
         this.props.fetchProducts(this.state.order, this.state.sortBy, this.state.limit, this.state.skip, newFilters);
        
    }
    render() {


        return (
            <div>

                <div className="shop-wrapper pt-7 pb-7">
                    <div className="container">
                        <div className="row">
                            <ShopSideBar handlePrice={price=>this.handlePrice(price,'price')} handleFilters={myfilters => this.handleFilters(myfilters, 'category')} />

                            <div className="col-lg-8 w__70">
                                <div className="row">
                                    <div className="col-lg-12 mb-3">
                                        <div className="banner-wrapper bg-greylight overflow-hidden rounded-lg">
                                            <div className="banner-slider owl-carousel owl-theme dot-style2 owl-nav-link link-style3">
                                                <div className="owl-items h300 bg-size-cover style1 d-flex align-items-center bg-image-cover bg-image-top" style={{ backgroundImage: `url(${Trending1})` }} >
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <h4 className="font-xsss text-danger ls-3 fw-700 ml-0 mb-3">TRENDING</h4>
                                                                <h2 className="fw-300 display2-size lh-1 text-grey-900">MEN <br /> <b className="fw-900">COLLECTION</b></h2>
                                                                <a href="#" className="fw-700 text-white bg-black font-xsssss text-uppercase ls-3 lh-30 rounded-0 ml-1 mt-3 text-center d-inline-block p-2 w150">Shop Now</a>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="owl-items h300 bg-size-cover style1 d-flex align-items-center bg-image-cover" style={{ backgroundImage: `url(${Trending2})` }} >
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <h4 className="font-xsss text-danger ls-3 fw-700 ml-0 mb-3">TRENDING</h4>
                                                                <h2 className="fw-300 display2-size lh-1 text-grey-900">WINTER <br /> <b className="fw-900">COLLECTION</b></h2>
                                                                <a href="#" className="fw-700 text-white bg-black font-xsssss text-uppercase ls-3 lh-30 rounded-0 ml-1 mt-3 text-center d-inline-block p-2 w150">Shop Now</a>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mt-2">
                                        <h4 className="float-left font-xssss fw-700 text-grey-500 text-uppercase ls-3 mt-2 pt-1">{this.props.products.length} Products Found</h4>

                                    </div>

                                    {this.props.products.length === 0 ? (
                                        <h3>No products Found</h3>
                                    ) : this.props.products.map((product, i) => {
                                        return (
                                            <div className="col-lg-4 col-md-6" key={i}>
                                                <div className="card w-100 border-0 mt-4">
                                                    <div className="card-image w-100 p-0 text-center bg-greylight rounded-lg mb-2">
                                                        <Link to={`/product-details/${product._id}`}><img src={`${API}/product/photo/${product._id}`} alt="product-image" className="w-100 mt-0 mb-0 bg-greylight" /></Link>
                                                    </div>
                                                    <div className="card-body w-100 p-0 text-center">
                                                        <h2 className="mt-2 mb-1"><Link to={`/product-details/${product._id}`} className="text-black fw-600 font-xss lh-26">{product.name}</Link></h2>
                                                        <h6 className="font-xsss fw-500 text-grey-500 ls-2">{product.price} Tk</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}

                                    <div className="col-lg-12 mt-5 text-center"><a href="#" className="fw-700 text-white font-xssss text-uppercase ls-3 lh-32 rounded-lg mt-3 text-center d-inline-block p-2 bg-current w150">Load More</a></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div >)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop)