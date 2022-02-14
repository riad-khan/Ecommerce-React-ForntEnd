import React, { Component } from 'react'

export class ShopSideBar extends Component {
    render() {
        return (
            <>
                
                            <div class="col-lg-4 w__30">
                                <div class="bg-greyblue side-wrap rounded-lg p-4 mb-4">
                                    <div class="form-group mb-1">
                                        <label for="Search" class="fw-600 text-grey-900">Search by Keyword</label>
                                    </div>
                                    <div class="form-group icon-tab">
                                        <input type="text" class="form-control border-1 h60" placeholder="To search type and hit enter" />
                                        <i class="ti-search text-grey-500 font-xss"></i>
                                    </div>
                                </div>

                                <div class="bg-greyblue side-wrap rounded-lg p-4 mb-4">
                                    <div class="form-group mb-0">
                                        <label for="Search" class="fw-600 text-grey-900">Categories</label>
                                    </div>
                                    <ul class="recent-post mt-2">
                                        <li class="mb-0"><a href="#" class="fw-600">Drress</a></li>
                                        <li class="mb-0"><a href="#" class="fw-600">Shirt</a></li>
                                        <li class="mb-0"><a href="#" class="fw-600">Jacket</a></li>
                                        <li class="mb-0"><a href="#" class="fw-600">Jean</a></li>
                                        <li class="mb-0"><a href="#" class="fw-600">Men</a></li>
                                        <li class="mb-0"><a href="#" class="fw-600">Shorts</a></li>
                                        <li class="mb-0"><a href="#" class="fw-600">Swimwear</a></li>
                                        <li class="mb-0"><a href="#" class="fw-600">Tousers</a></li>
                                        <li class="mb-0"><a href="#" class="fw-600">Jumper Cardigans</a></li>
                                    </ul>
                                </div>


                                <div class="bg-greyblue side-wrap rounded-lg p-4 mb-4">
                                    <div class="form-group mb-0">
                                        <label for="Search" class="fw-600 text-grey-900">Color</label>
                                    </div>
                                    <ul class="list-inline mt-2">
                                        <li class="list-inline-item"><a href="#" class="btn-round-sm" style={{backgroundColor: '#ff3b30'}}></a></li>
                                        
                                    </ul>

                                </div>


                                <div class="bg-greyblue side-wrap rounded-lg p-4 mb-4">
                                    <div class="form-group mb-0">
                                        <label for="Search" class="fw-600 text-grey-900">Size</label>
                                    </div>
                                    <ul class="list-inline mt-2">
                                        <li class="list-inline-item mr-1"><a href="#" class="btn-round-sm lh-30 border-light-md fw-600 font-xsss border-size-md text-grey-800 ">XS</a></li>
                                        <li class="list-inline-item mr-1"><a href="#" class="btn-round-sm lh-30 border-light-md fw-600 font-xsss border-size-md text-grey-800 ">S</a></li>
                                        <li class="list-inline-item mr-1"><a href="#" class="btn-round-sm lh-30 border-light-md fw-600 font-xsss border-size-md text-grey-800 ">SM</a></li>
                                        <li class="list-inline-item mr-1"><a href="#" class="btn-round-sm lh-30 border-light-md fw-600 font-xsss border-size-md text-grey-800 ">M</a></li>
                                        <li class="list-inline-item mr-1"><a href="#" class="btn-round-sm lh-30 border-light-md fw-600 font-xsss border-size-md text-grey-800 ">L</a></li>
                                        <li class="list-inline-item mr-1"><a href="#" class="btn-round-sm lh-30 border-light-md fw-600 font-xsss border-size-md text-grey-800 ">XL</a></li>

                                    </ul>

                                </div>

                                <div class="bg-greyblue side-wrap rounded-lg p-4 mb-4">
                                    <div class="form-group mb-0">
                                        <label for="Search" class="fw-600 text-grey-900">Price</label>
                                    </div>
                                    <div class="form-group mt-3 mb-0">
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div id="slider-range" class="mb-2 noUi-target noUi-ltr noUi-horizontal noUi-background"><div class="noUi-base"><div class="noUi-origin noUi-connect" style={{left: '9.09091%'}}><div class="noUi-handle noUi-handle-lower"></div></div><div class="noUi-origin noUi-background" style={{left: '9.09091%'}}><div class="noUi-handle noUi-handle-upper"></div></div></div></div>
                                            </div>
                                        </div>
                                        <div class="row slider-labels">
                                            <div class="col-6 caption">
                                                <span id="slider-range-value1" class="font-xssss fw-700">$1,000</span>
                                            </div>
                                            <div class="col-6 text-right caption">
                                                <span id="slider-range-value2" class="font-xssss fw-700">$8,000</span>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <form>
                                                    <input type="hidden" name="min-value" value="" />
                                                    <input type="hidden" name="max-value" value="" />
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                                <div class="bg-greyblue side-wrap rounded-lg p-4 mb-4">
                                    <div class="form-group mb-0">
                                        <label for="Search" class="fw-600 text-grey-900">Brand</label>
                                    </div>
                                    <div class="form-group mb-2 mt-2">
                                        <div class="custom-control mr-0 custom-radio custom-control-inline d-block">
                                            <input type="radio" class="custom-control-input" id="customRadio1" name="Depart" value="customEx"  />
                                            <label class="custom-control-label small-size fw-600 text-grey-800 font-xsss d-block" for="customRadio1">Addidas<span class="float-right fw-500 text-grey-500 font-xssss mt-1">12</span></label>
                                        </div>
                                    </div>
                                    <div class="form-group mb-2">
                                        <div class="custom-control mr-0 custom-radio custom-control-inline d-block">
                                            <input type="radio" class="custom-control-input" id="customRadio5" name="Depart" value="customEx" />
                                            <label class="custom-control-label small-size fw-600 text-grey-800 font-xsss d-block" for="customRadio5">Levis <span class="float-right fw-500 text-grey-500 font-xssss mt-1">15</span></label>
                                        </div>
                                    </div>
                                    <div class="form-group mb-2">
                                        <div class="custom-control mr-0 custom-radio custom-control-inline d-block">
                                            <input type="radio" class="custom-control-input" id="customRadio3" name="Depart" value="customEx" />
                                            <label class="custom-control-label small-size fw-600 text-grey-800 font-xsss d-block" for="customRadio3">Cape Town <span class="float-right fw-500 text-grey-500 font-xssss mt-1">7</span></label>
                                        </div>
                                    </div>
                                    <div class="form-group mb-2">
                                        <div class="custom-control mr-0 custom-radio custom-control-inline d-block">
                                            <input type="radio" class="custom-control-input" id="customRadio4" name="Depart" value="customEx" />
                                            <label class="custom-control-label small-size fw-600 text-grey-800 font-xsss d-block" for="customRadio4">Nikes <span class="float-right fw-500 text-grey-500 font-xssss mt-1">34</span></label>
                                        </div>
                                    </div>
                                </div>

                                <div class="bg-greyblue side-wrap rounded-lg p-4 mb-4">
                                    <div class="form-group mb-0">
                                        <label for="Search" class="fw-600 text-grey-900">Recent Products</label>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="card w-100 border-0 mt-3 bg-transparent">
                                            <div class="row">
                                                <div class="float-left card-image w-25 p-2 text-center bg-white rounded-lg">
                                                    <a href="#"><img src="images/pp-17.png" alt="product-image" class="w45 mt-1" /></a>
                                                </div>
                                                <div class="float-left card-body bg-transparent w-75 pt-2 pb-0">
                                                    <h4 class="fw-600 font-xsss text-grey-500">Trimmer</h4>
                                                    <h2><a href="single-product.html" class="text-grey-800 fw-700 font-xsss lh-24">Mi XXQ02HM Runtime: 60 min Trimmer for Men </a></h2>
                                                    <h6 class="font-xsss fw-600 text-grey-500 ls-2">$49</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card w-100 border-0 mt-3 bg-transparent">
                                            <div class="row">
                                                <div class="float-left card-image w-25 p-2 text-center bg-white rounded-lg">
                                                    <a href="#"><img src="images/pp-16.png" alt="product-image" class="w45 mt-1" /></a>
                                                </div>
                                                <div class="float-left card-body bg-transparent w-75 pt-2 pb-0">
                                                    <h4 class="fw-600 font-xsss text-grey-500">Trimmer</h4>
                                                    <h2><a href="single-product.html" class="text-grey-800 fw-700 font-xsss lh-24">Mi XXQ02HM Runtime: 60 min Trimmer for Men </a></h2>
                                                    <h6 class="font-xsss fw-600 text-grey-500 ls-2">$49</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card w-100 border-0 mt-3 bg-transparent">
                                            <div class="row">
                                                <div class="float-left card-image w-25 p-2 text-center bg-white rounded-lg">
                                                    <a href="#"><img src="images/pp-5.png" alt="product-image" class="w45 mt-1" /></a>
                                                </div>
                                                <div class="float-left card-body bg-transparent w-75 pt-2 pb-0">
                                                    <h4 class="fw-600 font-xsss text-grey-500">Trimmer</h4>
                                                    <h2><a href="single-product.html" class="text-grey-800 fw-700 font-xsss lh-24">Mi XXQ02HM Runtime: 60 min Trimmer for Men </a></h2>
                                                    <h6 class="font-xsss fw-600 text-grey-500 ls-2">$49</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card w-100 border-0 mt-3 bg-transparent">
                                            <div class="row">
                                                <div class="float-left card-image w-25 p-2 text-center bg-white rounded-lg">
                                                    <a href="#"><img src="images/pp-18.png" alt="product-image" class="w45 mt-1" /></a>
                                                </div>
                                                <div class="float-left card-body bg-transparent w-75 pt-2 pb-0">
                                                    <h4 class="fw-600 font-xsss text-grey-500">Trimmer</h4>
                                                    <h2><a href="single-product.html" class="text-grey-800 fw-700 font-xsss lh-24">Mi XXQ02HM Runtime: 60 min Trimmer for Men </a></h2>
                                                    <h6 class="font-xsss fw-600 text-grey-500 ls-2">$49</h6>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <a href="#"><img src="images/c-5.jpg" alt="img" class="img-fluid rounded-lg mb-3 mt-3" /></a>
                            </div>

                    
            </>
        )
    }
}

export default ShopSideBar