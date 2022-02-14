import React, { Component } from 'react'
import avatar from '../../assets/images/user-8.png';
import stars from '../../assets/images/star.png'
export class ProductDescription extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render() {
        return (
            <div>
                <div className="info-wrappper pt-lg--7 pt-5 pb-lg--7 pb-0">
                    <div className="container">
                        <div className="product-info">
                            <div className="row">
                                <div className="col-sm-12" id="exTab1">
                                    <ul className="nav nav-pills mb-3 product-info-tab" id="pills-tab" role="tablist">
                                        <li className="nav-item"><a className="nav-link fmont active show" id="pills-home-tab" data-toggle="pill" href="#pills-description" role="tab" aria-controls="pills-home" aria-selected="false">Description</a></li>
                                        <li className="nav-item"><a className="nav-link fmont" id="pills-profile-tab" data-toggle="pill" href="#pills-info" role="tab" aria-controls="pills-profile" aria-selected="false">Additional information</a></li>
                                        <li className="nav-item"><a className="nav-link fmont " id="pills-contact-tab" data-toggle="pill" href="#pills-review" role="tab" aria-controls="pills-contact" aria-selected="true">Review</a></li>
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane pt-4 pb-4 fade active show" id="pills-description" role="tabpanel" aria-labelledby="pills-home-tab">
                                            <p className="font-xsss fw-500 text-grey-500 lh-30">{this.props.details}</p>
                                          
                                           
                                        </div>
                                        <div className="tab-pane pt-4 pb-4 fade" id="pills-info" role="tabpanel" aria-labelledby="pills-profile-tab">
                                            <p className="font-xsss fw-500 text-grey-500 lh-30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                            <p className="font-xsss fw-500 text-grey-500 lh-30">Nunc lacus elit, faucibus ac laoreet sed, dapibus ac mi. Maecenas eu ante a elit tempus fermentum. Aliquam commodo tincidunt semper. Phasellus accumsan, justo ac mollis pharetra, ex dui pharetra nisl, a scelerisque ipsum nulla ac sem. Cras eu risus urna. Duis lorem sapien, congue eget nisl sit amet, rutrum faucibus elit.</p>
                                        </div>
                                        <div className="tab-pane pt-4 pb-4 fade" id="pills-review" role="tabpanel" aria-labelledby="pills-contact-tab">
                                            <div class="section full mb-3">
                                                <div class="row">
                                                    <div class="col-2 text-left">
                                                        <figure class="avatar float-left mb-0"><img src={avatar} alt="image" class="float-right shadow-none w50" /></figure>
                                                    </div>
                                                    <div class="col-10 pl-4">
                                                        <div class="content">
                                                            <h6 class="author-name font-xss fw-600 mb-0 text-grey-800">Hurin Seary</h6>
                                                            <time class="time font-xssss fw-500 text-grey-500 mt-0">July 26 at 8:20 PM</time>
                                                            <div class="star d-block w-100 text-left">
                                                                <img src={stars} alt="star" class="w15" />
                                                                <img src={stars} alt="star" class="w15" />
                                                                <img src={stars} alt="star" class="w15" />
                                                                <img src={stars} alt="star" class="w15" />
                                                                {/* <img src="images/star-disable.png" alt="star" class="w15" /> */}
                                                            </div>
                                                            <p class="comment-text lh-24 font-xssss text-grey-600 mt-2">Enjoyed this a lot and well done. We are an early stage digitally native vertical brand, making travel bags. </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="#" class="btn-block rounded-lg btn-round-lg mb-3 bg-white w-100 position-relative text-center font-xssss fw-600 text-grey-700 dark-text-white">Add Review</a>
                                            </div>
                                        </div>
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

export default ProductDescription