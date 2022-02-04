import React, { Component } from 'react';

export class ViewCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: this.props.category
        }
    }
    render() {
        return (
            <div>

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

                                <tr>

                                    <td className="product-headline text-left wide-column">
                                        <h3>
                                            <a href="#" className="text-grey-900 fw-600">{this.state.category.name}</a>
                                        </h3>
                                    </td>

                                    <td className="product-remove text-right"><a href="#"><i className="ti-trash font-xs text-grey-500"></i></a> <a href="#"><i className="ti-eye ml-2 font-xs text-grey-500"></i></a><a href="#"><i className="ti-pencil ml-2 font-xs text-grey-500"></i></a></td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewCategory;
