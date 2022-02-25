import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideBar from '../../user/SideBar';
import { fetchCategory } from '../../../redux/actionCreators/categoryActionCreators';
import { createProducts } from '../../../api/apiAdmin';
import { userInfo } from '../../../helpers/auth';
import { Alert } from 'reactstrap';



const mapStateToProps = state => {
    return {
        categories: state.categories,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCategory: () => dispatch(fetchCategory()),
    }
}

export class CreateProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {

            name: '',
            description: '',
            price: '',
            category: '',
            quantity: '',
            photo: '',
            formData: '',

            responseMsg: null,
            errMsg: null,
            alertOpen: false,
            isLoading: false,
        }
    }

    componentDidMount() {
        this.props.fetchCategory();
        this.setState({
            formData: new FormData(),
        })
    }
    handleChange = event => {
        const values = event.target.name === 'photo' ? event.target.files[0] : event.target.value;
        this.state.formData.set(event.target.name, values)
        this.setState({
            [event.target.name]: values
        })
        
    }
    handleSubmit = e => {
        this.setState({
            isLoading: true,
        })
        e.preventDefault();
        let { token } = userInfo();
        token = JSON.parse(token)
        createProducts(token, this.state.formData)
            .then(res => {
                this.setState({
                    name: '',
                    description: '',
                    price: '',
                    category: '',
                    quantity: '',
                    responseMsg: res.data.message,
                    errMsg: '',
                    isLoading: false,

                })
            })
            .catch(error => {
                this.setState({
                    errMsg: error.response.data,
                    isLoading: false,
                })
            })


    }

    toggleAlert = () => {
        this.setState({ alertOpen: true }, () => {
            window.setTimeout(() => {
                this.setState({ alertOpen: false })
            }, 2000)
        });

    }
    render() {
        const fetchedCategories = this.props.categories;
        let alert = null;
        if (this.state.responseMsg !== null) {
            alert = (<Alert color='success' isOpen={this.state.alertOpen}>{this.state.responseMsg}</Alert>)
        } else if (this.state.errMsg !== null) {
            alert = (<Alert color='danger' isOpen={this.state.alertOpen}>{this.state.errMsg}</Alert>)
        }

        return (
            <div>
                <div className="dashboard-wrapper bg-greylight">
                    <div className="container">
                        <div className="row">
                            {/* Side Bar Part */}
                            <div className="col-lg-3">
                                <div className="dashboard-nav bg-white rounded-lg shadow-xs">
                                    <a href="#" className="dash-menu d-none d-block-md"><i className="ti-package font-sm mr-2"></i> Menu <i className="ti-angle-down font-xsss float-right "></i></a>
                                    <SideBar path={'product'} />
                                </div>
                            </div>


                            <div className="col-lg-9">
                                <div className="dashboard-tab cart-wrapper p-5 bg-white rounded-lg shadow-xs">
                                    <div className="row">
                                        <div className="col-lg-4 offset-sm-4 text-center">

                                            <h2 className="fw-900 font-sm text-grey-900 mt-3">Create Product</h2> <br />


                                        </div>
                                    </div>

                                    <form onSubmit={this.handleSubmit}>
                                        {alert}
                                        <div className="row">
                                            <div className="col-lg-6 mb-3">
                                                <div className="form-gorup">
                                                    <label className="mont-font fw-600 font-xsss" >Product Name</label>
                                                    <input type="text" name="name" onChange={this.handleChange} value={this.state.name} className="form-control" />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 mb-3">
                                                <div className="form-gorup">
                                                    <label className="mont-font fw-600 font-xsss" >Product Price</label>
                                                    <input type="text" name="price" onChange={this.handleChange} value={this.state.price} className="form-control" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 mb-3">
                                                <div className="form-gorup">
                                                    <label className="mont-font fw-600 font-xsss" >Category</label>
                                                    <select className="form-control" name='category' onChange={this.handleChange} value={this.state.category} id="exampleFormControlSelect1">
                                                        {fetchedCategories && fetchedCategories.map((item, i) => {
                                                            return (
                                                              
                                                                <option value={item._id} key={i}>{item.name}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 mb-3">
                                                <div className="form-gorup">
                                                    <label className="mont-font fw-600 font-xsss" >Quantity</label>
                                                    <input type="text" name="quantity" onChange={this.handleChange} value={this.state.quantity} className="form-control" />
                                                </div>
                                            </div>
                                        </div>



                                        <div className="row">

                                            <div className="col-lg-12 mb-3">
                                                <label className="mont-font fw-600 font-xsss" >Description</label>
                                                <textarea onChange={this.handleChange} name='description' value={this.state.description} className="form-control  mb-0 p-3 h100 bg-greylight lh-16" rows="5" placeholder="Write your message..." spellCheck="false"></textarea>
                                            </div>


                                        </div>
                                        <div className="col-lg-12 mb-3">
                                            <div className="card mt-3 border-0">
                                                <div className="card-body d-flex justify-content-between align-items-end p-0">
                                                    <div className="form-group mb-0 w-100">
                                                        <input type="file" onChange={this.handleChange}  name="photo" id="file" className="input-file" />
                                                        <label htmlFor="file" className="rounded-lg text-center bg-white btn-tertiary js-labelFile p-4 w-100 border-dashed">
                                                            <i className="ti-cloud-down large-icon mr-3 d-block"></i>
                                                            <span className="js-fileName">Upload Product Image</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">

                                            <div className="col-lg-12 mb-0 mt-2 pl-0">
                                                <button type='submit' onClick={this.toggleAlert} className='form-group col-lg-12 mt-3 btn btn-primary btn-lg'>Save</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct);

