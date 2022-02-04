import React from 'react';
import { Link } from 'react-router-dom';
import notFoundIcon from '../assets/images/error--v3.gif';


function NotFound() {
  return (
      <div>
         <div class="vertical-wrapper p-150">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 text-center default-page">
                        <div class="card w-75 border-0 text-center d-block">
                            <img src={notFoundIcon} alt="icon" class="w150 mb-4 ml-auto mr-auto " />
                            <h1 class="fw-700 text-grey-900 display4-size">Oops! It looks like you're lost.</h1>
                            <p class="text-grey-500 font-xss">The page you're looking for isn't available. Try to search again or use the go to.</p>
                            <Link to='/' className='form-group col-lg-4 mt-3 btn btn-primary btn-lg' >Home Page</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
  );
}

export default NotFound;
