import axios from 'axios';
import React, { Component } from 'react';
import { API } from '../../../config/config';
import SideBar from '../../user/SideBar';
import { createCategory } from '../../../api/apiAdmin';
import { isAuthenticated, userInfo } from '../../../helpers/auth';
import { Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchCategory } from '../../../redux/actionCreators/categoryActionCreators';
import { Rings } from 'react-loader-spinner';


const mapDispatchToProps = dispatch => {
    return {
        fetchCategory: () => dispatch(fetchCategory())
    }
}
const mapStateToProps = state => {
    return {
        category: state.categories,
        isLoading: state.categoryLoading,
        error: state.categoryError
    }
};

export class CreateCategory extends Component {
    state = {
        name: '',
        response: null,
        errMsg: null,
        alertOpen: false,
    }
    componentDidMount() {
        this.props.fetchCategory();
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.category !== this.props.category) {
            this.props.fetchCategory()
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        const formData = {
            name: this.state.name
        };
        let { token } = userInfo();
        token = JSON.parse(token)

        createCategory(token, formData)
            .then(response => {
                this.setState({
                    response: response.data.message,
                    name: '',
                    errMsg: null,
                })
            })
            .catch(err => {
                this.setState({
                    errMsg: err.response.data,
                    name: '',
                    response: null
                })
            })


    };
    toggleAlert = () => {
        this.setState({ alertOpen: true }, () => {
            window.setTimeout(() => {
                this.setState({ alertOpen: false })
            }, 2000)
        });

    }
    render() {

        let success = null;
        let errorMsg = null
        if (this.state.errMsg !== null) {
            errorMsg = (<Alert color='danger' isOpen={this.state.alertOpen} >{this.state.errMsg}</Alert>)
        }
        if (this.state.response) {
            success = (<Alert color='success' isOpen={this.state.alertOpen} >{this.state.response}</Alert>)
        }

        let spinner = null;
        if (this.props.isLoading === true) {
            spinner = (<Rings color='#1E74FD' width='100%' />)
        }

        const AllCategory = this.props.category.map((item,i) => {
            return (
               
                    <tr key={i}>
                        <td className="product-headline text-left wide-column">
                            <h3>
                                <a href="#" className="text-grey-900 fw-600" >{item.name}</a>
                            </h3>
                        </td>

                        <td className="product-remove text-right"><a href="#"><i className="ti-trash font-xs text-grey-500"></i></a> <a href="#"><i className="ti-eye ml-2 font-xs text-grey-500"></i></a><a href="#"><i className="ti-pencil ml-2 font-xs text-grey-500"></i></a></td>
                    </tr>
               
            )
        })




        return (
            <div >
                <div className="dashboard-wrapper bg-greylight">
                    <div className="container">
                        <div className="row">
                            {/* Side Bar Part */}
                            <div className="col-lg-3">
                                <div className="dashboard-nav bg-white rounded-lg shadow-xs">
                                    <a href="#" className="dash-menu d-none d-block-md"><i className="ti-package font-sm mr-2"></i> Menu <i className="ti-angle-down font-xsss float-right "></i></a>
                                    <SideBar path={'category'} />
                                </div>
                            </div>


                            <div className="col-lg-9">
                                {success}
                                {errorMsg}
                                <div className="dashboard-tab cart-wrapper p-5 bg-white rounded-lg shadow-xs">
                                    <h1 style={{ textAlign: 'left' }}>Create Category</h1>

                                    <form onSubmit={this.handleSubmit} >
                                        <div className="row justify-content-left">
                                            <div className="col-lg-6 mb-3">
                                                <div className="form-gorup">
                                                    <label className="mont-font fw-600 font-xsss" >Category Name</label>
                                                    <input type="text" onChange={this.handleChange} value={this.state.name} name="name" className="form-control" />
                                                    <div>
                                                        <button type='submit' onClick={this.toggleAlert} className='form-group col-lg-12 mt-3 btn btn-primary btn-lg'>Save</button>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="row justify-content-left">

                                            <h1>All Categories</h1>
                                            <div className="col-lg-12 mb-0 mt-2 pl-0">

                                                <div className="table-content table-responsive">
                                                    <table className="table text-center">
                                                        <thead className="bg-greyblue rounded-lg">
                                                            <tr>

                                                                <th className="border-0 p-3 text-left">Name</th>
                                                                <th className="border-0 p-3">&nbsp;</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            {AllCategory}


                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </form>


                                </div>

                            </div>

                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCategory);
