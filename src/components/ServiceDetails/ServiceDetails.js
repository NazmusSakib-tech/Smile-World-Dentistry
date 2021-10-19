import { useParams } from 'react-router';
import useServices from '../../hooks/useServices'
const ServiceDetails = () => {
    const treatments = useServices();
    const { treatmentId } = useParams();
    const treatment = treatments.find(treatment => treatment.id === parseInt(treatmentId));



    return (
        <>
            <div className="card mb-3 container">
                <img src={treatment?.image} className="card-img-top w-100" style={{ height: "500px" }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{treatment?.name}</h5>
                    <p className="card-text">{treatment?.fulldescribtion}</p>

                </div>
            </div>

        </>
    );
};

export default ServiceDetails;