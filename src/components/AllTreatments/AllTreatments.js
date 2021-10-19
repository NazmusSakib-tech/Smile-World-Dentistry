import React from 'react';
import useServices from '../../hooks/useServices';
import AllTreatmentChild from './AllTreatmentChild';

const AllTreatments = () => {
    const allTreatments = useServices();

    return (
        <>
            <div className="container">
                <h2>Our All Treatments</h2>
                <div className="row row-cols-1 row-cols-md-4 g-4">

                    {
                        allTreatments.map(treatment => (<AllTreatmentChild key={treatment.id}
                            treatment={treatment}></AllTreatmentChild>))
                    }
                </div>
            </div>
        </>
    );
};

export default AllTreatments;