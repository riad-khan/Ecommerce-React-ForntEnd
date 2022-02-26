import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategory } from '../../redux/actionCreators/categoryActionCreators';
import PriceFilter from './PriceFilter';

const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchCategory: () => dispatch(fetchCategory())
    }
}

export class ShopSideBar extends Component {
    state = {
        value:[],
        checked: [],
    }
    componentDidMount() {
        this.props.fetchCategory();
    }
    handleChecked = id => () => {

        const foundId = this.state.checked.indexOf(id);
        const checkedIds = [...this.state.checked]
        if (foundId === -1) {
            checkedIds.push(id)
        } else {
            checkedIds.splice(foundId, 1)
        }
        this.setState({
            checked: checkedIds,
        })
        this.props.handleFilters(checkedIds)
    }
  
    render() {
            
        const categories = this.props.categories.map((category, i) => {
            return (
                <div className="form-check text-left mb-3" key={i}>
                    <input type="checkbox" name="checkbox" onChange={this.handleChecked(category._id)} value={this.state.checked.indexOf(category._id === -1)} className="form-check-input mt-2" />
                    <label className="pt--1 form-check-label fw-500 font-xss text-grey-900" for="exampleCheck1">{category.name}</label>
                </div>
            )
        })
        return (
            <>

                <div className="col-lg-4 w__30">
                    <div className="bg-greyblue side-wrap rounded-lg p-4 mb-4">
                        <div className="form-group mb-1">
                            <label for="Search" className="fw-600 text-grey-900">Search by Keyword</label>
                        </div>
                        <div className="form-group icon-tab">
                            <input type="text" className="form-control border-1 h60" placeholder="To search type and hit enter" />
                            <i className="ti-search text-grey-500 font-xss"></i>
                        </div>
                    </div>

                    <div className="bg-greyblue side-wrap rounded-lg p-4 mb-4">
                        <div className="form-group mb-0">
                            <label htmlFor="Search" className="fw-600 text-grey-900">Categories</label>
                        </div>


                        {categories}

                    </div>


                  


               

                            <PriceFilter handlePrice={price =>this.props.handlePrice(price)} />


                    <div className="bg-greyblue side-wrap rounded-lg p-4 mb-4">
                        <div className="form-group mb-0">
                            <label for="Search" className="fw-600 text-grey-900">Brand</label>
                        </div>
                        <div className="form-group mb-2 mt-2">
                            <div className="custom-control mr-0 custom-radio custom-control-inline d-block">
                                <input type="radio" className="custom-control-input" id="customRadio1" name="Depart" value="customEx" />
                                <label className="custom-control-label small-size fw-600 text-grey-800 font-xsss d-block" for="customRadio1">Addidas<span className="float-right fw-500 text-grey-500 font-xssss mt-1">12</span></label>
                            </div>
                        </div>
                        <div className="form-group mb-2">
                            <div className="custom-control mr-0 custom-radio custom-control-inline d-block">
                                <input type="radio" className="custom-control-input" id="customRadio5" name="Depart" value="customEx" />
                                <label className="custom-control-label small-size fw-600 text-grey-800 font-xsss d-block" for="customRadio5">Levis <span className="float-right fw-500 text-grey-500 font-xssss mt-1">15</span></label>
                            </div>
                        </div>
                        <div className="form-group mb-2">
                            <div className="custom-control mr-0 custom-radio custom-control-inline d-block">
                                <input type="radio" className="custom-control-input" id="customRadio3" name="Depart" value="customEx" />
                                <label className="custom-control-label small-size fw-600 text-grey-800 font-xsss d-block" for="customRadio3">Cape Town <span className="float-right fw-500 text-grey-500 font-xssss mt-1">7</span></label>
                            </div>
                        </div>
                        <div className="form-group mb-2">
                            <div className="custom-control mr-0 custom-radio custom-control-inline d-block">
                                <input type="radio" className="custom-control-input" id="customRadio4" name="Depart" value="customEx" />
                                <label className="custom-control-label small-size fw-600 text-grey-800 font-xsss d-block" for="customRadio4">Nikes <span className="float-right fw-500 text-grey-500 font-xssss mt-1">34</span></label>
                            </div>
                        </div>
                    </div>

                    <div className="bg-greyblue side-wrap rounded-lg p-4 mb-4">
                        <div className="form-group mb-0">
                            <label for="Search" className="fw-600 text-grey-900">Recent Products</label>
                        </div>
                        <div className="col-lg-12">
                            <div className="card w-100 border-0 mt-3 bg-transparent">
                                <div className="row">
                                    <div className="float-left card-image w-25 p-2 text-center bg-white rounded-lg">
                                        <a href="#"><img src="images/pp-17.png" alt="product-image" className="w45 mt-1" /></a>
                                    </div>
                                    <div className="float-left card-body bg-transparent w-75 pt-2 pb-0">
                                        <h4 className="fw-600 font-xsss text-grey-500">Trimmer</h4>
                                        <h2><a href="single-product.html" className="text-grey-800 fw-700 font-xsss lh-24">Mi XXQ02HM Runtime: 60 min Trimmer for Men </a></h2>
                                        <h6 className="font-xsss fw-600 text-grey-500 ls-2">$49</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="card w-100 border-0 mt-3 bg-transparent">
                                <div className="row">
                                    <div className="float-left card-image w-25 p-2 text-center bg-white rounded-lg">
                                        <a href="#"><img src="images/pp-16.png" alt="product-image" className="w45 mt-1" /></a>
                                    </div>
                                    <div className="float-left card-body bg-transparent w-75 pt-2 pb-0">
                                        <h4 className="fw-600 font-xsss text-grey-500">Trimmer</h4>
                                        <h2><a href="single-product.html" className="text-grey-800 fw-700 font-xsss lh-24">Mi XXQ02HM Runtime: 60 min Trimmer for Men </a></h2>
                                        <h6 className="font-xsss fw-600 text-grey-500 ls-2">$49</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="card w-100 border-0 mt-3 bg-transparent">
                                <div className="row">
                                    <div className="float-left card-image w-25 p-2 text-center bg-white rounded-lg">
                                        <a href="#"><img src="images/pp-5.png" alt="product-image" className="w45 mt-1" /></a>
                                    </div>
                                    <div className="float-left card-body bg-transparent w-75 pt-2 pb-0">
                                        <h4 className="fw-600 font-xsss text-grey-500">Trimmer</h4>
                                        <h2><a href="single-product.html" className="text-grey-800 fw-700 font-xsss lh-24">Mi XXQ02HM Runtime: 60 min Trimmer for Men </a></h2>
                                        <h6 className="font-xsss fw-600 text-grey-500 ls-2">$49</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="card w-100 border-0 mt-3 bg-transparent">
                                <div className="row">
                                    <div className="float-left card-image w-25 p-2 text-center bg-white rounded-lg">
                                        <a href="#"><img src="images/pp-18.png" alt="product-image" className="w45 mt-1" /></a>
                                    </div>
                                    <div className="float-left card-body bg-transparent w-75 pt-2 pb-0">
                                        <h4 className="fw-600 font-xsss text-grey-500">Trimmer</h4>
                                        <h2><a href="single-product.html" className="text-grey-800 fw-700 font-xsss lh-24">Mi XXQ02HM Runtime: 60 min Trimmer for Men </a></h2>
                                        <h6 className="font-xsss fw-600 text-grey-500 ls-2">$49</h6>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <a href="#"><img src="images/c-5.jpg" alt="img" className="img-fluid rounded-lg mb-3 mt-3" /></a>
                </div>


            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopSideBar)