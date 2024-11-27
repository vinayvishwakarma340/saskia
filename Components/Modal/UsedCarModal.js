import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { ThreeDots } from "react-loader-spinner";

const UsedCarModel = (props) => {
  const cancelButtonRef = useRef(null);

  const city = [
    { name: "Lucknow" },
    { name: "Raebareli" },
    { name: "Jagdishpur" },
    { name: "Sultanpur" },
    { name: "Salon" },
  ];

  const yearOfManufacturing = [
    { year: "2000" },
    { year: "2001" },
    { year: "2002" },
    { year: "2003" },
    { year: "2004" },
    { year: "2005" },
    { year: "2006" },
    { year: "2007" },
    { year: "2008" },
    { year: "2009" },
    { year: "2010" },
    { year: "2011" },
    { year: "2012" },
    { year: "2013" },
    { year: "2014" },
    { year: "2015" },
    { year: "2016" },
    { year: "2017" },
    { year: "2018" },
    { year: "2019" },
    { year: "2020" },
    { year: "2021" },
    { year: "2022" },
    { year: "2023" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    props.carvaluation();
    clearfields();
  };

  const clearfields = () => {
    props.setValuationManufacturing("");
    props.setValuationCarmodel("");
    props.setValuationBrand("");
    props.setValuaitonCity("");
    props.setValuationMobiNum("");
    props.setValuationName("");
  };

  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={props.setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-start justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform p-1 overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-lg">
                <div className="bg-white border-2 border-blue-500 rounded-md  px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className=" flex justify-center">
                    <Image
                      src={"/services/usedcar.png"}
                      height={50}
                      width={50}
                      alt="usedcar"
                    />
                  </div>
                  <div className="text-lg flex justify-center font-semibold leading-6 text-gray-900">
                    Used Car Valuation
                  </div>

                  <div className="mt-3   sm:mt-0 sm:ml-4 sm:text-left">
                    <form onSubmit={handleSubmit}>
                      <div className="p-2">
                        <label
                          htmlFor="country"
                          className="block text-base font-medium leading-6 text-gray-900"
                        >
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          value={props.valuationName}
                          onChange={(e) =>
                            props.setValuationName(e.target.value)
                          }
                          required
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                        />
                      </div>

                      <div className="p-2">
                        <label
                          htmlFor="country"
                          className="block text-base font-medium leading-6 text-gray-900"
                        >
                          Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          required
                          value={props.valuationMobiNum}
                          onChange={(e) =>
                            props.setValuationMobiNum(e.target.value)
                          }
                          name="phone"
                          id="phone"
                          maxLength="10"
                          minLength="0"
                          pattern="^[6789][0-9]{9}$"
                          autoComplete="mobile"
                          className="mt-1 outline-none px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                        />
                      </div>

                      <div className="p-2 col-span-6 sm:col-span-3">
                        <label
                          htmlFor="country"
                          className="block text-base font-medium leading-6 text-gray-900"
                        >
                          Choose City <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={props.valuationCity}
                          onChange={(e) =>
                            props.setValuaitonCity(e.target.value)
                          }
                          required
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="mt-1 px-3 block w-full rounded-md border-0 bg-white   py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                        >
                          <option
                            value={""}
                            selected={props.valuationCity === ""}
                            disabled
                          >
                            --Choose City--
                          </option>
                          {city.map((item) => {
                            return <option>{item.name}</option>;
                          })}
                        </select>
                      </div>

                      <div className="p-2">
                        <label
                          htmlFor="country"
                          className="block text-base font-medium leading-6 text-gray-900"
                        >
                          Car Brand <span className="text-red-500">*</span>
                        </label>
                        <input
                          required
                          value={props.valuationBrand}
                          onChange={(e) =>
                            props.setValuationBrand(e.target.value)
                          }
                          type="text"
                          name="text"
                          id="text"
                          autoComplete="text"
                          className="mt-1 px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                        />
                      </div>

                      <div className="p-2">
                        <label
                          htmlFor="country"
                          className="block text-base font-medium leading-6 text-gray-900"
                        >
                          Car Model <span className="text-red-500">*</span>
                        </label>
                        <input
                          value={props.valuationCarmodel}
                          onChange={(e) =>
                            props.setValuationCarmodel(e.target.value)
                          }
                          required
                          type="text"
                          name="text"
                          id="text"
                          autoComplete="text"
                          className="mt-1 px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                        />
                      </div>

                      <div className=" p-2 col-span-6 sm:col-span-3">
                        <label
                          htmlFor="country"
                          className="block text-base font-medium leading-6 text-gray-900"
                        >
                          Year Of Manufacturing{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={props.valuationManufacturing}
                          onChange={(e) =>
                            props.setValuationManufacturing(e.target.value)
                          }
                          required
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="mt-1 px-3 block w-full rounded-md border-0 bg-white   py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                        >
                          <option
                            value={""}
                            selected={props.valuationManufacturing === ""}
                            disabled
                          >
                            --Select Year--
                          </option>
                          {yearOfManufacturing.map((item) => {
                            return <option>{item.year}</option>;
                          })}
                        </select>
                      </div>

                      <div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex w-full justify-center rounded-md bg-blue-500 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 sm:ml-3 sm:w-auto"
                        >
                          {props.loading ? (
                            <ThreeDots
                              height="20"
                              width="20"
                              radius="9"
                              color="white"
                              ariaLabel="loading"
                              wrapperStyle
                              wrapperClass
                            />
                          ) : (
                            <div>Submit</div>
                          )}
                        </button>
                        <button
                          type="button"
                          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-6 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                          onClick={() => props.setOpen(false)}
                          ref={cancelButtonRef}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                    <div className="flex bg-gray-50 justify-center py-2 ">
                      <Image
                        src={"/footer/whatsapp.svg"}
                        alt="whatsapp"
                        height={35}
                        width={35}
                      />
                      <a
                        target={"_blank"}
                        className="my-auto ml-2 hover:underline text-green-600"
                        href={"//api.whatsapp.com/send?phone=919919800465"}
                      >
                        +91-9919800465
                      </a>
                    </div>
                    <div className="flex bg-gray-50 justify-center py-2 ">
                      <Image
                        src={"/call.webp"}
                        alt="call"
                        height={30}
                        width={30}
                      />
                      <a
                        className="my-auto ml-2 hover:underline text-blue-600"
                        href={"tel: 919919800465"}
                      >
                        +91-9919800465
                      </a>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
export default UsedCarModel;
