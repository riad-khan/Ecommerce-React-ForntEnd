import React, { Component } from 'react';
import SideBar from '../user/SideBar';
import { PieChart, Pie, Sector, Cell } from 'recharts';

import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
} from 'recharts';

const pieChartData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
];
const data = [
    {
        name: 'Page A',
        uv: 590,
        pv: 800,
        amt: 1400,
        cnt: 490,
    },
    {
        name: 'Page B',
        uv: 868,
        pv: 967,
        amt: 1506,
        cnt: 590,
    },
    {
        name: 'Page C',
        uv: 1397,
        pv: 1098,
        amt: 989,
        cnt: 350,
    },
    {
        name: 'Page D',
        uv: 1480,
        pv: 1200,
        amt: 1228,
        cnt: 480,
    },
    {
        name: 'Page E',
        uv: 1520,
        pv: 1108,
        amt: 1100,
        cnt: 460,
    },
    {
        name: 'Page F',
        uv: 1400,
        pv: 680,
        amt: 1700,
        cnt: 380,
    },
];
export class AdminDashBoard extends Component {
    render() {
console.log(this.props);
        return (<div>
            <div className="dashboard-wrapper bg-greylight">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="dashboard-nav bg-white rounded-lg shadow-xs">
                                <a href="#" className="dash-menu d-none d-block-md"><i className="ti-package font-sm mr-2"></i> Menu <i className="ti-angle-down font-xsss float-right "></i></a>
                                <SideBar path={'dashboard'} />
                            </div>
                        </div>

                        <div className="col-lg-9">
                            <div className="dashboard-tab p-4 rounded-lg shadow-xs bg-white">

                                <div className="row">
                                

                                 

                              

                                    <div className="col-lg-12 mt-0">
                                        <div className="card w-100 p-0 rounded-xxl border-0 bg-white theme-light-bg  shadow-md">
                                            <div className="card-body p-4">
                                                <ComposedChart
                                                    width={700}

                                                    height={400}
                                                    data={data}
                                                    margin={{
                                                        top: 20,
                                                        right: 20,
                                                        bottom: 20,
                                                        left: 20,
                                                    }}
                                                >
                                                    <CartesianGrid stroke="#f5f5f5" />
                                                    <XAxis dataKey="name" scale="band" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Legend />
                                                    <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                                                    <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                                                    <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                                                    <Scatter dataKey="cnt" fill="red" />
                                                </ComposedChart>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 mt-3 cart-wrapper">
                                        <div className="table-content table-responsive shadow-md">
                                            <table className="table text-center bg-white rounded-xxl ">

                                                <tbody >
                                                    <tr><td></td></tr>
                                                    <tr>
                                                        <td className="product-thumbnail pl-4 text-left">
                                                            <img src="images/p-1-1.jpg" alt="Product Thumnail" className="w75 rounded-lg" />
                                                        </td>
                                                        <td className="product-headline text-left wide-column">
                                                            <h3>
                                                                <a href="#" className="text-grey-900 fw-600">Super skinny blazer</a>
                                                            </h3>
                                                        </td>
                                                        <td className="product-p">
                                                            <span className="product-price-wrapper">
                                                                <span className="money text-grey-500 fw-500">$49.00</span>
                                                            </span>
                                                        </td>
                                                        <td className="product-quantity">
                                                            <div className="quantity">
                                                                <input type="number" className="quantity-input" name="qty" id="qty-1" value="1" min="1" />
                                                                <div className="dec qtybutton">-</div><div className="inc qtybutton">+</div></div>
                                                        </td>
                                                        <td className="product-total-price">
                                                            <span className="product-price-wrapper">
                                                                <span className="money fmont"><strong>$49.00</strong></span>
                                                            </span>
                                                        </td>
                                                        <td className="product-remove text-right"><a href="#"><i className="ti-trash font-xs text-grey-500"></i></a> <a href="#"><i className="ti-eye ml-2 font-xs text-grey-500"></i></a><a href="#"><i className="ti-pencil ml-2 font-xs text-grey-500"></i></a></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="product-thumbnail pl-4 text-left">
                                                            <img src="images/p-4-1.jpg" alt="Product Thumnail" className="w75 rounded-lg" />
                                                        </td>
                                                        <td className="product-headline text-left wide-column">
                                                            <h3>
                                                                <a href="#" className="text-grey-900 fw-600"> Jogging trousers</a>
                                                            </h3>
                                                        </td>
                                                        <td className="product-p">
                                                            <span className="product-price-wrapper">
                                                                <span className="money text-grey-500 fw-500">$49.00</span>
                                                            </span>
                                                        </td>
                                                        <td className="product-quantity">
                                                            <div className="quantity">
                                                                <input type="number" className="quantity-input" name="qty" id="qty-2" value="1" min="1" />
                                                                <div className="dec qtybutton">-</div><div className="inc qtybutton">+</div></div>
                                                        </td>
                                                        <td className="product-total-price">
                                                            <span className="product-price-wrapper">
                                                                <span className="money fmont"><strong>$49.00</strong></span>
                                                            </span>
                                                        </td>
                                                        <td className="product-remove text-right"><a href="#"><i className="ti-trash font-xs text-grey-500"></i></a> <a href="#"><i className="ti-eye ml-2 font-xs text-grey-500"></i></a><a href="#"><i className="ti-pencil ml-2 font-xs text-grey-500"></i></a> </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="product-thumbnail pl-4 text-left">
                                                            <img src="images/p-3-1.jpg" alt="Product Thumnail" className="w75 rounded-lg" />
                                                        </td>
                                                        <td className="product-headline text-left wide-column">
                                                            <h3>
                                                                <a href="#" className="text-grey-900 fw-600"> Grey blue leather backpack</a>
                                                            </h3>
                                                        </td>
                                                        <td className="product-p">
                                                            <span className="product-price-wrapper">
                                                                <span className="money text-grey-500 fw-500">$49.00</span>
                                                            </span>
                                                        </td>
                                                        <td className="product-quantity">
                                                            <div className="quantity">
                                                                <input type="number" className="quantity-input" name="qty" id="qty-3" value="1" min="1" />
                                                                <div className="dec qtybutton">-</div><div className="inc qtybutton">+</div></div>
                                                        </td>
                                                        <td className="product-total-price">
                                                            <span className="product-price-wrapper">
                                                                <span className="money fmont"><strong>$49.00</strong></span>
                                                            </span>
                                                        </td>
                                                        <td className="product-remove text-right"><a href="#"><i className="ti-trash font-xs text-grey-500"></i></a> <a href="#"><i className="ti-eye ml-2 font-xs text-grey-500"></i></a><a href="#"><i className="ti-pencil ml-2 font-xs text-grey-500"></i></a></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="product-thumbnail pl-4 text-left">
                                                            <img src="images/p-2-1.jpg" alt="Product Thumnail" className="w75 rounded-lg" />
                                                        </td>
                                                        <td className="product-headline text-left wide-column">
                                                            <h3>
                                                                <a href="#" className="text-grey-900 fw-600">Dress with belt</a>
                                                            </h3>
                                                        </td>
                                                        <td className="product-p">
                                                            <span className="product-price-wrapper">
                                                                <span className="money text-grey-500 fw-500">$49.00</span>
                                                            </span>
                                                        </td>
                                                        <td className="product-quantity">
                                                            <div className="quantity">
                                                                <input type="number" className="quantity-input" name="qty" id="qty-4" value="1" min="1" />
                                                                <div className="dec qtybutton">-</div><div className="inc qtybutton">+</div></div>
                                                        </td>
                                                        <td className="product-total-price">
                                                            <span className="product-price-wrapper">
                                                                <span className="money fmont"><strong>$49.00</strong></span>
                                                            </span>
                                                        </td>
                                                        <td className="product-remove text-right"><a href="#"><i className="ti-trash font-xs text-grey-500"></i></a> <a href="#"><i className="ti-eye ml-2 font-xs text-grey-500"></i></a><a href="#"><i className="ti-pencil ml-2 font-xs text-grey-500"></i></a></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="product-thumbnail pl-4 text-left">
                                                            <img src="images/p-1-1.jpg" alt="Product Thumnail" className="w75 rounded-lg" />
                                                        </td>
                                                        <td className="product-headline text-left wide-column">
                                                            <h3>
                                                                <a href="#" className="text-grey-900 fw-600">Super skinny blazer</a>
                                                            </h3>
                                                        </td>
                                                        <td className="product-p">
                                                            <span className="product-price-wrapper">
                                                                <span className="money text-grey-500 fw-500">$49.00</span>
                                                            </span>
                                                        </td>
                                                        <td className="product-quantity">
                                                            <div className="quantity">
                                                                <input type="number" className="quantity-input" name="qty" id="qty-1" value="1" min="1" />
                                                                <div className="dec qtybutton">-</div><div className="inc qtybutton">+</div></div>
                                                        </td>
                                                        <td className="product-total-price">
                                                            <span className="product-price-wrapper">
                                                                <span className="money fmont"><strong>$49.00</strong></span>
                                                            </span>
                                                        </td>
                                                        <td className="product-remove text-right"><a href="#"><i className="ti-trash font-xs text-grey-500"></i></a> <a href="#"><i className="ti-eye ml-2 font-xs text-grey-500"></i></a><a href="#"><i className="ti-pencil ml-2 font-xs text-grey-500"></i></a></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="product-thumbnail pl-4 text-left">
                                                            <img src="images/p-4-1.jpg" alt="Product Thumnail" className="w75 rounded-lg" />
                                                        </td>
                                                        <td className="product-headline text-left wide-column">
                                                            <h3>
                                                                <a href="#" className="text-grey-900 fw-600"> Jogging trousers</a>
                                                            </h3>
                                                        </td>
                                                        <td className="product-p">
                                                            <span className="product-price-wrapper">
                                                                <span className="money text-grey-500 fw-500">$49.00</span>
                                                            </span>
                                                        </td>
                                                        <td className="product-quantity">
                                                            <div className="quantity">
                                                                <input type="number" className="quantity-input" name="qty" id="qty-2" value="1" min="1" />
                                                                <div className="dec qtybutton">-</div><div className="inc qtybutton">+</div></div>
                                                        </td>
                                                        <td className="product-total-price">
                                                            <span className="product-price-wrapper">
                                                                <span className="money fmont"><strong>$49.00</strong></span>
                                                            </span>
                                                        </td>
                                                        <td className="product-remove text-right"><a href="#"><i className="ti-trash font-xs text-grey-500"></i></a> <a href="#"><i className="ti-eye ml-2 font-xs text-grey-500"></i></a><a href="#"><i className="ti-pencil ml-2 font-xs text-grey-500"></i></a></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="product-thumbnail pl-4 text-left">
                                                            <img src="images/p-3-1.jpg" alt="Product Thumnail" className="w75 rounded-lg" />
                                                        </td>
                                                        <td className="product-headline text-left wide-column">
                                                            <h3>
                                                                <a href="#" className="text-grey-900 fw-600"> Grey blue leather backpack</a>
                                                            </h3>
                                                        </td>
                                                        <td className="product-p">
                                                            <span className="product-price-wrapper">
                                                                <span className="money text-grey-500 fw-500">$49.00</span>
                                                            </span>
                                                        </td>
                                                        <td className="product-quantity">
                                                            <div className="quantity">
                                                                <input type="number" className="quantity-input" name="qty" id="qty-3" value="1" min="1" />
                                                                <div className="dec qtybutton">-</div><div className="inc qtybutton">+</div></div>
                                                        </td>
                                                        <td className="product-total-price">
                                                            <span className="product-price-wrapper">
                                                                <span className="money fmont"><strong>$49.00</strong></span>
                                                            </span>
                                                        </td>
                                                        <td className="product-remove text-right"><a href="#"><i className="ti-trash font-xs text-grey-500"></i></a> <a href="#"><i className="ti-eye ml-2 font-xs text-grey-500"></i></a><a href="#"><i className="ti-pencil ml-2 font-xs text-grey-500"></i></a></td>
                                                    </tr>
                                                    <tr><td></td></tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default AdminDashBoard;
