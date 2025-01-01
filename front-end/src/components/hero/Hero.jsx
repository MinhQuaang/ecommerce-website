import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Hero() {
  const settings = {
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
  };
  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        <div className="outline-none">
          <img
            src="https://vogal-demo.myshopify.com/cdn/shop/files/d1banner1_2000x.jpg?v=1679727513"
            alt=""
          />
        </div>
        <div className="outline-none">
          <img
            src="https://vogal-demo.myshopify.com/cdn/shop/files/d1banner2_2000x.jpg?v=1679729192"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}

export default Hero;
