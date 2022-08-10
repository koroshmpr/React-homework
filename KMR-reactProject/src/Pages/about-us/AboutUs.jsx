import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import classes from './AboutUs.module.css';
import photo from '../../Auth/aboutus.webp';

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <div className={`${classes.heading} row justify-content-center align-items-center pt-3 `}>
                <h1 className={`${classes.title} col-12 col-md-6 text-center`}>ABOUT US</h1>
            </div>
            <main className='container-fluid mt-5 '>
                <div className={`${classes.mainaboutus} card `}>
                    <div className="row g-0">
                        <div className=" col-12 col-md-4">
                            <img src={photo} alt="" className="img-fluid" />
                        </div>
                        <div className={`${classes.informationBOx} col-12 col-md-8`}>
                            <div className="card-body ">
                                <h3 className="card-title text-center py-3">Everyone Know us for our Knowledge and Exprience in Social Media</h3>
                                <p className="card-text text-justify px-md-5">The digital planning for the service industry is challenging but it’s fun. 
                                Every day we meet new people, who want to either set up, fix or scale their business and we work as 
                                their extended marketing team, helping them grow!. Contrary to popular belief, Lorem Ipsum is not simply 
                                random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                 Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more 
                                 obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word 
                                 in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
                                 (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, 
                                 very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a 
                                 line in section 1.10.32.</p>
                            </div>
                        </div>
                    </div>
                </div>


            </main>
        </>
    );
}

export default AboutUs;
