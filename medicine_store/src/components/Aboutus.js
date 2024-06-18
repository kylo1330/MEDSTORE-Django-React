import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import backgroundImage from "./Reveries.jpg"; // Import your background image

function AboutUs() {
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh", // Ensures the background covers the entire viewport height
        color: "white", // Set text color to white
    };

    return (
        <div style={backgroundStyle}>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h1 style={{ color: "white" }}>About Our Medical Store</h1>
                        <p>
                            Welcome to Our Medical Store! We are dedicated to providing high-quality pharmaceutical products and healthcare services to our community.
                        </p>
                        <p>
                            Our store offers a wide range of medications, medical supplies, and healthcare products to meet the needs of our customers. Whether you're looking for over-the-counter medications, prescription drugs, or medical equipment, we have you covered.
                        </p>
                        <p>
                            At Our Medical Store, we prioritize customer satisfaction and strive to ensure that every customer receives personalized attention and expert advice. Our knowledgeable staff is always available to answer your questions and help you find the products you need.
                        </p>
                        <p>
                            In addition to our retail services, we also offer online ordering and delivery for your convenience. You can browse our catalog and place orders from the comfort of your home, and we'll deliver your medications and supplies right to your doorstep.
                        </p>
                        <p>
                            Thank you for choosing Our Medical Store for your healthcare needs. We look forward to serving you and helping you live a healthier life.
                        </p>
                        <Link to="/" className="btn btn-info">Go Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
