import React from "react";

const ImageGrid = () => {
  return (
    <div className="max-w-[1360px] m-auto p-6 bg-white">
      <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
        {/* Column #1 */}
        <div className="grid gap-6">
          <div className="bg-gray-100 rounded-lg">
            <img
              className="w-full h-[250px] object-cover rounded-xl"
              src="/img/Caren Luxury+.webp"
              alt="Image 01"
            />
          </div>
          <div className="bg-gray-100 rounded-lg">
            <img
              className="w-full h-[250px] object-cover rounded-xl"
              src="/img/Caren X Line.webp"
              alt="Image 02"
            />
          </div>
          <div className="bg-gray-100 rounded-lg">
            <img
              className="w-full h-[174px] object-cover rounded-xl"
              src="/img/Carnival.webp"
              alt="Image 03"
            />
          </div>
        </div>

        {/* Column #2 */}
        <div className="grid gap-6 ">
          <div className="bg-gray-100 rounded-lg">
            <img
              className="w-full h-[200px] object-cover rounded-xl"
              src="/img/EV-6.webp"
              alt="Image 04"
            />
          </div>
          <div className="bg-gray-100 rounded-lg">
            <img
              className="w-full h-[250px] object-cover rounded-xl"
              src="/img/EV9s.webp"
              alt="Image 05"
            />
          </div>
          <div className="bg-gray-100 rounded-lg">
            <img
              className="w-full h-[250px] object-cover rounded-xl"
              src="/img/Seltos-GT Line.webp"
              alt="Image 06"
            />
          </div>
        </div>

        {/* Column #3 */}
        <div className="grid gap-6">
          <div className="bg-gray-100 rounded-lg">
            <img
              className="w-full h-[250px] object-cover rounded-xl"
              src="/img/Seltos-X Line.webp"
              alt="Image 07"
            />
          </div>
          <div className="bg-gray-100 rounded-lg ">
            <img
              className="w-full h-[250px] object-cover rounded-xl"
              src="/img/Sonet-GT Line.webp"
              alt="Image 08"
            />
          </div>
          <div className="bg-gray-100 rounded-lg">
            <img
              className="w-full h-[250px] object-cover rounded-xl"
              src="/img/Sonet-X Line.webp"
              alt="Image 09"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
