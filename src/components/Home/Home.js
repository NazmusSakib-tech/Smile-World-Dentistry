import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import sliderPic1 from '../../utilities/slider-image/sld1.jpg'
import sliderPic2 from '../../utilities/slider-image/sld2.jpg'
import Service from '../Service/Service';
import doctor1 from '../../utilities/doctor/doctor1.jpg'
import about from '../../utilities/doctor/about.jpg'

const Home = () => {

    const services = useServices();
    return (
        <>
            {/* Slider Part */}
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={sliderPic1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={sliderPic2} className="d-block w-100" alt="..." />
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Services Section */}
            <section className="services container">
                <h2>Top Treatments</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.slice(0, 6).map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>

            </section>

            {/* doctor section  */}
            <section>

                <div className="container mt-4">
                    <h2 className="text-primary">Your Family Deserves the Best Dental Care</h2>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card h-100">
                                <img src={doctor1} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Meet our Doctor</h5>
                                    <p class="card-text">Our doctor is committed to providing high quality comprehensive dentistry to patients of all ages.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={about} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">We Are Green!</h5>
                                    <p class="card-text">Dr. Godiwala and our team practice mercury-free dentistry.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;