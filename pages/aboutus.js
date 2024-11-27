import Footer from "Components/Footer";
import Header from "../Components/Header";
import React from "react";
import FourCards from "../Components/FourCards";
import Head from "next/head";
import Navbar from "Components/Navbar";

const aboutus = () => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>{`Experience the Future of Car Buying with SAS Hyundai - Your Trusted Platinum Hyundai Dealer`}</title>
        <meta
          name="description"
          content={`Experience the Future of Car Buying with SAS Hyundai - Your Trusted Platinum Hyundai Dealer
          Meta description - SAS Hyundai is committed to transforming the traditional car buying process by providing customers with a hassle-free, easy, and transparent way to purchase cars.  `}
        />
        <link rel="canonical" href="https://www.sashyundai.com/" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://sashyundai.com/brand-logo.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://sashyundai.com/brand-logo.svg"
        />
        <meta
          property="og:title"
          content={`Experience the Future of Car Buying with SAS Hyundai - Your Trusted Platinum Hyundai Dealer`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={`Experience the Future of Car Buying with SAS Hyundai - Your Trusted Platinum Hyundai Dealer
          Meta description - SAS Hyundai is committed to transforming the traditional car buying process by providing customers with a hassle-free, easy, and transparent way to purchase cars.  `}
        />
        <meta property="og:url" content={`https://www.sashyundai.com/`} />
        <meta
          property="og:image"
          content="https://sashyundai.com/brand-logo.svg"
        />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
      </Head>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <div className="w-11/12 m-auto mt-20">
        <h1 className="bg-black text-white text-2xl  font-semibold px-4 py-6 mt-3 flex justify-start ">
          About Us – SAS Kia
        </h1>
        <div className="bg-gray-50  py-4 mb-6 border-2 border-blue-500">
          <div className="p-4 text-sm lg:text-base text-gray-900">
            SAS Kia embarks on a journey to redefine the car-buying and
            ownership experience with Kia Motors. As one of the newest ventures
            under the SAS Group, we are dedicated to delivering excellence in
            sales and service, making every customer interaction extraordinary.
          </div>
          <div className="p-4 text-sm lg:text-base text-gray-900">
            With showrooms strategically located in Lucknow (Station Road) and
            Raebareli, alongside a state-of-the-art Service Center at Para,
            Lucknow, SAS Kia brings world-class vehicles and unmatched customer
            service closer to you.
          </div>

          <div className="p-4 text-base lg:text-lg text-gray-900 font-semibold">
            Vision-
          </div>

          <div className="px-8 py-1 text-sm lg:text-base text-gray-900">
            To make Kia the first choice for every automobile enthusiast by
            providing exceptional car-buying experiences and after-sales
            services.
          </div>

          <div className="p-4 text-base lg:text-lg text-gray-900 font-semibold">
            Mission-
          </div>

          <div className="px-8 py-1 text-sm lg:text-base text-gray-900">
            To become the leading Kia dealership by offering a seamless,
            customer-centric approach to vehicle sales and service.
          </div>
          <div className="px-8 py-1 text-sm lg:text-base text-gray-900">
            To build a highly skilled, passionate, and professional team
            dedicated to exceeding customer expectations. At SAS Kia, we are
            committed to innovation, quality, and building strong relationships
            with our customers. Our promise is to make your journey with Kia
            vehicles a delightful and unforgettable experience.
          </div>
          <div className="px-8 py-1 text-sm lg:text-base text-gray-900">
            Join the growing SAS Kia family and be part of a legacy of trust,
            satisfaction, and excellence. Stay tuned for exciting updates as we
            bring the future of mobility closer to you.
          </div>
          <div className="px-8 py-1 text-sm lg:text-base text-gray-900">
            Explore our wide range of Kia cars, and experience the thrill of
            driving excellence.
          </div>

          {/* <FourCards /> */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default aboutus;
