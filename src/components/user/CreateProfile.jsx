import React, { Component } from 'react'
import { createProfile } from '../../api/apiProfile';
import { userInfo } from '../../helpers/auth';
import { success, danger } from '../../helpers/Notification';
import SideBar from './SideBar';
export class CreateProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            country: '',
            address: '',
            city: '',
            postCode: '',
            photo: '',
            formData: ''

        }
    }

    componentDidMount = () => {
        this.setState({
            formData: new FormData()
        })
    }

    handleChange = e => {
        const values = e.target.name === 'photo' ? e.target.files[0] : e.target.value;
        this.state.formData.set(e.target.name, values)
        this.setState({
            [e.target.name]: values
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const token = JSON.parse(localStorage.getItem('token'));
        createProfile(token, this.state.formData)
            .then(response => {
                this.setState({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    country: '',
                    address: '',
                    city: '',
                    postCode: '',
                    photo: ''
                })
                success(response.data);

            })
            .catch(error => {
                danger(error.response.data)
            })


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
                                    <figure className="avatar ml-auto mr-auto mb-0 mt-2 w100"><img src="images/t-1.jpg" alt="image" className="shadow-sm rounded-lg w-100" /></figure>
                                    <h2 className="fw-900 font-sm text-grey-900 mt-3">Surfiya Zakir</h2>
                                    <h4 className="text-grey-500 fw-500 mb-3 font-xsss mb-4">Brooklyn</h4>

                                </div>
                            </div>
                            <form onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6 mb-3">
                                        <div className="form-gorup">
                                            <label className="mont-font fw-600 font-xsss" >First Name</label>
                                            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 mb-3">
                                        <div className="form-gorup">
                                            <label className="mont-font fw-600 font-xsss" >Last Name</label>
                                            <input type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName} className="form-control" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6 mb-3">
                                        <div className="form-gorup">
                                            <label className="mont-font fw-600 font-xsss" >Email</label>
                                            <input type="text" name="email" onChange={this.handleChange} value={this.state.email} className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 mb-3">
                                        <div className="form-gorup">
                                            <label className="mont-font fw-600 font-xsss" >Phone</label>
                                            <input type="text" name="phone" onChange={this.handleChange} value={this.state.phone} className="form-control" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12 mb-3">
                                        <div className="form-gorup">
                                            <label className="mont-font fw-600 font-xsss" >Country</label>
                                            <input type="text" name="country" onChange={this.handleChange} value={this.state.country} className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 mb-3">
                                        <div className="form-gorup">
                                            <label className="mont-font fw-600 font-xsss" >Address</label>
                                            <input type="text" name="address" onChange={this.handleChange} value={this.state.address} className="form-control" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6 mb-3">
                                        <div className="form-gorup">
                                            <label className="mont-font fw-600 font-xsss" >Twon / City</label>
                                            <input type="text" name="city" onChange={this.handleChange} value={this.state.city} className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 mb-3">
                                        <div className="form-gorup">
                                            <label className="mont-font fw-600 font-xsss" >Postcode</label>
                                            <input type="text" name="postCode" onChange={this.handleChange} value={this.state.postCode} className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 mb-3">
                                        <div className="card mt-3 border-0">
                                            <div className="card-body d-flex justify-content-between align-items-end p-0">
                                                <div className="form-group mb-0 w-100">
                                                    <input type='file' name='photo' onChange={this.handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                   

                                    <div className="col-lg-12 mb-5">
                                        <a href="#" className="bg-current text-center text-white font-xsss fw-600 p-3 w175 rounded-lg d-inline-block">Save</a>
                                    </div>
                                </div>







                                <div className="row">





                                    <div className="col-lg-12 mb-0 mt-2 pl-0">
                                        <button href="#" className='form-group col-lg-12 mt-3 btn btn-primary btn-lg'>Save</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default CreateProfile