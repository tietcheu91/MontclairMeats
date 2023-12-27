import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ICU from "i18next-icu";
import "./Home.css";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // enable auto scrolling
    autoplaySpeed: 3000, // set the duration between slides to 3 seconds
  };

  const images = [
    { src: require("../../images/Fresh-Meat.jpg"), alt: "resh-Meat" },
    { src: require("../../images/homemeat.jpg"), alt: "homemeat" },
    { src: require("../../images/meat.jpg"), alt: "meat" },
    // { src: require('../../images/logo.jpg'), alt: 'Shirt' },
  ];

  return (
    <div>
      <div className="home-container">
        {/* <h1 className="home-heading">Montclair Meats</h1> */}
        <p className="home-heading">Montclair Meats</p>
        <span className="home-text_heading"> Whole Animal Butchery </span>
        <div className="home-slider">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </Slider>
        </div>
        <br></br>
        <br></br>
        <p className="home-text">Store Hours:
        <br></br>Shop: 9AM - 8PM every day</p>
        <p className="home-text">Location:
        <br></br>151 Valley Road
        <br></br>Montclair, NJ  07042</p>
        <p className="home-text">Contact:
        <br></br>Phone: (555) 555-5555
        <br></br>Email: info@montclairmeats.com</p>
      </div>
    </div>
  );
}

export default Home;
