import React from "react";
import "./Home.css";

const Home = () => {
    const googleMap = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24124.985034861562!2d-111.60524635529336!3d40.902081175935365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87524430d836635b%3A0xf487b450c7bd3342!2sEast%20Canyon%20Reservoir!5e0!3m2!1sen!2sus!4v1615662203487!5m2!1sen!2sus';
    
    return (
       <div>
            {/* CONTENT */}
            <div className="homepage">
                <div className="top-heading">
                    <h1>Kayak Club</h1>
                </div>

                <div className="bottom-heading">
                    <h3>Code and kayak?</h3>
                </div>
            </div>

            {/* CONTENT FEATURES */}
            <div className="features-section">
                <div className="columns-wrapper">
                    <div className="column">
                        <i className="fas fa-swimmer"></i>
                        <p>Stops for swimming!</p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>

                    <div className="column">
                        <i className="fas fa-wifi"></i>
                        <p>You can code from here!</p>

                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>

                    <div className="column">
                        <i className="fas fa-campground"></i>
                        <p>Camping Supplies Included!</p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            </div>
    
            {/* MAP */}
            <div>
                <iframe
                    src={googleMap}
                    width="100%" height="450" style={{border: 0}} loading="lazy"></iframe>
            </div>
       </div>
   
    );
};

export default Home;