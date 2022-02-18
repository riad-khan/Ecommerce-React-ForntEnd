import React, { Component } from 'react'

export class PriceFilter extends Component {
    state = {
        value:[],
        
    }
    handlePrice = e => {
        const maxValue = e.target.value;
        this.setState({
            value: maxValue
        })
       this.props.handlePrice(e.target.value)
    }
  render() {
    return (
      <div>
               <div className="bg-greyblue side-wrap rounded-lg p-4 mb-4">
                        <div className="form-group mb-0">
                            <label htmlFor="Search" className="fw-600 text-grey-900">Price</label>
                        </div>
                        <div className="form-group mt-3 mb-0">
                        <label htmlFor="Search" className="fw-600 text-grey-900">Choose your Price Range</label>
                            <div className="row">
                                
                                <div className="col-sm-9">

                                <input type="range" class="form-range" min="500" value={this.state.value} onChange={this.handlePrice} max="200000" step="0.5" id="customRange3" step="1000" />
                                <input type='text'  disabled value={`${this.state.value} Tk`} /> 
                                </div>
                                
                            </div>
                            <div className="col-sm-3">

                                
                                </div>
                            <div class="row slider-labels">
                                    <div class="col-6 caption">
                                      <span id="slider-range-value1" class="font-xssss fw-700">Min :500 Tk</span>
                                    </div>
                                    <div class="col-6 text-right caption">
                                      <span id="slider-range-value2" class="font-xssss fw-700">Max :200000 Tk</span>
                                    </div>
                                  </div>

                          
                        </div>

                    </div>
      </div>
    )
  }
}

export default PriceFilter