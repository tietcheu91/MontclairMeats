import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ICU from "i18next-icu";
import { Card, CardContent, Typography, Box } from "@mui/material";
import logo from "../../images/logoMM.jpg";
import backgroundImage from "../../images/handWithPotatoes.jpg";
import sourceImage from "../../images/twoCows.jpg";
import sustainabilityImage from "../../images/cereal.jpg";
import freshnessImage from "../../images/lettuce.jpg";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="home-container">
        <img src={logo} className="logo_style" alt="Logo" />
      </div>

      <div className="text-light">
        <img
          src={backgroundImage}
          className="img-fluid"
          alt="Responsive image"
        />
      </div>

      <hr className="line-spacing-top"></hr>

      <div>
        <h1 className="text-center quotes-font">"</h1>
        <h1 className="text-center text-font">
          We work with local farmers to provide the freshest ethically raised meat
        </h1>
      </div>

      <hr className="line-spacing-bottom"></hr>

      <div>
        {/* <h1 className="text-center quotes-font">"</h1> */}
        <p className="text-center text-font-history">
         <span className="why-text">Why Whole Animal Butchery?</span> 
        <br/>
        <br/>
        This whole animal practice has a number of meaningful benefits which include:
            <br />
            <ul className="unordered-text">
              <li className="list-text">Supporting local farms that employ sustainable farming strategies</li>
              <li className="list-text">Ensuring that animals are raised ethically</li>
              <li className="list-text">Minimizing waste and reducing the carbon footprint of the production process</li>
            </ul>
        </p>
      </div>

      <hr className="line-spacing-top"></hr>
      <div>
        <h1 className="text-center text-font">
          About Us
        </h1>
      </div>
      <hr className="line-spacing-bottom"></hr>

      {/* <Card className="text-center" sx={{ margin: 3 }}> */}
        {/* <CardContent > */}
        <div className="text-center text-space">
          <Typography
            variant="h6"
            component="div"
            gutterBottom
            style={{
              color: "#012f01",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            What is whole animal butchery?
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary" 
            className="text-buchery"
            style={{ fontSize: "15px", lineHeight: "1.6", color: "#333"}}
          >
            The whole animal butchery concept is founded on the idea of working with local farms 
            to get delivery of fresh whole-animal carcasses and then breaking down those carcasses 
            on site at your local butcher shop. 
            <br />
            <br />
            This is a very different approach from the large-scale industrial farming practices 
            where standard cuts of meat are delivered in bulk from feedlot or factory farms. 
            <br />
            <br />
            

          </Typography>
        {/* </CardContent> */}
      {/* </Card> */}
      </div>

      <br />
          <Typography
            variant="h6"
            component="div"
            className="text-center"
            gutterBottom
            style={{
              color: "#012f01",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Our Values
          </Typography>

      <div className="container-fluid">
      <div className="row ml-4 mr-4">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4 h-100">
          <div className="card p-2">
            <img src={sustainabilityImage} className="img-fluid" alt="Responsive image" />
            <div className="card-body">
              <h5 className="card-title header-card">Sustainability</h5>
              <p className="card-text body-card">By participating in the whole animal butcher process, 
              you are actively supporting local farms and butchers who are focused on reducing waste and creating a more sustainable system of food production.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4 h-100">
          <div className="card p-2">
            <img src={freshnessImage} className="img-fluid" alt="Responsive image" />
            <div className="card-body">
              <h5 className="card-title header-card">Freshness</h5>
              <p className="card-text body-card">We only source from local farms that have grass-fed and pasture-raised animals that are raised using ethical practices. 
              Furthermore, our process ensures that the time between your proteins are cut and when it is sold is minimized. 
              The result of all of these factors is that you are getting a fresher, healthier, and tastier cut of meat.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4 h-100">
          <div className="card p-2">
            <img src={sourceImage} className="img-fluid" alt="Responsive image" />
            <div className="card-body">
              <h5 className="card-title header-card">Source Clarity</h5>
              <p className="card-text body-card">We cut out all the mystery of how animals are raised, where your meat is coming from, and how long ago your meat was processed. 
              By bringing the consumer closer to the source we are making sure people know exactly where their food is coming from.  </p>
            </div>
          </div>
        </div>
      </div>
    </div>

      <div>
        <p className="home-text">
          Store Hours:
          <br></br>Shop: 10AM - 6PM Tues-Sat
        </p>
        <p className="home-text">
          Location:
          <br></br>151 Valley Road
          <br></br>Montclair, NJ 07042
        </p>
        <p className="home-text">
          Contact:
          <br></br>Email: info@montclairmeats.com
          <br></br>Phone: 973-330-0310
        </p>
        <p className="home-text">
          Amenties:
          <br></br>Private Event Space Available
          <br></br>Free Parking in Back
        </p>
      </div>

      {/* <div className="container-fluid">
      <div className="row ml-4 mr-4">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4 h-100">
          <div className="card p-2">
            <img src={backgroundImage} className="img-fluid" alt="Responsive image" />
            <div className="card-body">
              <h5 className="card-title">Fresh Meat</h5>
              <p className="card-text">Our meat is always fresh and never frozen</p>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    </div>
  );
}

export default Home;
