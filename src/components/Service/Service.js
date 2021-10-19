import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    console.log(props.service)
    const { id, name, image, shortdescribe } = props.service;
    return (
        <>
            <div className="col">
                <div className="card h-100">
                    <img src={ image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{ name}</h5>
                        <p className="card-text">{ shortdescribe}</p>

                    </div>
                    <Link to={`/treatmentdetails/${id}`}><button className="btn btn-primary w-auto m-auto my-2">Details</button></Link>
                </div>
            </div>
        </>
    );
};

export default Service;