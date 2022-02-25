import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { isAuthenticated, userInfo } from '../../helpers/auth';
import Logo from '../../assets/meme.png'
import CartModal from '../cart/cartModal';




class Header extends Component {
    state = {
        isOpen: null
    }

    toggleCart = () => {
        this.setState({
            isOpen: true
        })
    }
    closeCart = value => {
        this.setState({
            isOpen: value
        })
    }
    render() {
        let loginUrl = {}

        if (isAuthenticated() === true) {
            loginUrl = (
                <li className="list-inline-item"><Link><i className="ti-user mr-2"></i>{userInfo().name}</Link></li>
            )
        } else {
            loginUrl = (
                <li className="list-inline-item"><Link to='login'><i className="ti-user mr-2"></i> Login | Register</Link></li>
            )

        }


        return (
            <div>
                <div className="preloader"></div>

                <div className="backdrop"></div>

                <div className="upper-header bg-greylight">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-xs-6 d-none d-block-md">
                                <ul className="list-inline list-item-style mt-0 float-left pl-1">
                                    <li className="list-inline-item pl-0"><a href="#">(+1)866-540-3229</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-xs-6 d-none d-block-md">
                                <ul className="list-inline list-item-style mt-0 float-right">
                                    <li className="list-inline-item"><Link to='' ><i className="ti-user mr-2"></i> My Account</Link></li>
                                </ul>
                            </div>
                            <div className="col-12 d-none d-lg-block">
                                <ul className="list-inline list-item-style mt-0 float-left pl-1">
                                    <li className="list-inline-item pl-0"><a href="#">BECOME AN AGENT</a></li>
                                    <li className="list-inline-item"><a href="#">PRIVACY</a></li>
                                    <li className="list-inline-item"><a href="#">CUSTOMER SERVICE </a></li>
                                </ul>

                                <ul className="list-inline list-item-style mt-0 float-right">
                                    <li className="list-inline-item"><a href="#"><i className="ti-location-pin mr-2"></i> Store Locator</a></li>
                                    {loginUrl}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-wrapper shadow-none pb-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-3 col-md-6 col-lg-2 col-xl-4 navbar pt-0">
                                <a href="index.html" className="logo"><h1 className="fredoka-font ls-3 fw-700 text-current display1-size"> OSBD</h1></a>

                            </div>
                            <div className="col-xs-9 col-md-6 col-lg-10 col-xl-8 text-right">
                                <form action="#" className="header-search d-none d-lg-block float-left position-relative border rounded-xl">
                                    <input type="text" className="form-control p-0 border-0 rounded-xl pl-4 pr-4 w300 font-xss bg-transparent" placeholder="Search.." />
                                    <select className="searchCat"> <option value="">All Categories</option><option value="151781441596 ">Fashion</option><option value="139119624252 ">- Men</option><option value="139118313532 ">- Women</option><option value="139360141372 ">Electronics</option><option value="152401903676 ">Home &amp; Garden</option><option value="138866720828 ">- Decor</option><option value="138866917436 ">- Lighting</option></select>
                                    <button className="border-0 bg-transparent pr-4 pl-4"><i className="ti-search font-xs lh-32 text-grey-500"></i></button>
                                </form>
                                {/* <a href="#" data-toggle="modal" onClick={this.toggleCart} data-target="#ModalCart" className="float-right text-center mt-1 ml-4 text-grey-800 position-relative"><i className="ti-shopping-cart font-lg"></i><span className="font-xssss fw-500 d-block lh-1">Cart</span> <span className="icon-count bg-current">3</span></a> */}
                                <Link to='/cart'  className="float-right text-center mt-1 ml-4 text-grey-800 position-relative"><i className="ti-shopping-cart font-lg"></i><span className="font-xssss fw-500 d-block lh-1">Cart</span> <span className="icon-count bg-current">3</span></Link>
                                <a href="#" className="float-right text-center mt-1 ml-4 text-grey-800 position-relative"><i className="ti-heart font-lg"></i><span className="font-xssss fw-500 d-block lh-1">Saved</span> <span className="icon-count bg-current">2</span></a>
                                {isAuthenticated() && (
                                    <Link to='/profile' className="float-right d-none d-lg-block text-center mt-1 ml-4 text-grey-800"><i className="ti-user font-lg"></i><span className="font-xssss fw-500 d-block lh-1">Account</span></Link>
                                )}
                                <button className="navbar-toggler float-right mt-1" type="button" data-toggle="modal" data-target="#ModalCategores">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-wrapper bg-dark shadow-none pb-2 pt-2 d-none d-lg-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 pt-0">

                                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul className="navbar-nav bg-dark nav-menu float-none text-center ml-0 w-100 dropdown-menu-full">
                                        <li className="nav-item"><Link className="nav-link" to='/'>Home</Link></li>
                                        <li className="nav-item dropdown pl-0"><a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Mega Menu <i className="ti-angle-down"></i></a>
                                            <div className="dropdown-menu full-wrap" >
                                                <div className="row">
                                                    <div className="col-lg-3">
                                                        <h4 className="fw-500 font-xss mb-3">Mobile Phones</h4>
                                                        <ul className="sub-menu">
                                                            <li><a href="#">Smartphones</a></li>
                                                            <li><a href="#">Android Phones</a></li>
                                                            <li><a href="#">iPhones</a></li>
                                                            <li><a href="#">Windows Mobiles</a></li>
                                                            <li><a href="#">Refurbished Mobiles</a></li>
                                                            <li><a href="#">Pre Owned Mobiles</a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-3">
                                                        <h4 className="fw-500 font-xss mb-3">Today’s Value Deals</h4>
                                                        <ul className="sub-menu">
                                                            <li><a href="#">Smartphones</a></li>
                                                            <li><a href="#">Android Phones</a></li>
                                                            <li><a href="#">iPhones</a></li>
                                                            <li><a href="#">Windows Mobiles</a></li>
                                                            <li><a href="#">Refurbished Mobiles</a></li>
                                                            <li><a href="#">Pre Owned Mobiles</a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-3">
                                                        <h4 className="fw-500 font-xss mb-3">Computer & Laptop</h4>
                                                        <ul className="sub-menu">
                                                            <li><a href="#">Smartphones</a></li>
                                                            <li><a href="#">Android Phones</a></li>
                                                            <li><a href="#">iPhones</a></li>
                                                            <li><a href="#">Windows Mobiles</a></li>
                                                            <li><a href="#">Refurbished Mobiles</a></li>
                                                            <li><a href="#">Pre Owned Mobiles</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="single-product.html">Pages</a></li>
                                        <li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>
                                        <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
                                        <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                                        <li className="nav-item"><Link className="nav-link" to='/shop'>Shop</Link></li>
                                        <li className="nav-item float-right pr-0"><a href="tel:(+1)866-540-3229" className="nav-link fw-500 font-xsss text-current d-block">Call us toll free:  (+1)866-540-3229</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 text-right">

                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal left fade menu-slider" id="ModalCategores" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content bg-white" style={{ background: "#fff" }}>
                            <button type="button" className="close mt-1" data-dismiss="modal" aria-label="Close"><i className="ti-close text-grey-500"></i></button>
                            <div className="modal-body p-3 vw100">
                                <h2 className="text-grey-900 fw-600 mb-4">Menu</h2>
                                <div className="section full mb-4">
                                    <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                        <div className="panel panel-default border-bottom rounded-0 pl-0 pt-2 pb-2 pr-2 mb-0 bg-color-none">
                                            <div className="panel-heading" role="tab" id="headingOne">
                                                <h2 className="panel-title fw-400 mb-0"><a className="accordion-toggle collapsed text-grey-600 font-xsss fw-600" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="true" aria-controls="collapseFour">Electronics </a></h2>
                                            </div>
                                            <div id="collapseFour" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                                <div className="panel-body pt-2 pb-2">
                                                    <ul className="list-group border-0">
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Smartphones</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Android Phones</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">iPhones</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Windows Mobiles</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Refurbished Mobiles</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Pre Owned Mobiles</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="panel panel-default border-bottom rounded-0 pl-0 pt-2 pb-2 pr-2 mb-0 bg-color-none">
                                            <div className="panel-heading" role="tab" id="headingTwo">
                                                <h2 className="panel-title fw-400 mb-0"><a className="accordion-toggle collapsed text-grey-600 font-xsss fw-600" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Laptop</a></h2>
                                            </div>
                                            <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingTwo">
                                                <div className="panel-body pt-2 pb-2">
                                                    <ul className="list-group border-0">
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Smartphones</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Android Phones</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">iPhones</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Windows Mobiles</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Refurbished Mobiles</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Pre Owned Mobiles</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="panel panel-default border-bottom rounded-0 pl-0 pt-2 pb-2 pr-2 mb-0 bg-color-none">
                                            <div className="panel-heading" role="tab" id="headingThree">
                                                <h2 className="panel-title fw-400 mb-0"><a className="accordion-toggle collapsed text-grey-600 font-xsss fw-600" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">Computer</a></h2>
                                            </div>
                                            <div id="collapseTwo" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingThree">
                                                <div className="panel-body pt-2 pb-2">
                                                    <ul className="list-group border-0">
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Smartphones</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Android Phones</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">iPhones</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Windows Mobiles</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Refurbished Mobiles</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Pre Owned Mobiles</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="panel panel-default border-bottom rounded-0 pl-0 pt-2 pb-2 pr-2 mb-0 bg-color-none">
                                            <div className="panel-heading" role="tab" id="headingFour">
                                                <h2 className="panel-title fw-400 mb-0"><a className="accordion-toggle collapsed text-grey-600 font-xsss fw-600" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="true" aria-controls="collapseThree">Tablet</a></h2>
                                            </div>
                                            <div id="collapseThree" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingFour">
                                                <div className="panel-body pt-2 pb-2">
                                                    <ul className="list-group border-0">
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Smartphones</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Android Phones</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">iPhones</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Windows Mobiles</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Refurbished Mobiles</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Pre Owned Mobiles</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="panel panel-default border-bottom rounded-0 pl-0 pt-2 pb-2 pr-2 mb-0 bg-color-none">
                                            <div className="panel-heading" role="tab" id="headingFive">
                                                <h2 className="panel-title fw-400 mb-0"><a className="accordion-toggle collapsed text-grey-600 font-xsss fw-600" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="true" aria-controls="collapseFive">Clothing</a></h2>
                                            </div>
                                            <div id="collapseFive" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingFive">
                                                <div className="panel-body pt-2 pb-2">
                                                    <ul className="list-group border-0">
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Smartphones</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Android Phones</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">iPhones</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Windows Mobiles</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Refurbished Mobiles</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Pre Owned Mobiles</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="panel panel-default border-bottom rounded-0 pl-0 pt-2 pb-2 pr-2 mb-0 bg-color-none">
                                            <div className="panel-heading" role="tab" id="headingSix">
                                                <h2 className="panel-title fw-400 mb-0"><a className="accordion-toggle collapsed text-grey-600 font-xsss fw-600" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="true" aria-controls="collapseSix">Home Appliances</a></h2>
                                            </div>
                                            <div id="collapseSix" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingSix">
                                                <div className="panel-body pt-2 pb-2">
                                                    <ul className="list-group border-0">
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Smartphones</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Android Phones</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">iPhones</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Windows Mobiles</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Refurbished Mobiles</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Pre Owned Mobiles</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="panel panel-default border-bottom rounded-0 pl-0 pt-2 pb-2 pr-2 mb-0 bg-color-none">
                                            <div className="panel-heading" role="tab" id="headingSeven">
                                                <h2 className="panel-title fw-400 mb-0"><a className="accordion-toggle collapsed text-grey-600 font-xsss fw-600" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseNine" aria-expanded="true" aria-controls="collapseNine">Milk & Juices</a></h2>
                                            </div>
                                            <div id="collapseNine" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingSeven">
                                                <div className="panel-body pt-2 pb-2">
                                                    <ul className="list-group border-0">
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Smartphones</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Android Phones</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">iPhones</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Windows Mobiles</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Refurbished Mobiles</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Pre Owned Mobiles</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="panel panel-default border-bottom rounded-0 pl-0 pt-2 pb-2 pr-2 mb-0 bg-color-none">
                                            <div className="panel-heading" role="tab" id="headingTen">
                                                <h2 className="panel-title fw-400 mb-0"><a className="accordion-toggle collapsed text-grey-600 font-xsss fw-600" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTen" aria-expanded="true" aria-controls="collapseTen">Nuts & Choclets</a></h2>
                                            </div>
                                            <div id="collapseTen" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingTen">
                                                <div className="panel-body pt-2 pb-2">
                                                    <ul className="list-group border-0">
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Smartphones</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Android Phones</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">iPhones</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Windows Mobiles</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Refurbished Mobiles</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Pre Owned Mobiles</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="panel panel-default rounded-0 pl-0 pt-2 pb-2 pr-2 mb-0 bg-color-none">
                                            <div className="panel-heading" role="tab" id="headingeight">
                                                <h2 className="panel-title fw-400 mb-0"><a className="accordion-toggle collapsed text-grey-600 font-xsss fw-600" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseEleve" aria-expanded="true" aria-controls="collapseEleve">Fruits</a></h2>
                                            </div>
                                            <div id="collapseEleve" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingeight">
                                                <div className="panel-body pt-2 pb-2">
                                                    <ul className="list-group border-0">
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Smartphones</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Android Phones</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">iPhones</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Windows Mobiles</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Refurbished Mobiles</li>
                                                        <li className="list-group-item border-0 p-0 lh-32 font-xsss  text-grey-500">Pre Owned Mobiles</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {this.state.isOpen === true ? <CartModal closeCart={(value) => this.closeCart(value)} /> : ''}
            </div>
        );
    }
}

export default Header
