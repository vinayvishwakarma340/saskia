import Header from "Components/Header";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Loader from "Components/Loader";

const Footer = dynamic(() => import("Components/Footer"));

const location = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const fetchIframeUrl = (url) => {
    return (
      <>
        {loading ? (
          <Loader />
        ) : (
          <div className="flex justify-center">
            <iframe
              src={url}
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        )}
      </>
    );
  };

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>{`We are available at Lucknow, Sultanpur, Jagdishpur, Raebareily and Salon`}</title>
        <meta
          name="description"
          content={`Visit any of our 7 locations in Lucknow, Jagdishpur, Sultanpur, and Raebareli to receive exceptional service and performance from our expert team of professionals.`}
        />
        <link
          rel="canonical"
          href={"https://www.sashyundai.com/location/" + router.query.id}
        />
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
          content={`We are available at Lucknow, Sultanpur, Jagdishpur, Raebareily and Salon`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={`Visit any of our 7 locations in Lucknow, Jagdishpur, Sultanpur, and Raebareli to receive exceptional service and performance from our expert team of professionals.`}
        />
        <meta
          property="og:url"
          content={`https://www.sashyundai.com/location/"` + router.query.id}
        />
        <meta
          property="og:image"
          content="https://sashyundai.com/brand-logo.svg"
        />
        <meta
          property="twitter:image"
          content="https://sashyundai.com/brand-logo.svg"
        />
        <meta
          property="twitter:title"
          content={`We are available at Lucknow, Sultanpur, Jagdishpur, Raebareily and Salon`}
        />
        <meta
          property="twitter:description"
          content={`Visit any of our 7 locations in Lucknow, Jagdishpur, Sultanpur, and Raebareli to receive exceptional service and performance from our expert team of professionals.`}
        />
        <meta property="twitter:card" content="summary" />
        <meta
          property="twitter:site"
          content="https://twitter.com/@timesascent"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
      </Head>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <div className="mb-8 w-11/12 mx-auto  ">
        <div className="pb-10 py-6">
          <h1 className="text-xl text-blue-500 font-semibold pb-2 flex justify-center">
            Location
          </h1>
          <div className="sm:text-4xl text-xl flex justify-center">
            <div className="flex-grow mr-4  my-auto h-px bg-gray-200"></div>
            <span className="capitalize"> {router.query.id}</span>
            <div className="flex-grow ml-4  my-auto h-px bg-gray-200"></div>
          </div>
        </div>
        <div>
          {router.query.id === "station-road-lucknow" &&
            fetchIframeUrl(
              "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14240.307110209127!2d80.9337924!3d26.8375102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfdad0e3f11a5%3A0x73456f65f5fd81a8!2sSAS%20Hyundai!5e0!3m2!1sen!2sin!4v1680079296998!5m2!1sen!2sin"
            )}
        </div>
        <div>
          {router.query.id === "kanpur-road-lucknow" &&
            fetchIframeUrl(
              "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14248.142791038217!2d80.8805105!3d26.775132!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bf94ed428618f%3A0x56204a9138f1636d!2sSAS%20Hyundai%20-%20Kanpur%20Road%20(Sales%20%26%20Service)!5e0!3m2!1sen!2sin!4v1680079713402!5m2!1sen!2sin"
            )}
        </div>
        <div>
          {router.query.id === "hyundai-promise-lucknow" &&
            fetchIframeUrl(
              "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14248.199369686816!2d80.8803663!3d26.7746811!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bf9c50d735c33%3A0xd7d30cba72f09083!2sSAS%20Hyundai%3A%20Hyundai%20Promise!5e0!3m2!1sen!2sin!4v1680085159331!5m2!1sen!2sin"
            )}
        </div>
        <div>
          {router.query.id === "arjunganj-lucknow" &&
            fetchIframeUrl(
              "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14244.237449449154!2d80.9916595!3d26.8062384!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be34dcf15b217%3A0xdec3d1e6002c9579!2sSAS%20Hyundai%20-%20Arjunganj!5e0!3m2!1sen!2sin!4v1687427702402!5m2!1sen!2sin"
            )}
        </div>
        <div>
          {router.query.id === "telibagh-lucknow" &&
            fetchIframeUrl(
              "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14247.672447652434!2d80.9417956!3d26.7788801!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfb82bfdac6bd%3A0x63005e6b12316e58!2sSAS%20Hyundai%20-%20Telibagh!5e0!3m2!1sen!2sin!4v1687427842715!5m2!1sen!2sin"
            )}
        </div>
        <div>
          {router.query.id === "raebareli" &&
            fetchIframeUrl(
              "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14317.805488770337!2d81.2528998!3d26.2145195!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bb5e330ae4391%3A0xc597a9fa4f21bbea!2sSAS%20Hyundai%20-%20Raebareli!5e0!3m2!1sen!2sin!4v1680085391765!5m2!1sen!2sin"
            )}
        </div>
        <div>
          {router.query.id === "jagdishpur" &&
            fetchIframeUrl(
              "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3571.1507884086213!2d81.5626621!3d26.4830894!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a4b83c0c42a8d%3A0xd3e793d3da70ab86!2sSAS%20Hyundai%20%3A%20Jagdishpur!5e0!3m2!1sen!2sin!4v1680085370767!5m2!1sen!2sin"
            )}
        </div>
        <div>
          {router.query.id === "sultanpur" &&
            fetchIframeUrl(
              "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14312.995951237232!2d82.0582453!3d26.2535813!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a7d2c50025fef%3A0xac0500241f58eef6!2sSAS%20Hyundai%20-%20Sultanpur!5e0!3m2!1sen!2sin!4v1680085346667!5m2!1sen!2sin"
            )}
        </div>
        <div>
          {router.query.id === "salon" &&
            fetchIframeUrl(
              "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3571.1507884086213!2d81.5626621!3d26.4830894!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a4b83c0c42a8d%3A0xd3e793d3da70ab86!2sSAS%20Hyundai%20%3A%20Jagdishpur!5e0!3m2!1sen!2sin!4v1680085442233!5m2!1sen!2sin"
            )}
        </div>
        <div>
          {router.query.id === "aishbagh-lucknow" &&
            fetchIframeUrl(
              "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14240.750632192587!2d80.9056064!3d26.833983!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd60f89dee9b%3A0x32fbcb1663854ebc!2sSAS%20Hyundai%20(Service)%20-%20Aishbagh!5e0!3m2!1sen!2sin!4v1686808133418!5m2!1sen!2sin"
            )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default location;
