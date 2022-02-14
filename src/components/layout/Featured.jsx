import React from 'react';
import phone1 from '../../assets/images/pp-20.png';
import phone2 from '../../assets/images/pp-1.png';
import phone3 from '../../assets/images/pp-16.png';
import phone4 from '../../assets/images/pp-15.png';
import phone5 from '../../assets/images/pp-17.png';
import phone6 from '../../assets/images/pp-6.png';

function Featured() {
    return <div>
        <div className="feature-product pt-5 pb-0">
            <div className="container">
                <div className="row">
                    <div className="page-title style1 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1 text-center mb-4"><h2 className="text-grey-900 fw-300 display2-size pb-3 mb-0 d-block">Featured Items</h2> <p className="fw-300 font-xss lh-28 text-grey-500">orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dol ad minim veniam, quis nostrud exercitation</p></div>
                </div>
                <div className="row pl-3 pr-3">
                    <div className="col-lg-4 col-md-6">
                        <div className="card w-100 border-0 mt-4">
                            <div className="row">
                                <div className="float-left card-image w-25 p-2 text-center bg-greylight rounded-lg">
                                    <a href="#"><img src={phone1} alt="product-image" className="w45 mt-1" /></a>
                                </div>
                                <div className="float-left card-body w-75 pt-2 pb-0">
                                    <h4 className="fw-500 font-xsss text-grey-500">Phones</h4>
                                    <h2><a href="single-product.html" className="text-grey-800 fw-500 font-xss lh-26">Samsung Galaxy S20 FE Cloud Lavender 128 GB 8 GB RAM</a></h2>
                                    <h6 className="font-xsss fw-500 text-grey-500 ls-2">$449</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card w-100 border-0 mt-4">
                            <div className="row">
                                <div className="float-left card-image w-25 p-2 text-center bg-greylight rounded-lg">
                                    <a href="#"><img src={phone2} alt="product-image" className="w45 mt-1" /></a>
                                </div>
                                <div className="float-left card-body w-75 pt-2 pb-0">
                                    <h4 className="fw-500 font-xsss text-grey-500">Phones</h4>
                                    <h2><a href="single-product.html" className="text-grey-800 fw-500 font-xss lh-26">Apple iPhone 6s -16/32/64/ 128GB Grey Color</a></h2>
                                    <h6 className="font-xsss fw-500 text-grey-500 ls-2">$449</h6>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6">
                        <div className="card w-100 border-0 mt-4">
                            <div className="row">
                                <div className="float-left card-image w-25 p-2 text-center bg-greylight rounded-lg">
                                    <a href="#"><img  src={phone3} alt="product-image" className="w45 mt-1" /></a>
                                </div>
                                <div className="float-left card-body w-75 pt-2 pb-0">
                                    <h4 className="fw-500 font-xsss text-grey-500">Watch</h4>
                                    <h2><a href="single-product.html" className="text-grey-800 fw-500 font-xss lh-26">Apple Watch Series 3 GPS - 42 mm Space Grey Aluminium</a></h2>
                                    <h6 className="font-xsss fw-500 text-grey-500 ls-2">$399</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="card w-100 border-0 mt-4">
                            <div className="row">
                                <div className="float-left card-image w-25 p-2 text-center bg-greylight rounded-lg">
                                    <a href="#"><img  src={phone4} alt="product-image" className="w45 mt-1" /></a>
                                </div>
                                <div className="float-left card-body w-75 pt-2 pb-0">
                                    <h4 className="fw-500 font-xsss text-grey-500">Watch</h4>
                                    <h2><a href="single-product.html" className="text-grey-800 fw-500 font-xss lh-26">realme Watch S with Black Strap Regular Size</a></h2>
                                    <h6 className="font-xsss fw-500 text-grey-500 ls-2">$449</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="card w-100 border-0 mt-4">
                            <div className="row">
                                <div className="float-left card-image w-25 p-2 text-center bg-greylight rounded-lg">
                                    <a href="#"><img  src={phone5} alt="product-image" className="w45 mt-1" /></a>
                                </div>
                                <div className="float-left card-body w-75 pt-2 pb-0">
                                    <h4 className="fw-500 font-xsss text-grey-500">Trimmer</h4>
                                    <h2><a href="single-product.html" className="text-grey-800 fw-500 font-xss lh-26">Mi XXQ02HM Runtime: 60 min Trimmer for Men  (Black)</a></h2>
                                    <h6 className="font-xsss fw-500 text-grey-500 ls-2">$49</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card w-100 border-0 mt-4">
                            <div className="row">
                                <div className="float-left card-image w-25 p-2 text-center bg-greylight rounded-lg">
                                    <a href="#"><img  src={phone6} alt="product-image" className="w45 mt-1" /></a>
                                </div>
                                <div className="float-left card-body w-75 pt-2 pb-0">
                                    <h4 className="fw-500 font-xsss text-grey-500">Phones</h4>
                                    <h2><a href="single-product.html" className="text-grey-800 fw-500 font-xss lh-26">Apple iPhone X -16/32/64/ 128GB Grey Color</a></h2>
                                    <h6 className="font-xsss fw-500 text-grey-500 ls-2">$449</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default Featured;
