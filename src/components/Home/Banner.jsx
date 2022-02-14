import React from 'react';
import appleWatch from '../../assets/images/bg-6.jpg'

function Banner() {
  return <>
      <div class="feature-product pt-7 pb-7 " style={{backgroundImage:`url(${appleWatch})`}}>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="card w-100 rounded-lg p-5 border-0 ">
                            <h3 class="fw-300 text-success font-sm mb-3">Save upto<b> 50%</b></h3>
                           
                            <h2 class="fw-900 display2-size text-grey-800 mb-2">Apple watch Series 3 GPS - 42 mm</h2>
                            <h6 class="display3-size fw-700 text-success ls-2 mb-5"><span class="font-xl">$</span>449 <span class="font-xs text-grey-500" style={{textDecoration: 'line-through'}}>$699</span></h6>
                            <div   class="timer"></div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default Banner;
