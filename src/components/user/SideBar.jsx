import React from 'react';
import { isAuthenticated, userInfo, signOut } from '../../helpers/auth';
import { Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';





const SideBar = props => {
    const path = props.path
    let dashboardUrl = null;
    if (isAuthenticated && userInfo().role === 'admin') {
        dashboardUrl = (<li className={path === 'dashboard'? 'd-block rounded-lg active' : 'd-block rounded-lg'}><Link to='/admin/dashboard'  ><i className="ti-package font-sm"></i><span> Dashboard</span></Link></li>)
    } else {
        dashboardUrl = (<li className={path === 'dashboard'? 'd-block rounded-lg active' : 'd-block rounded-lg'}><Link to='/user/dashboard' ><i className="ti-package font-sm"></i><span> Dashboard</span></Link></li>)
    }
   
   
    return (
        <div>
            <ul className="dash-menu-ul">
                {dashboardUrl}
             
               {isAuthenticated() && userInfo().role ==='admin' ?  <li className={path === 'category'? 'd-block rounded-lg active' : 'd-block rounded-lg'}><Link to='/create/category'><i className="ti-pie-chart font-sm"></i><span>Category</span></Link></li> : ''}
               {isAuthenticated() && userInfo().role ==='admin' ?  <li className={path === 'product'? 'd-block rounded-lg active' : 'd-block rounded-lg'}><Link to='/create/product'><i className="ti-pie-chart font-sm"></i><span>Create Product</span></Link></li> : ''}
               {isAuthenticated() && userInfo().role ==='admin' ?  <li className={path === '/view/product'? 'd-block rounded-lg active' : 'd-block rounded-lg'}><Link to='/view/product'><i className="ti-pie-chart font-sm"></i><span>View Product</span></Link></li> : ''}
               

                <li className={path === 'profile'? 'd-block rounded-lg active' : 'd-block rounded-lg'}><Link to='/profile'><i className="ti-user font-sm"></i><span> Profile</span></Link></li>
                <li className="d-block rounded-lg "><a href="password.html"><i className="ti-lock font-sm"></i><span> Password</span></a></li>
                <li className="d-block rounded-lg "><a href="payment.html"><i className="ti-credit-card font-sm"></i><span> Payment</span></a></li>
                <li className="d-block rounded-lg"><a href="#" onClick={() => {
                    signOut(() => {
                        window.location.href ='/login'
                    })
                }} ><i className="ti-power-off font-sm"></i><span> Logout</span></a></li>

                <div className="card d-none-md w-100 mt-3 shadow-none pt-0 border-0">
                    <div className="card-body b-r-15 overflow-hidden position-relative bg-lightblue rounded-lg p-4 z-index bg-no-repeat bg-image-right">
                        <h3 className="text-grey-700 font-md lh-2 fw-900 mb-3">Online <br />Recharge</h3>
                        <a href="#" className="btn b-r-15 bg-white shadow-lg fw-700 font-xssss lh-30 w100 text-center text-grey-900">Buy Now</a>
                    </div>
                </div>
            </ul>
        </div>
    );
}

export default SideBar;
