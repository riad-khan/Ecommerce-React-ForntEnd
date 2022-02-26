import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { initPayment } from '../../api/apiOrder'


export class Payment extends Component {
    state ={
        paymentSuccess: false,
        paymentFailed : false,
        redirectUrl : '',
    }
    componentDidMount(){
        const token = JSON.parse(localStorage.getItem('token'));
        initPayment(token)
        .then(response =>{
            if(response.data.status === "SUCCESS"){
                this.setState({
                    paymentSuccess : true,
                    paymentFailed : false,
                    redirectUrl : response.data.GatewayPageURL
                })
            }
        })
        .catch(error =>{
            this.setState({
                paymentFailed : true,
                paymentSuccess : false,
            })
        })
    }
  render() {
    return (
      <div>
          {this.state.paymentSuccess ? window.location = this.state.redirectUrl : 'Payment is processing'}
          {this.state.paymentFailed ? (<><p>Failed to create payment sessions</p><Link to='/cart'>Goto Cart</Link></>) : ''}
          
          </div>
    )
  }
}

export default Payment