import React from 'react';

const AllTreatmentChild = (props) => {
    console.log(props.treatment);
    const { name, shortdescribe, image } = props.treatment;
    return (
        <>
            <div  className="col">
                <div  className="card">
                    <img src={image}  className="card-img-top" alt="..." />
                    <div  className="card-body">
                        <h5  className="card-title">{name}</h5>
                        <p  className="card-text">{shortdescribe}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllTreatmentChild;