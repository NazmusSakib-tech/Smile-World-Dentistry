import React from 'react';

const AllTreatmentChild = (props) => {
    console.log(props.treatment);
    const { name, fulldescribtion, shortdescribe, image } = props.treatment;
    return (
        <>
            <div class="col">
                <div class="card">
                    <img src={image} class="card-img-top" alt="..."/>
                    <div class ="card-body">
                    <h5 class ="card-title">{name}</h5>
                    <p class ="card-text">{shortdescribe}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllTreatmentChild;