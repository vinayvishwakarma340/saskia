import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import useRemoveSpaceUrl from "./useRemoveSpaceUrl";
import Image from "next/image";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const products = [
    {
      name: "Station Road, Lucknow",
      icon: "/hlocation.PNG",
    },
    {
      name: "Kanpur Road, Lucknow",
      icon: "/hlocation.PNG",
    },
    {
      name: "Arjunganj, Lucknow",
      icon: "/hlocation.PNG",
    },
    {
      name: "Hyundai Promise, Lucknow",
      icon: "/hlocation.PNG",
    },
    {
      name: "Telibagh, Lucknow",
      icon: "/hlocation.PNG",
    },
    {
      name: "Aishbagh, Lucknow",
      icon: "/hlocation.PNG",
    },

    {
      name: "Sultanpur",
      icon: "/hlocation.PNG",
    },
    {
      name: "Raebareli",
      icon: "/hlocation.PNG",
    },
    {
      name: "Jagdishpur",
      icon: "/hlocation.PNG",
    },
    {
      name: "Salon",
      icon: "/hlocation.PNG",
    },
  ];



  return (
    <header className="bg-black">
      <div>
        <nav
          className="mx-auto flex w-full sm:w-11/12 items-center justify-between p-6  "
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                height={8}
                width={10}
                priority
                className="h-8 w-auto"
                src="/brand-logo.svg"
                alt="logo"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <Popover.Group className="hidden  lg:flex lg:gap-x-12">
            <Popover className="relative">
              <Popover.Button className="flex   items-center gap-x-1 text-base font-semibold leading-6 text-white">
                Showrooms
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute z-50 -left-8 top-full   mt-3 w-screen max-w-xs overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group cursor-pointer relative flex gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-black"
                      >
                        <div className="flex-auto">
                          <a
                            href={"/location/" + useRemoveSpaceUrl(item.name)}
                            className="block font-semibold text-black hover:text-white "
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <a
              href="/aboutus"
              className="text-base font-semibold leading-6 text-white"
            >
              About Us
            </a>
            <a
              href="/contactus"
              className="text-base font-semibold leading-6 text-white"
            >
              Contact Us
            </a>
          </Popover.Group>
        </nav>
      </div>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-[75%] overflow-y-auto bg-black text-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-6  w-auto"
                src="/brand-logo.svg"
                alt="company"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 ">
                        Showrooms
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={"/location/" + useRemoveSpaceUrl(item.name)}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-white "
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <a
                  href="/aboutus"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white "
                >
                  About
                </a>
                <a
                  href="/contactus"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white "
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
export default Header;
