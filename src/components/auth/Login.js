import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';
import { loginUser } from '../../redux/actionCreators/authActionCreators';
import Spinner from '../Loader/Spinner';

const mapDispatchToProps = dispatch => {
    return {
        loginUser: (email, password) => dispatch(loginUser(email, password))
    }
};
const mapStateToProps = state => {
    return {
        isLoading: state.authLoading
    }
}



class Login extends Component {
    state = {
        email: '',
        password: '',
    }
    inputHandler = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })

    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.loginUser(this.state.email, this.state.password)
    }
    render() {
        let form = {}
        if (this.props.isLoading === true) {
            form = <Spinner />
        } else {
            form = (
                <form onSubmit={this.handleSubmit}>
                    <h2>Login here</h2>
                    <div className="form-group icon-tab mb-3">
                        <input type="text" className="form-control h60 border-2 bg-color-none text-grey-700" name='email' value={this.state.email} onChange={this.inputHandler} placeholder='type your email' />
                        <i className="ti-email text-grey-700 pr-0"></i>
                    </div>
                    <div className="form-group icon-tab mb-1">
                        <input type="text" className="form-control h60 border-2 bg-color-none text-grey-700" name='password' value={this.state.password} onChange={this.inputHandler} placeholder='type your Password' />
                        <i className="ti-lock text-grey-700 pr-0"></i>
                    </div>
                    <button type='submit' className='form-group col-lg-12 mt-3 btn btn-primary btn-lg' >Sign In</button>
                    <div className="form-check text-left mb-3">
                        <input type="checkbox" className="form-check-input mt-2" id="exampleCheck1" />
                        <label className="form-check-label font-xsss text-grey-500" htmlFor="exampleCheck1" >Remember me</label>
                        <a href="#" className="fw-600 font-xsss text-grey-700 mt-1 float-right">Forgot your Password?</a><br />
                        {/* <a href="#" className="form-control h60 bg-current text-white font-xss fw-500 border-2 border-0 p-0">Login</a> */}

                    </div>
                </form>
            )
        }
        return (
            <div>
                <div className="page-nav bg-lightblue">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center"><h1 className="text-grey-800 fw-700 mont-font display4-size">Sign In</h1></div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className="row justify-content-center ">
                        <div className='col-lg-6' style={{ marginTop: '30px' }}>

                        {form}

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
