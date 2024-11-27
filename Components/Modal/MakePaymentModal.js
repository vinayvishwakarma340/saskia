import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

const MakepaymentModal=(props)=> {
    const cancelButtonRef = useRef(null);

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
                            <Dialog.Panel className="relative transform p-1 overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all my-auto sm:my-8 w-full sm:max-w-lg">
                                <div className="bg-white border-2 border-blue-500 rounded-md  px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className=" flex justify-center">
                                        <Image
                                            src={"/services/payment.png"}
                                            height={50}
                                            width={50}
                                            alt="pay"
                                        />
                                    </div>
                                    <div className="text-lg flex justify-center font-semibold leading-6 text-gray-900">
                                        Make Payment
                                    </div>
                                    <div className="mt-6 p-6  text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <div className="grid grid-cols-2 gap-6">
                                            <Link
                                                target={"_blank"}
                                                href="https://www.payumoney.com/react/app/merchant/#/pay/merchant/623023267B3FB506CB61B35FC7B043B9?param=6679215"
                                                className="max-w-sm p-2 sm:p-6 cursor-pointer bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100  "
                                            >
                                                <Image
                                                    src={"/Modalpics/touch.webp"}
                                                    className={"m-auto "}
                                                    height={80}
                                                    width={80}
                                                    alt="touch"
                                                />
                                                <div className="text-base flex justify-center">
                                                    Book a Car
                                                </div>
                                            </Link>
                                            <Link
                                                target={"_blank"}
                                                href="https://www.payumoney.com/react/app/merchant/#/pay/merchant/623023267B3FB506CB61B35FC7B043B9?param=6679215"
                                                className="max-w-sm p-2 sm:p-6 cursor-pointer bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100  "
                                            >
                                                <Image
                                                    src={"/Modalpics/debit.webp"}
                                                    className={"m-auto"}
                                                    height={75}
                                                    width={75}
                                                    alt="debit"
                                                />
                                                <div className="text-base mt-1 flex justify-center">
                                                    Other Payments
                                                </div>
                                            </Link>
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
}
export default MakepaymentModal;
