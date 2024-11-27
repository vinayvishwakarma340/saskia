const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/img/kia_web.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Welcome to Our Website
        </h1>
        <p className="text-lg md:text-xl text-white mt-4">
          Discover our exclusive range of products and services.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
