import React from "react";
import { CSVLink } from "react-csv";

const ServiceTable = ({ tabType, voucherListData, onClick }) => {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="mt-8 mb-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center    border border-gray-300 text-black   p-2">
                            <div className=" sm:text-xl">
                                Total Count : {voucherListData.length}
                            </div>
                            <button className="flex  gap-2 items-center bg-green-600 py-2 px-4  text-white  rounded-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                                    />
                                </svg>
                                <CSVLink
                                    data={voucherListData}
                                    filename={
                                        tabType === "Used Voucher"
                                            ? "used vouchers data"
                                            : "unused vouchers data"
                                    }
                                >
                                    Export
                                </CSVLink>
                            </button>
                        </div>
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 ">
                            <table className="min-w-full divide-y divide-gray-300 text-center">
                                <thead className="bg-black">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="py-3.5 pl-4 pr-3  text-sm font-semibold text-white sm:pl-6"
                                        >
                                            Sr.
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5  text-sm font-semibold text-white"
                                        >
                                            CUSTOMER NAME
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5  text-sm font-semibold text-white"
                                        >
                                            CUSTOMER MOBILE
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5  text-sm font-semibold text-white"
                                        >
                                            VEHICLE NUMBER
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5  text-sm font-semibold text-white"
                                        >
                                            VOUCHER TYPE
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5  text-sm font-semibold text-white"
                                        >
                                            CREATED DATE
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5  text-sm font-semibold text-white"
                                        >
                                            REDEEM DATE
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5  text-sm font-semibold text-white"
                                        >
                                            USER NAME
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5  text-sm font-semibold text-white"
                                        >
                                            ACTION
                                        </th>
                                    </tr>
                                </thead>
                                <tbody
                                    className={`${tabType === "Used Voucher"
                                        ? "divide-gray-400"
                                        : "divide-blue-400"
                                        } divide-y  bg-white`}
                                >
                                    {voucherListData.map((person, idx) => (
                                        <tr key={idx}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3  text-sm font-medium text-gray-900 sm:pl-6">
                                                {person.SerialNumber}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm  ">
                                                {person.CustomerName}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm  ">
                                                {person.CustomerMobile}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm  ">
                                                {person.VehicleNumber}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm  ">
                                                {person.VoucherType}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm  ">
                                                {person.CreatedDate.slice(0, 10)}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm  ">
                                                {tabType === "Used Voucher"
                                                    ? person.UpdatedDate.slice(0, 10)
                                                    : "-"}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm  ">
                                                {person.Username}
                                            </td>

                                            <td className="whitespace-nowrap px-2 py-3 text-sm  ">
                                                <div
                                                    className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
                                                    onClick={() => {
                                                        tabType === "Used Voucher"
                                                            ? onclick
                                                            : onClick(
                                                                person.VoucherId,
                                                                person.CustomerName,
                                                                person.VoucherType,
                                                                person.VehicleNumber,
                                                                person.CreatedDate.slice(0, 10)
                                                            );
                                                    }}
                                                >
                                                    <span
                                                        className={`absolute inset-0 rounded-lg border ${tabType === "Used Voucher"
                                                            ? "border-black group-active:border-black"
                                                            : "border-blue-600 group-active:border-blue-500"
                                                            } `}
                                                    ></span>
                                                    <span
                                                        className={`block border ${tabType === "Used Voucher"
                                                            ? "border-black rounded-lg bg-black  active:border-black active:bg-black  cursor-no-drop   "
                                                            : "border-blue-600 rounded-lg bg-blue-600   active:border-blue-500 active:bg-blue-500 cursor-pointer"
                                                            }    px-8 py-3 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform`}
                                                    >
                                                        Download
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceTable;
