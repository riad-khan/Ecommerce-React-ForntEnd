import axios from 'axios';
import { ErrorMessage } from 'formik';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'reactstrap';
import googleIcon from '../../assets/images/google-icon.png';
import facebookIcon from '../../assets/images/icon-facebook.png';
import { API } from '../../config/config';

export class Register extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        responseMsg: null,
        errMsg: null,
        alertOpen: false,
    }
    inputHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value

        })
    }
    toggleAlert = () => {
        this.setState({ alertOpen: true }, () => {
            window.setTimeout(() => {
                this.setState({ alertOpen: false })
            }, 2000)
        });
    }
    handleSubmit = event => {
        event.preventDefault();
        const formData = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        axios.post(`${API}/user/sign-up`, formData, {
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => {
                this.setState({
                    responseMsg: res.data.message,
                    name:'',
                    email :'',
                    password:''
                })
            })
            .catch(error => {
                this.setState({
                    errMsg: error.response.data
                })
            })

    }
    render() {
        let alert = null
        if (this.state.responseMsg !== null) {
            alert = (<Alert isOpen={this.state.alertOpen} color='success' >{this.state.responseMsg}</Alert>)
        } else if (this.state.errMsg !== null) {
            alert = (<Alert isOpen={this.state.alertOpen} color='danger'>{this.state.errMsg}</Alert>)
        }

        return (
            <div>
                <div className="page-nav bg-lightblue">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center"><h1 className="text-grey-800 fw-700 mont-font display4-size">Sign up</h1></div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className="col-lg-12 vh-100 align-items-center d-flex  rounded-lg overflow-hidden">
                            <div className="card shadow-none w-50 w-md--75 w-sm--90 p-lg-5 p-3 border-0 ml-auto mr-auto">
                                <div className="card-body rounded-0 text-left pt-0">
                                    <h2 className="fw-600 display2-size display2-md-size mb-4">Create <br />your account</h2>
                                    {alert}
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group mb-3">

                                            <input type="text" name='name' placeholder='type your name' onChange={this.inputHandler} className="form-control h60 border-2 bg-color-none text-grey-700" value={this.state.name} required />
                                        </div>
                                        <div className="form-group mb-3">

                                            <input type="text" name='email' placeholder='type your Email' onChange={this.inputHandler} className="form-control h60 border-2 bg-color-none text-grey-700" value={this.state.email} required />
                                        </div>
                                        <div className="form-group icon-tab mb-3">
                                            <input type="text" name='password' placeholder='type your Password' onChange={this.inputHandler} className="form-control h60 border-2 bg-color-none text-grey-700" value={this.state.password} required />
                                            <i className="ti-lock text-grey-700 pr-0"></i>
                                        </div>
                                        <div className="form-group icon-tab mb-3">
                                            <input type="text" name='confirmPassword' placeholder='type your confirm Password' onChange={this.inputHandler} className="form-control h60 border-2 bg-color-none text-grey-700" value={this.state.confirmPassword} required />
                                            <i className="ti-lock text-grey-700 pr-0"></i>
                                        </div>
                                        <button type='submit' onClick={this.toggleAlert} className='form-group col-lg-12 mt-3 btn btn-primary btn-lg' >Sign up</button>
                                    </form>

                                    <div className="col-sm-12 p-0 text-center">
                                        <a href="#" className="form-control h60 bg-current text-white font-xss fw-500 border-2 border-0 p-0">Create an account</a>
                                        <h6 className="text-grey-500 font-xsss fw-500 mt-2 mb-4 lh-32">Are you already member? <Link to='/login' className="fw-700 ml-1">Login</Link></h6>
                                        <div className="row">
                                            <div className="col-md-6 pr-lg-1 mb-xs-2"><a href="#" className="form-control h60 p-0 pl-5 bg-lightblue text-grey-700 border-2 border-0 font-xssss fw-600 text-left position-relative"><img src={facebookIcon} style={{ width: '30px', position: 'absolute', left: '10px', top: '15px' }} alt="" /> Connect with Facebook</a></div>
                                            <div className="col-md-6 pl-lg-1"><a href="#" className="form-control h60 p-0 pl-5 bg-lightblue text-grey-700 border-2 border-0 font-xssss fw-600 text-left position-relative">
                                                <img src={googleIcon} style={{ width: '30px', position: 'absolute', left: '10px', top: '15px' }} alt="" />
                                                Connect with Google</a>
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

export default Register;
