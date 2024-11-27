import React from "react";

const MyVoucherGroup = ({ data, onClick, isUnused }) => {
    const ProvideImageToCreatedVoucherType = (val) => {
        if (val === "10% Off hyundai Genuine Accessories") {
            return "/VoucherImages/getTenPerOff.png";
        } else if (
            val === "Free Upholstery Cleaning on Accidental Repair Worth Rs1000"
        ) {
            return "/VoucherImages/accidental.png";
        } else if (val === "Gift A Friend - 10000 OFF") {
            return "/VoucherImages/tenThousandOff.png";
        } else if (val === "3000 Service Coupon") {
            return "/VoucherImages/threeThousandOff.png";
        } else if (val === "3 free service get discount on paid service") {
            return "/VoucherImages/oneThousandOff.png";
        }
    };

    const buttonShowHandler = (item) => {
        return (
            <>
                {item.VoucherType === "3000 Service Coupon" && isUnused ? (
                    <div className="cursor-not-allowed relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-2 text-sm font-semibold bg-red-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className=" text-black w-6 h-6"
                            aria-hidden="true"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                            />
                        </svg>
                        Redeem 'Gift a Friend' voucher to unlock
                    </div>
                ) : (
                    <div
                        onClick={() => {
                            onClick(
                                item.VoucherId,
                                item.CustomerName,
                                item.VoucherType,
                                item.VINNumber,
                                item.CreatedDate.slice(0, 10).split("-").reverse().join("/"),
                                item.Model,
                                item.createdVoucherType
                            );
                        }}
                        className="cursor-pointer relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-2 text-sm font-semibold bg-blue-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className=" text-black w-6 h-6"
                            aria-hidden="true"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                            />
                        </svg>
                        Download
                    </div>
                )}
            </>
        );
    };

    return (
        <ul
            role="list"
            className="grid  bg-gray-50 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3    mb-4 p-2 rounded-lg "
        >
            {data.length > 0 ? (
                data.map((item, index) => {
                    if (item.createdVoucherType === "Sales") {
                        if (item.VoucherStatus === "Unused") {
                            return (
                                <li
                                    key={index}
                                    className={`col-span-1 flex flex-col border-y-2   rounded-lg bg-white text-center shadow hover:scale-105 hover:ease-in hover:duration-300`}
                                >
                                    <div className="flex flex-1 flex-col p-2">
                                        <img
                                            className="mx-auto h-45 w-full flex-shrink-0 rounded-lg object-cover "
                                            src={ProvideImageToCreatedVoucherType(
                                                item.VoucherType
                                            )}
                                            alt={item.VoucherType}
                                        />
                                    </div>
                                    <div>
                                        <div className={"-mt-px flex   "}>
                                            <div className="flex w-0 flex-1">
                                                {buttonShowHandler(item)}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            );
                        } else {
                            return (

                                <li
                                    key={index}
                                    className={`col-span-1 flex flex-col border-y-2   rounded-lg bg-white text-center shadow hover:scale-105 hover:ease-in hover:duration-300`}
                                >
                                    <div className="flex flex-1 flex-col p-2">
                                        <img
                                            className="mx-auto h-45 w-full flex-shrink-0 rounded-lg object-cover "
                                            src={ProvideImageToCreatedVoucherType(
                                                item.VoucherType
                                            )}
                                            alt={item.VoucherType}
                                        />
                                    </div>
                                    <div>
                                        <div className={"-mt-px flex  "}>
                                            <div className="flex w-0 flex-1">
                                                <div

                                                    className="cursor-not-allowed relative bg- bg-slate-200  border-y-2 border-gray-600  -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-2 text-sm font-semibold text-black"                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke-width="1.5"
                                                        stroke="currentColor"
                                                        className=" text-black w-6 h-6"
                                                    >
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                                                        />
                                                    </svg>
                                                    Used
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                            );
                        }
                    }
                })
            ) : (
                <h4>Data not found</h4>
            )}
        </ul>
    );
};

export default MyVoucherGroup;
