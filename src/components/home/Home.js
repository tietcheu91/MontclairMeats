import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ICU from "i18next-icu";
import logo from "../../images/logoMM.jpg";
import backgroundImage from "../../images/homemeat.jpg";
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
          Our meat is always fresh and never frozen
        </h1>
      </div>

      <hr className="line-spacing-bottom"></hr>

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
