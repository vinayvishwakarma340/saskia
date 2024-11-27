import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Reviews = (props) => {
  const PrevCarouselBtn = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        style={{
          display: "inline",
          padding: "2px",
          position: "absolute",
          top: "45%",
          left: "-25px",
          color: "grey",
          zIndex: "10",
          cursor: "pointer",
        }}
      >
        <FaAngleLeft size="30" className="text-blue" />
      </div>
    );
  };
  const NextCarouselBtn = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        style={{
          display: "inline",

          padding: "2px",
          position: "absolute",
          top: "45%",
          right: "-25px",
          color: "grey",
          zIndex: "10",
          cursor: "pointer",
        }}
      >
        <FaAngleRight size="30" className="text-blue" />
      </div>
    );
  };
  var settings = {
    infinite: props?.videoList.data.length <= 2 ? false : true,
    speed: 500,
    slidesToShow: 3,
    lazyLoad: true,
    slidesToScroll: 3,
    autoplay: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          speed: 300,
          arrows: false,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <PrevCarouselBtn />,
    nextArrow: <NextCarouselBtn />,
  };

  return (
    <div className="mx-auto max-w-screen-xl   py-2 ">
      <div className="text-xl text-blue-500 font-semibold flex justify-center">
        REVIEWS
      </div>
      <div className="flex items-center text-center">
        <div className="flex-grow h-px bg-gray-200"></div>

        <span className="flex-shrink text-xl   sm:text-4xl text-gray-900 px-4   font-normal">
          {" "}
          Watch Trusted Reviews From Our Customers
        </span>

        <div className="flex-grow h-px bg-gray-200"></div>
      </div>
      <div className="bg-gray-50  p-2  rounded-lg">
        <div className="space-y-4">
          <Slider {...settings}>
            {props?.videoList.data?.map((person, index) => (
              <div key={index}>
                <div className="space-y-4 p-2  ">
                  <div className="  flex justify-center">
                    <iframe
                      type="text/html"
                      style={{ height: "300px", width: "350px" }}
                      className="rounded-lg  object-cover shadow-lg   transition duration-300 ease-in-out "
                      src={person.Video}
                      title={person.VideoTitle}
                      layout="responsive"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen={true}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="space-y-1 text-lg font-normal leading-6">
                      <h3 className=" flex justify-center text-blue-600 ">
                        {person.VideoTitle}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
