import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideBar from './SideBar';
import { fetchProfile } from '../../redux/actionCreators/profileActionCreators';
import { userInfo } from '../../helpers/auth';
import { API } from '../../config/config';
import { Link } from 'react-router-dom';


const mapStateToProps = state => {
    return {
        profile: state.profile
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchProfile: (token) => (dispatch(fetchProfile(token)))
    }
}

export class Profile extends Component {
    componentDidMount() {
        const token = JSON.parse(localStorage.getItem('token'))
        this.props.fetchProfile(token)
    }
    render() {


        return (
            <div>
                <div className="dashboard-wrapper bg-greylight">
                    <div className="container">
                        <div className="row">
                            {/* Side Bar Part */}
                            <div className="col-lg-3">
                                <div className="dashboard-nav bg-white rounded-lg shadow-xs">
                                    <a href="#" className="dash-menu d-none d-block-md"><i className="ti-package font-sm mr-2"></i> Menu <i className="ti-angle-down font-xsss float-right "></i></a>
                                    <SideBar path={'profile'} />
                                </div>
                            </div>


                            <div className="col-lg-9">
                                <div className="dashboard-tab cart-wrapper p-5 bg-white rounded-lg shadow-xs">
                                    <div className="row">
                                        <div className="col-lg-4 offset-sm-4 text-center">
                                            <figure className="avatar ml-auto mr-auto mb-0 mt-2 w100"><img src={`${API}/profile/photo/${this.props.profile._id}`} alt="image" className="shadow-sm rounded-lg w-100" style={{ height: '120px' }} /></figure>
                                            <h2 className="fw-900 font-sm text-grey-900 mt-3">{this.props.profile.firstName} {this.props.profile.lastName}</h2>


                                        </div>
                                        <div className='col-lg-12'>
                                            <div class="card">
                                                <h5 class="card-header">Profile Details</h5>
                                                <div class="card-body">
                                               {this.props.profile.email ? (
                                                   <>
                                                             <ul class="list-group list-group-flush">
                                                        <li class="list-group-item"><label className="mont-font fw-600 font-xsss" >First Name</label> : <label className="mont-font fw-600 font-xsss" >{this.props.profile.firstName}</label></li>
                                                        <li class="list-group-item"><label className="mont-font fw-600 font-xsss" >Last Name</label> : <label className="mont-font fw-600 font-xsss" >{this.props.profile.lastName}</label></li>
                                                        <li class="list-group-item"><label className="mont-font fw-600 font-xsss" >Account Email</label> : <label className="mont-font fw-600 font-xsss" >{this.props.profile.email}</label></li>
                                                        <li class="list-group-item"><label className="mont-font fw-600 font-xsss" >Contact Number</label> : <label className="mont-font fw-600 font-xsss" >{this.props.profile.phone}</label></li>
                                                        <li class="list-group-item"><label className="mont-font fw-600 font-xsss" >Country </label> : <label className="mont-font fw-600 font-xsss" >{this.props.profile.country}</label></li>

                                                        <li class="list-group-item"><label className="mont-font fw-600 font-xsss" > Address</label> : <label className="mont-font fw-600 font-xsss" >{this.props.profile.address}</label></li>

                                                        <li class="list-group-item"><label className="mont-font fw-600 font-xsss" >City </label> : <label className="mont-font fw-600 font-xsss" >{this.props.profile.city}</label></li>

                                                        <li class="list-group-item"><label className="mont-font fw-600 font-xsss" >Postal Code </label> : <label className="mont-font fw-600 font-xsss" >{this.props.profile.postCode}</label></li>
                                                    </ul><br />
                                                   </>
                                               ) : ''}
                                                   {!this.props.profile.email ? ( <Link to='/create-profile' class="btn btn-primary">Create New Profile</Link>) : ( <Link to='/update-profile' class="btn btn-primary">Update your Profile</Link>)}
                                                </div>
                                                
                                            </div>
                                            
                                        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
