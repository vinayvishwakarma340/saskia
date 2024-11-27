import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { ThreeDots } from "react-loader-spinner";

const WorkWithUsModal = (props) => {
  const [error, setError] = useState("");
  const cancelButtonRef = useRef(null);

  const city = [
    { name: "Lucknow" },
    { name: "Raebareli" },
    { name: "Jagdishpur" },
    { name: "Sultanpur" },
    { name: "Salon" },
  ];

  const departments = [
    { name: "Sales" },
    { name: "Accounts" },
    { name: "Finance (Auto Loan)" },
    { name: "Marketing" },
    { name: "HR" },
    { name: "EDP" },
    { name: "Bank office" },
    { name: "Digital" },
    { name: "Salon" },
    { name: "Customer Care" },
    { name: "Service" },
  ];

  const clearFields = () => {
    props.setTeamFileup("");
    props.setTeamMessage("");
    props.setTeamPosition("");
    props.setTeamLocation("");
    props.setTeamEmail("");
    props.setTeamAddress("");
    props.setTeamCity("");
    props.setTeamName("");
    props.setTeamMob("");
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const fileType = file.type;

    // Check if the file type is allowed
    if (
      ![
        "application/pdf",
        "image/jpeg",
        "image/png",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(fileType)
    ) {
      setError(
        "File type not allowed! Only pdf, jpg , jpeg, png, doc, docx are allowed"
      );
      props.setTeamFileup(null);
    } else {
      props.setTeamFileup(file);
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.Jointeam();
    clearFields();
    e.target.reset();
  };

  return (
    <Transition.Root show={props.openModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={props.setOpenModal}
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
                      src={"/Modalpics/work.webp"}
                      alt="work"
                      height={50}
                      width={50}
                    />
                  </div>
                  <div className="text-lg flex justify-center font-semibold leading-6 text-gray-900">
                    Work With Us
                  </div>

                  <div className="mt-3     sm:ml-4 sm:text-left">
                    <form onSubmit={handleSubmit}>
                      <div className="grid sm:grid-cols-2 grid-col-1">
                        <div className="p-2">
                          <label
                            htmlFor="country"
                            className="block text-base font-medium leading-6 text-gray-900"
                          >
                            Name<span className="text-red-500">*</span>
                          </label>
                          <input
                            value={props.teamName}
                            onChange={(e) => props.setTeamName(e.target.value)}
                            type="text"
                            required
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                          />
                        </div>

                        <div className="p-2">
                          <label
                            htmlFor="country"
                            className="block text-base font-medium leading-6 text-gray-900"
                          >
                            Your Email<span className="text-red-500">*</span>
                          </label>
                          <input
                            value={props.teamEmail}
                            onChange={(e) => props.setTeamEmail(e.target.value)}
                            type="email"
                            required
                            name="email"
                            id="email"
                            autoComplete="email"
                            className="mt-1 block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                          />
                        </div>
                        <div className="p-2">
                          <label
                            htmlFor="country"
                            className="block text-base font-medium leading-6 text-gray-900"
                          >
                            Your City<span className="text-red-500">*</span>
                          </label>
                          <input
                            value={props.teamCity}
                            onChange={(e) => props.setTeamCity(e.target.value)}
                            type="text"
                            required
                            name="text"
                            id="text"
                            autoComplete="given-name"
                            className="mt-1 block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                          />
                        </div>

                        <div className="p-2">
                          <label
                            htmlFor="country"
                            className="block text-base  font-medium leading-6 text-gray-900"
                          >
                            Your Mobile Number
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            required
                            value={props.teamMob}
                            onChange={(e) => props.setTeamMob(e.target.value)}
                            name="phone"
                            id="phone"
                            maxLength="10"
                            minLength="0"
                            pattern="^[6789][0-9]{9}$"
                            autoComplete="mobile"
                            className="mt-1 outline-none block w-full px-3  rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="p-2">
                          <label
                            htmlFor="country"
                            className="block text-base font-medium leading-6 text-gray-900"
                          >
                            Your Address<span className="text-red-500">*</span>
                          </label>
                          <input
                            value={props.teamAddress}
                            onChange={(e) =>
                              props.setTeamAddress(e.target.value)
                            }
                            type="text"
                            required
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                          />
                        </div>

                        <div className="flex   justify-center mt-2 text-blue-500 font-semibold">
                          {" "}
                          Desired Job Details{" "}
                        </div>

                        <div className=" p-2 col-span-6 sm:col-span-3">
                          <label
                            htmlFor="country"
                            className="block text-base font-medium leading-6 text-gray-900"
                          >
                            Position<span className="text-red-500">*</span>
                          </label>
                          <select
                            value={props.teamPosition}
                            onChange={(e) =>
                              props.setTeamPosition(e.target.value)
                            }
                            id="country"
                            required
                            name="country"
                            autoComplete="country-name"
                            className="mt-1 block w-full px-3 rounded-md border-0 bg-white   py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                          >
                            <option
                              value={""}
                              defaultValue={props.teamPosition === ""}
                              disabled
                            >
                              --Select Department--
                            </option>
                            {departments.map((item, id) => {
                              return <option key={id}>{item.name}</option>;
                            })}
                          </select>
                        </div>

                        <div className="p-2 col-span-6 sm:col-span-3">
                          <label
                            htmlFor="country"
                            className="block text-base font-medium leading-6 text-gray-900"
                          >
                            Choose City<span className="text-red-500">*</span>
                          </label>
                          <select
                            value={props.teamLocation}
                            onChange={(e) =>
                              props.setTeamLocation(e.target.value)
                            }
                            id="country"
                            required
                            name="country"
                            autoComplete="country-name"
                            className="mt-1 block w-full px-3 rounded-md border-0 bg-white  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                          >
                            <option
                              value={""}
                              defaultValue={props.teamLocation === ""}
                              disabled
                            >
                              --Choose City--
                            </option>
                            {city.map((item, id) => {
                              return <option key={id}>{item.name}</option>;
                            })}
                          </select>
                        </div>
                        <div className="p-2">
                          <label
                            htmlFor="country"
                            className="block text-base font-medium leading-6 text-gray-900"
                          >
                            Your File<span className="text-red-500">*</span>
                          </label>
                          <input
                            type="file"
                            required
                            accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                            onChange={handleFileUpload}
                            name="file"
                            id="file"
                            autoComplete="file"
                            className="mt-1 block w-full rounded-md border-0   px-3  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                          />
                        </div>
                        <div className="p-2 text-red-600 text-sm">{error}</div>
                        <div className="p-2">
                          <textarea
                            value={props.teamMessage}
                            onChange={(e) =>
                              props.setTeamMessage(e.target.value)
                            }
                            placeholder="Message to HR *"
                            required
                            type="text"
                            name="message"
                            id="message"
                            autoComplete=" message"
                            className="mt-1 px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
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
                          onClick={() => props.setOpenModal(false)}
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
export default WorkWithUsModal;
