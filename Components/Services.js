const Services = () => {
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto text-center">
          {/* Heading */}
          <div className="mb-10">
            <h2 className="text-4xl font-bold text-gray-800">Explore Our Services</h2>
            <p className="text-lg text-gray-500 mt-2">Discover how we can assist you with our range of services</p>
          </div>
  
          {/* Service Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Book Test Drive */}
            <div className="p-6 bg-white shadow-lg rounded-lg border border-black transform transition hover:scale-105">
              <div className="mb-4">
                <img src="/img/steering-wheel.gif" alt="Book Test Drive" className="mx-auto h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Book Test Drive</h3>
              <p className="text-gray-500 mt-2">Schedule a test drive for your favorite car with just a click.</p>
            </div>
  
            {/* Book a Service */}
            <div className="p-6 bg-white shadow-lg border border-black rounded-lg transform transition hover:scale-105">
              <div className="mb-4">
                <img src="/img/service-tools.gif" alt="Book a Service" className="mx-auto h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Book a Service</h3>
              <p className="text-gray-500 mt-2">Keep your car in top condition by scheduling a service online.</p>
            </div>
  
            
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  