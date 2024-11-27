import Image from "next/image";

const Withdetailoverlay = (props) => {
  return (
    <div className="bg-white">
      <div className="mx-auto py-1 max-w-full">
        <div className="relative overflow-hidden rounded-lg lg:h-96">
          <div className="absolute inset-0">
            <Image
              height={4000}
              width={2191}
              src="/meeting.webp"
              alt="meetingimg"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div aria-hidden="true" className="relative h-96 w-full lg:hidden" />
          <div aria-hidden="true" className="relative h-32 w-full lg:hidden" />
          <div className="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-y-0 lg:inset-x-auto lg:w-96 lg:flex-col lg:items-start lg:rounded-tl-lg lg:rounded-br-none">
            <div className="lg:mt-24">
              <h1 className="sm:text-4xl text-2xl font-bold text-white">
                {props.heading}
              </h1>
              <div className="mt-1 text-xl text-gray-300">
                {props.subheading}
              </div>
            </div>
            <div
              onClick={props.onClick}
              className="mt-6 flex flex-shrink-0 cursor-pointer items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 py-3 px-4 text-base font-medium text-white hover:bg-opacity-10 sm:mt-0 sm:ml-8 lg:ml-0 lg:w-full"
            >
              {props.button}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Withdetailoverlay;
