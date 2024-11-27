import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { ThreeDots } from "react-loader-spinner";

const ReferModal = (props) => {
  const cancelButtonRef = useRef(null);

  const carModal = [
    {
      name: "Venue",
    },
    {
      name: "AURA",
    },
    {
      name: "Grand i10 NIOS",
    },
    {
      name: "Xcent",
    },
    {
      name: "Santro",
    },
    {
      name: "Elite i20",
    },
    {
      name: "Grand i10",
    },
    {
      name: "The Next Gen Verna",
    },
    {
      name: "Kona Electric",
    },
    {
      name: "i20 N Line",
    },
    {
      name: "Alcazar",
    },
    {
      name: "Tucson",
    },
    {
      name: "Creta",
    },
    {
      name: "Elantra",
    },
    {
      name: "Exter",
    },
    {
      name: "Eon",
    },
  ];

  const HandleSubmitForm = (e) => {
    e.preventDefault();
    props.referfriend();
    clearFields();
  };

  const clearFields = () => {
    props.setName("");
    props.setMobiNum("");
    props.setCmodel("");
    props.setCregNum("");
    props.setRefName("");
    props.setRefMobi("");
  };

  return (
    <Transition.Root show={props.openReferModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={props.setOpenReferModal}
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
                      src={"/Modalpics/refer.webp"}
                      height={50}
                      width={50}
                      alt="refer"
                    />
                  </div>
                  <div className="text-lg flex justify-center font-semibold leading-6 text-gray-900">
                    Refer a Friend
                  </div>

                  <div className="mt-3   sm:mt-0 sm:ml-4 sm:text-left">
                    <form onSubmit={HandleSubmitForm}>
                      <div className="bg-zinc-100 py-2 my-2 rounded-md">
                        <div className="flex text-lg  justify-center mt-5 text-blue-500  ">
                          Your Details
                        </div>
                        <div className="p-2">
                          <label
                            htmlFor="country"
                            className="block text-base font-medium leading-6 text-gray-900"
                          >
                            Your Name<span className="text-red-500">*</span>
                          </label>
                          <input
                            value={props.firstname}
                            onChange={(e) => props.setName(e.target.value)}
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
                            Your Mobile Number
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            required
                            value={props.mobiNum}
                            onChange={(e) => props.setMobiNum(e.target.value)}
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
                            htmlFor="model"
                            className="block text-base font-medium leading-6 text-gray-900"
                          >
                            Your Hyundai Car Model
                            <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={props.cmodel}
                            onChange={(e) => props.setCmodel(e.target.value)}
                            required
                            id="model"
                            name="model"
                            autoComplete="model-name"
                            className="mt-1 px-3 block w-full rounded-md border-0 bg-white    py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                          >
                            <option
                              value={""}
                              selected={props.cmodel === ""}
                              disabled
                            >
                              --Select Model--
                            </option>
                            {carModal.map((item, id) => {
                              return <option key={id}>{item.name}</option>;
                            })}
                          </select>
                        </div>

                        <div className="p-2">
                          <label
                            htmlFor="country"
                            className="block text-base font-medium leading-6 text-gray-900"
                          >
                            Your Hyundai Car Registration Number
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            value={props.cregNum}
                            onChange={(e) => props.setCregNum(e.target.value)}
                            name="reg"
                            id="reg"
                            maxLength={10}
                            autoComplete="text"
                            className="mt-1 outline-none px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="bg-blue-100 rounded-md py-2">
                        <div className="flex text-lg justify-center my-3 text-blue-500  ">
                          Reference Details
                        </div>

                        <div className="p-2">
                          <label
                            htmlFor="country"
                            className="block text-base font-medium leading-6 text-gray-900"
                          >
                            Reference Name
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            value={props.refName}
                            onChange={(e) => props.setRefName(e.target.value)}
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
                            Reference Mobile Number
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            value={props.refMobi}
                            onChange={(e) => props.setRefMobi(e.target.value)}
                            name="phone"
                            id="phone"
                            maxLength="10"
                            minLength="0"
                            pattern="^[6789][0-9]{9}$"
                            autoComplete="mobile"
                            className="mt-1 outline-none px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
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
                          onClick={() => props.setOpenReferModal(false)}
                          ref={cancelButtonRef}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
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
export default ReferModal;
