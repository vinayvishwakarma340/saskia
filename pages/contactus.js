import Footer from "Components/Footer";
import Header from "Components/Header";
import Navbar from "Components/Navbar";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const contactus = () => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>{` Connect with Us`}</title>
        <meta
          name="description"
          content={`Get in touch with SAS Hyundai for car sales, service, and maintenance in Lucknow, Sultanpur, Jagdishpur and the entire western part of Uttar Pradesh and Uttrakhand.`}
        />
        <link rel="canonical" href="https://www.sashyundai.com/contactus" />
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
        <meta property="og:title" content={` Connect with Us`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={`Get in touch with SAS Hyundai for car sales, service, and maintenance in Lucknow, Sultanpur, Jagdishpur and the entire western part of Uttar Pradesh and Uttrakhand.`}
        />
        <meta
          property="og:url"
          content={`https://www.sashyundai.com/contactus`}
        />
        <meta
          property="og:image"
          content="https://sashyundai.com/brand-logo.svg"
        />
        {/* <meta
          property="twitter:image"
          content="https://sashyundai.com/brand-logo.svg"
        />
        <meta property="twitter:title" content={` Connect with Us`} />
        <meta
          property="twitter:description"
          content={`Get in touch with SAS Hyundai for car sales, service, and maintenance in Lucknow, Sultanpur, Jagdishpur and the entire western part of Uttar Pradesh and Uttrakhand.`}
        />
        <meta property="twitter:card" content="summary" />
        <meta
          property="twitter:site"
          content="https://twitter.com/@timesascent"
        /> */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
      </Head>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="w-11/12 m-auto  ">
        <h1 className="bg-black text-white text-2xl  font-semibold px-4 py-6 mt-3 flex justify-start ">
          Contact Us
        </h1>
        <div className="bg-gray-50  py-4 mb-6 border-2 border-blue-500">
          <div className="p-3 flex">
            <Image
              src={"/contact/calls.webp"}
              height={50}
              width={50}
              alt="call"
            />
            <a
              href="tel:8114006700"
              className="my-auto cursor-pointer   text-gray-900 hover:underline pl-6"
            >
              8114006700,
            </a>

            <a
              href="tel:8114006701"
              className="my-auto cursor-pointer   text-gray-900 hover:underline pl-2"
            >
              8114006701
            </a>
          </div>
          <div className="p-3 flex">
            <Image
              src={"/contact/mail.webp"}
              height={50}
              width={50}
              alt="mail"
            />
            <a
              href="mailto:ccm@saskiaindia.com"
              className="my-auto cursor-pointer hover:underline  text-gray-900 px-6"
            >
              ccm@saskiaindia.com
            </a>
          </div>
          <div className="p-3 flex">
            <Image
              src={"/contact/locate.webp"}
              height={50}
              width={50}
              alt="locate"
            />
            <div className="my-auto  text-gray-900 px-6">
              Head Office - 12, Station Road, Adjacent to CMS Station Road,
              Lucknow - 226001
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default contactus;
