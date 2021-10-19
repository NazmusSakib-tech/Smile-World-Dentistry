import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useServices from '../../hooks/useServices'
const ServiceDetails = () => {
    const treatments = useServices();
    const { treatmentId } = useParams();
    const treatment = treatments.find(treatment => treatment.id === parseInt(treatmentId));
    console.log(treatment);


    return (
        <>
            
            <div class="card mb-3 container" style={{ width: '40rem', height: '40rem' }}>
                <img src={treatment?.image} class="card-img-top image-fluid w-100" style={{height:"500px"}} alt="..."/>
                <div class ="card-body">
                <h5 class ="card-title">{treatment?.name}</h5>
                <p class ="card-text">{treatment?.fulldescribtion}</p>
                <p class ="card-text"><small class ="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>


        </>
    );
};

export default ServiceDetails;