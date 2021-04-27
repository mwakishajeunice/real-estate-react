import React , {Component} from "react";

import PropertyService from "../services/PropertyService";

export default  class PropertyPage extends Component{
    constructor(props){
        super(props);

        this.state ={
            property:{}
        }

        this.getOneById = this.getOneById.bind(this);
    }

    componentDidMount(){
        this.getOneById();
    }
    async getOneById(){
        let id = this.props.match.params.id;
        let property = await PropertyService.getOneById(id);
        this.setState({
            property: property
        });
    }
    render(){
        let {property} = this.state;
        return (
            <main>
                <div className="container py-2">
                    <div className="row mb-2">
                        <div className="col-sm-8 offset-sm-2">
                            <h1 className="text-center main-title">Property</h1>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-12 col-md-1 mb-2">
                            <div className="thumbnails">

                                <img
                                    src="./images/single-room-1.jpg"
                                    alt=""
                                    className="mb-1 img-thumbnail active"
                                />
                                <img
                                    src="./images/single-room-2.jpg"
                                    alt=""
                                    className="mb-1 img-thumbnail"
                                />
                                <img
                                    src="./images/single-room-3.jpg"
                                    alt=""
                                    className="mb-1 img-thumbnail"
                                />
                                <img
                                    src="./images/single-room-4.jpg"
                                    alt=""
                                    className="mb-1 img-thumbnail"
                                />
                            </div>
                        </div>

                        <div className="col-12 col-md-5 mb-2">
                            <div className="image">
                                <img
                                    src="./images/single-room-1.jpg"
                                    alt=""
                                    className="img-fluid current_image"
                                />
                            </div>
                        </div>

                        <div className="col-12 col-md-6 mb-2">
                            <div className="details">
                                <h3 className="title">{property.houseName}</h3>
                                <p className="desc">{property.description}</p>
                                <p>
                                    Pay Ksh
                                    <span className="text-success small price mx-1"> {property.price} </span>
                                    /month
                                </p>
                                <p>
                                    Book at Ksh
                                    <span className="deposit mx-1"> {property.deposit} </span>
                                </p>
                                <p><span className="stock text-muted mr-1">5</span> in stock</p>
                                <div className="action">
                                    <button className="btn btn-warning">Book Now</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-8 offset-md-2 mb-2">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#description" data-toggle="tab"
                                    >Description</a
                                    >
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#seller" data-toggle="tab">Seller</a>
                                </li>
                            </ul>
                            <div className="tab-content py-2">
                                <div className="tab-pane active" id="description">
                                    <table className="table table-bordered">
                                        <tbody>
                                        <tr>
                                            <th>Location</th>
                                            <td>{property.location}</td>
                                        </tr>
                                        <tr>
                                            <th>Apartment</th>
                                            <td>Brothers</td>
                                        </tr>
                                        <tr>
                                            <th>Capacity</th>
                                            <td>{`${property.capacity} ${property.capacityUnit}`}</td>
                                        </tr>
                                        <tr>
                                            <th>Dimensions(ft)</th>
                                            <td>9 x 12</td>
                                        </tr>
                                        <tr>
                                            <th>Monthly Payment</th>
                                            <td>Ksh {property.price}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="tab-pane" id="seller">
                                    <table className="table table-bordered mb-2">
                                        <tbody>
                                        <tr>
                                            <th>Name</th>
                                            <td>Agent XYZ</td>
                                        </tr>
                                        <tr>
                                            <th>Email</th>
                                            <td>example@domain.com</td>
                                        </tr>
                                        <tr>
                                            <th>Phone</th>
                                            <td>2547-123-45678</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <div className="mb-2">
                                        <button type="button" className="btn btn-dark btn-sm">
                                            Contact Seller
                                        </button>
                                        <div className="seller-form d-none">
                                            <form action="#" name="seller-form" id="seller-form">
                                                <p className="form-text">Contact Seller</p>
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="name"
                                                        name="name"
                                                        placeholder="Your Name"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="email"
                                                        name="email"
                                                        placeholder="Your Email"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="tel"
                                                        className="form-control"
                                                        id="phone"
                                                        name="phone"
                                                        placeholder="Your Phone Number"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <textarea
                                                        className="form-control"
                                                        id="message"
                                                        name="message"
                                                        placeholder="Your Message"
                                                        rows="4"
                                                    ></textarea>
                                                </div>
                                                <button className="btn btn-dark">Send Message</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}