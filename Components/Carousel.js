import { Carousel } from "flowbite-react";
import Link from "next/link";

const Carousell = (props) => {
  return (
    <Carousel className="[&>div]:rounded-none  ">
      {props.carouselList.data?.map((item, index) => (
        <Link
          key={index}
          target="_blank"
          rel="noreferrer"
          href={item.CarouselClickURL}
          className="relative h-100  md:h-[525px] "
        >
          <img
            className={"hidden h-full w-full lg:block"}
            fill="true"
            height={"full"}
            width={"full"}
            src={item.CarouselImageWeb}
            alt={"webbanner"}
          />
          <img
            className={"h-full lg:hidden  w-full sm:object-cover object-fit"}
            fill="true"
            height={"auto"}
            width={"auto"}
            src={item.CarouselImageMobile}
            alt={"mobilebanner"}
          />
        </Link>
      ))}
    </Carousel>
  );
};

export default Carousell;
