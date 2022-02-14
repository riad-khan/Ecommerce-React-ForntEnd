import React, { Component } from 'react'
import ShopSideBar from './ShopSideBar';
import Trending1 from '../../assets/images/banner-slider-2.jpg';
import Trending2 from '../../assets/images/banner-sldier-3.jpg';
import { connect } from 'react-redux';
import { fetchCategory } from '../../redux/actionCreators/categoryActionCreators'

const mapStateToProps = state => {
    return {
        categories: state.categories,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchCategory: () => dispatch(fetchCategory())
    }
}
export class Shop extends Component {
    componentDidMount() {
        this.props.fetchCategory();
    }
    render() {
        const categories = this.props.categories.map(category =>{
            return(
                <option value={category.name}>{category.name}</option>
            )
        })
        return (
            <div>

                <div class="shop-wrapper pt-7 pb-7">
                    <div class="container">
                        <div class="row">
                            <ShopSideBar />

                            <div class="col-lg-8 w__70">
                                <div class="row">
                                    <div class="col-lg-12 mb-3">
                                        <div class="banner-wrapper bg-greylight overflow-hidden rounded-lg">
                                            <div class="banner-slider owl-carousel owl-theme dot-style2 owl-nav-link link-style3">
                                                <div class="owl-items h300 bg-size-cover style1 d-flex align-items-center bg-image-cover bg-image-top" style={{ backgroundImage: `url(${Trending1})` }} >
                                                    <div class="container">
                                                        <div class="row">
                                                            <div class="col-lg-6">
                                                                <h4 class="font-xsss text-danger ls-3 fw-700 ml-0 mb-3">TRENDING</h4>
                                                                <h2 class="fw-300 display2-size lh-1 text-grey-900">MEN <br /> <b class="fw-900">COLLECTION</b></h2>
                                                                <a href="#" class="fw-700 text-white bg-black font-xsssss text-uppercase ls-3 lh-30 rounded-0 ml-1 mt-3 text-center d-inline-block p-2 w150">Shop Now</a>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="owl-items h300 bg-size-cover style1 d-flex align-items-center bg-image-cover" style={{ backgroundImage: `url(${Trending2})` }} >
                                                    <div class="container">
                                                        <div class="row">
                                                            <div class="col-lg-6">
                                                                <h4 class="font-xsss text-danger ls-3 fw-700 ml-0 mb-3">TRENDING</h4>
                                                                <h2 class="fw-300 display2-size lh-1 text-grey-900">WINTER <br /> <b class="fw-900">COLLECTION</b></h2>
                                                                <a href="#" class="fw-700 text-white bg-black font-xsssss text-uppercase ls-3 lh-30 rounded-0 ml-1 mt-3 text-center d-inline-block p-2 w150">Shop Now</a>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 mt-2">
                                        <h4 class="float-left font-xssss fw-700 text-grey-500 text-uppercase ls-3 mt-2 pt-1">32 Product found</h4>
                                        <select class="searchCat float-right sort">
                                           {categories}
                                        </select>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="card w-100 border-0 mt-4">
                                            <div class="card-image w-100 p-0 text-center bg-greylight rounded-lg mb-2">
                                                <a href="#"><img src="images/girl-1.jpg" alt="product-image" class="w-100 mt-0 mb-0" /></a>
                                            </div>
                                            <div class="card-body w-100 p-0 text-center">
                                                <h2 class="mt-2 mb-1"><a href="single-product.html" class="text-black fw-600 font-xss lh-26">Textured Sleeveless Camisole</a></h2>
                                                <h6 class="font-xsss fw-500 text-grey-500 ls-2">$449</h6>
                                            </div>
                                        </div>
                                    </div>










                                    <div class="col-lg-12 mt-5 text-center"><a href="#" class="fw-700 text-white font-xssss text-uppercase ls-3 lh-32 rounded-lg mt-3 text-center d-inline-block p-2 bg-current w150">Load More</a></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop)