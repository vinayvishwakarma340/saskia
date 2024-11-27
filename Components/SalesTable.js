import React from "react";
import { CSVLink } from "react-csv";

const SalesTable = ({ listdata, tabType, onClick }) => {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="mt-8 mb-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center    border border-gray-300 text-black   p-2">
                            <div className=" sm:text-xl">
                                Total Count : {listdata.length}
                            </div>
                            <button className="flex  gap-2 items-center bg-green-600 py-2 px-4  text-white  rounded-lg">
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
                                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                                    />
                                </svg>
                                <CSVLink
                                    data={listdata}
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
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-black ">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="py-3.5 text-center pl-4 pr-3  text-sm font-semibold text-white sm:pl-6"
                                        >
                                            Sr.
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5  text-center text-sm font-semibold text-white"
                                        >
                                            CUSTOMER NAME
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5  text-center text-sm font-semibold text-white"
                                        >
                                            CUSTOMER MOBILE
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5  text-center text-sm font-semibold text-white"
                                        >
                                            VIN NUMBER
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5  text-center text-sm font-semibold text-white"
                                        >
                                            VOUCHER TYPE
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5  text-center text-sm font-semibold text-white"
                                        >
                                            CREATED DATE
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5  text-center text-sm font-semibold text-white"
                                        >
                                            REDEEM DATE
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5  text-center text-sm font-semibold text-white"
                                        >
                                            USER NAME
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5  text-center text-sm font-semibold text-white"
                                        >
                                            ACTION
                                        </th>
                                        {/* <th
                                            scope="col"
                                            className="px-3 py-3.5  text-center text-sm font-semibold text-white"
                                        >
                                            UUID
                                        </th> */}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {listdata.map((person, idx) => (
                                        <tr className="text-center" key={idx}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                {person.SerialNumber}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-800">
                                                {person.CustomerName}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-800">
                                                {person.CustomerMobile}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-800">
                                                {person.VINNumber}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-800">
                                                {person.VoucherType}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-800">
                                                {person.CreatedDate.slice(0, 10)}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-800">
                                                {person.UpdatedDate.slice(0, 10)}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-800">
                                                {person.Username}
                                            </td>

                                            <td className="whitespace-nowrap px-2 py-3 text-sm text-gray-800">
                                                <div
                                                    className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
                                                    onClick={() => {
                                                        tabType === "Used Voucher"
                                                            ? onClick
                                                            : onClick(
                                                                person.VoucherId,
                                                                person.CustomerName,
                                                                person.VoucherType,
                                                                person.VINNumber,
                                                                person.CreatedDate.slice(0, 10)
                                                                    .split("-")
                                                                    .reverse()
                                                                    .join("/"),
                                                                person.Model,
                                                                person.createdVoucherType
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
                                            {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-800">
                                                {person.role}
                                            </td> */}
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

export default SalesTable;
