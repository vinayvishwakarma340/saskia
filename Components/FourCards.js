const FourCards = () => {
  const products = [
    {
      id: 1,

      imageSrc: "/awards/Best Performance Parts-2019.webp",
    },
    {
      id: 2,
      imageSrc: "/awards/HPromise-2019.webp",
    },
    {
      id: 3,

      imageSrc: "/awards/Highest-Target-2013.webp",
    },
    {
      id: 4,

      imageSrc: "/awards/Corporate Sales Champion H1-2019.webp",
    },
    {
      id: 5,

      imageSrc: "/awards/Best-YOY-Growth.webp",
    },
    {
      id: 6,

      imageSrc: "/awards/Best-Performer-2017.webp",
    },
    {
      id: 7,

      imageSrc: "/awards/Best-Institutional-Sales-2018.webp",
    },
    {
      id: 8,

      imageSrc: "/awards/Best-All-Rounder-Award.webp",
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="mx-auto   py-6 px-4 sm:py-12 w-full sm:px-6 ">
        <h2 className="  text-xl lg:text-2xl text-gray-900 font-semibold">
          Awards & Recognitions
        </h2>

        <div className="mt-6 grid  sm:grid-cols-3  gap-y-10 gap-x-6 grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-white  lg:aspect-none lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={"product"}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FourCards;
