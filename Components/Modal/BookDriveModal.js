import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { outlet } from "../../json/outlet";
import { ThreeDots } from "react-loader-spinner";

const BookDriveModal = (props) => {
  const cancelButtonRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.bookadrive();
    clearfields();
  };

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
  ];

  const clearfields = () => {
    props.setTestName("")
    props.setTestEmail("")
    props.setTestMobiNum("")
    props.setTestModel("")
    props.setTestDate("")
    props.setOutlets("")
  }

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
                      src={"/services/drive.png"}
                      alt="service"
                      height={50}
                      width={50}
                    />
                  </div>
                  <div className="text-lg flex justify-center font-semibold leading-6 text-gray-900">
                    Book a Test Drive{" "}
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
                          value={props.testName}
                          onChange={(e) => props.setTestName(e.target.value)}
                          type="text"
                          required
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                        />
                      </div>

                      <div className="p-2">
                        <label
                          htmlFor="country"
                          className="block text-base font-medium leading-6 text-gray-900"
                        >
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          value={props.testEmail}
                          onChange={(e) => props.setTestEmail(e.target.value)}
                          type="email"
                          required
                          name="email-address"
                          id="email-address"
                          autoComplete="email"
                          className="mt-1 block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
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
                          required
                          value={props.testMobiNum}
                          onChange={(e) => props.setTestMobiNum(e.target.value)}
                          name="phone"
                          id="phone"
                          maxLength="10"
                          minLength="0"
                          pattern="^[6789][0-9]{9}$"
                          autoComplete="mobile"
                          className="mt-1 px-3 outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                        />
                      </div>

                      <div className=" p-2 col-span-6 sm:col-span-3">
                        <label
                          htmlFor="country"
                          className="block text-base font-medium leading-6 text-gray-900"
                        >
                          Choose a Model<span className="text-red-500">*</span>
                        </label>
                        <select
                          id="country"
                          required
                          value={props.testModel}
                          onChange={(e) => props.setTestModel(e.target.value)}
                          name="country"
                          autoComplete="country-name"
                          className="mt-1 block w-full px-3 rounded-md border-0 bg-white   py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                        >
                          <option
                            value={""}
                            selected={props.testModel === ""}
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
                          Date<span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={props.testDate}
                          onChange={(e) => props.setTestDate(e.target.value)}
                          required
                          id="date"
                          min={props.testDate}
                          autoComplete="date"
                          className="mt-1 block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                        />
                      </div>
                      <div className="p-2 col-span-6 sm:col-span-3">
                        <label
                          htmlFor="country"
                          className="block text-base font-medium leading-6 text-gray-900"
                        >
                          Preferred SAS Outlets
                          <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          id="country"
                          value={props.outlet}
                          onChange={(e) => props.setOutlets(e.target.value)}
                          name="country"
                          autoComplete="country-name"
                          className="mt-1 block px-3 w-full rounded-md border-0 bg-white    py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                        >
                          <option
                            value={""}
                            selected={props.outlet === ""}
                            disabled
                          >
                            --Choose outlet--
                          </option>
                          {outlet.map((item) => {
                            return <option>{item.name}</option>;
                          })}
                        </select>
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
                          onClick={() => props.setOpen(false)}
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
}
export default BookDriveModal;
