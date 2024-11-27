import { Instagram } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Locations Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Our Locations</h3>
            <ul className="space-y-2">
              <li>Station Road, Lucknow</li>
              <li>Raebareli</li>
            </ul>
          </div>

          {/* Explore Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Call Us Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Call Us On</h3>
            <ul className="space-y-2">
              <li>Sales +91-8114006700</li>
              <li>Sales +91-8114006701</li>
            </ul>
          </div>
        </div>

        {/* Social Media and Footer Note */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-4">
          {/* Social Media Section - Placeholder links */}
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              Instagram
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              YouTube
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              LinkedIn
            </a>
          </div>

          {/* Footer Note */}
          <p className="text-sm mt-4 md:mt-0">
            V1.0.17; © SAS Kia 2024. Powered By{" "}
            <a href="#" className="text-blue-500 hover:underline">
              SAS One
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
