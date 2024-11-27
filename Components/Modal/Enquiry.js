import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { ThreeDots } from "react-loader-spinner";

const Enquiry = (props) => {
  const cancelButtonRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.insuranceenquiry();
  };

  return (
    <Transition.Root show={props.openEnq} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={props.setOpenEnq}
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
              <Dialog.Panel className="relative transform p-1 overflow-hidden rounded-lg bg-white text-left shadow-xl m-auto transition-all sm:my-8 w-full sm:max-w-lg">
                <div className="bg-white border-2 border-blue-500 rounded-md  px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className=" flex justify-center">
                    <Image
                      src={"/enquiry.webp"}
                      alt="enquiry"
                      height={50}
                      width={50}
                    />
                  </div>
                  <div className="text-lg flex justify-center font-semibold leading-6 text-gray-900">
                    Enquiry
                  </div>

                  <div className="mt-3   sm:mt-0 sm:ml-4 sm:text-left">
                    <form onSubmit={handleSubmit}>
                      <div className="p-2">
                        <label
                          htmlFor="country"
                          className="block text-base font-medium leading-6 text-gray-900"
                        >
                          Name<span className="text-red-500">*</span>
                        </label>
                        <input
                          value={props.enquiryName}
                          required
                          onChange={(e) => props.setEnquiryName(e.target.value)}
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
                          Car Registration Number
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          value={props.enquiryCarRegNum}
                          onChange={(e) =>
                            props.setEnquiryCarRegNum(e.target.value)
                          }
                          maxLength="10"
                          minLength="0"

                          required
                          name="car-registration"
                          id="car-registration"
                          autoComplete="car-registration"
                          className="mt-1 outline-none  px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                        />
                      </div>

                      <div className="p-2">
                        <label
                          htmlFor="country"
                          className="block text-base font-medium leading-6 text-gray-900"
                        >
                          Mobile Number<span className="text-red-500">*</span>
                        </label>
                        <input
                          value={props.enquiryNumber}
                          onChange={(e) =>
                            props.setEnquiryNumber(e.target.value)
                          }
                          name="phone"
                          id="phone"
                          maxLength="10"
                          minLength="0"
                          pattern="^[6789][0-9]{9}$"
                          autoComplete="mobile"
                          required
                          className="mt-1 outline-none  px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                        />
                      </div>

                      <div className="  px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
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
                          onClick={() => props.setOpenEnq(false)}
                          ref={cancelButtonRef}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                    <div className="flex justify-center py-2 ">
                      <Image
                        src={"/footer/whatsapp.svg"}
                        height={35}
                        width={35}
                        alt="whatsapp"
                      />
                      <a
                        target={"_blank"}
                        className="my-auto ml-2 hover:underline text-green-600"
                        href={"//api.whatsapp.com/send?phone=919839288990"}
                      >
                        +91-9839288990
                      </a>
                    </div>
                    <div className="flex justify-center py-2 ">
                      <Image src={"/call.webp"} alt="call" height={30} width={30} />
                      <a
                        className="my-auto ml-2 hover:underline text-blue-600"
                        href={"tel: 919839288990"}
                      >
                        +91-9839288990
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
export default Enquiry;
