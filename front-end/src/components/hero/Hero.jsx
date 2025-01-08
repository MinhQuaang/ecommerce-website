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
        <div className="relative h-[400px] md:h-[500px] lg:h-[750px]">
          <img
            src="https://vogal-demo.myshopify.com/cdn/shop/files/d1banner1_2000x.jpg?v=1679727513"
            className="w-full h-full object-cover"
            alt=""
          />

          <div className="absolute w-full h-full top-0 left-0 scale-75 text opacity-0">
            <div className="container mx-auto h-full relative">
              <div className="absolute top-1/2 -translate-y-1/2 max-w-[500px]">
                <h2 className="text-6xl text-black font-bold leading-[1.2] mb-2">
                  Making Bold Moves
                </h2>
                <p className="text-xl mb-8">
                  Upgrade your wardrobe with a variation of styles
                </p>
                <div className="flex gap-5">
                  <button className="btn-primary">Shop now</button>
                  <button className="btn-primary">Shop now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[400px] md:h-[500px] lg:h-[750px]">
          <img
            src="https://vogal-demo.myshopify.com/cdn/shop/files/d1banner2_2000x.jpg?v=1679729192"
            className="w-full h-full object-cover"
            alt=""
          />
          <div className="absolute w-full h-full top-0 left-0">
            <div className="container mx-auto h-full relative">
              <div className="absolute top-1/2 -translate-y-1/2 max-w-[500px] right-0 scale-75 text opacity-0">
                <h2 className="text-6xl text-black font-bold leading-[1.2] mb-2">
                  Making Bold Moves
                </h2>
                <p className="text-xl mb-8">
                  Upgrade your wardrobe with a variation of styles
                </p>
                <div className="flex gap-5">
                  <button className="btn-primary">Shop now</button>
                  <button className="btn-primary">Shop now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Hero;
