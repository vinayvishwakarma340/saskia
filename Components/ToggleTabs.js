import React, { useState } from "react";

const ToggleTabs = ({ callbackfunc }) => {
    const [activeButton, setActiveButton] = useState("Unused Voucher");

    const handleClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <div className={`flex border mx-auto ${activeButton === "Used Voucher" ? "border-black shadow-black" : "border-blue-600 shadow-blue-600"}  shadow-md  rounded-full p-1 max-w-fit justify-center mt-10`}>

            <div
                onClick={() => {
                    handleClick("Unused Voucher");
                    callbackfunc("Unused Voucher")
                }}
                className={
                    activeButton === "Unused Voucher"
                        ? "active text-white bg-blue-600 font-medium rounded-full border-blue-600 border  px-4 py-1 cursor-pointer"
                        : "px-4  py-1   text-black rounded-lg font-medium cursor-pointer"
                }
            >
                Unused Voucher
            </div>
            <div
                onClick={() => {
                    handleClick("Used Voucher");
                    callbackfunc("Used Voucher")
                }}
                className={
                    activeButton === "Used Voucher"
                        ? "active text-white bg-black font-medium rounded-full border-black px-4 py-1  border cursor-pointer"
                        : "px-4 py-1   text-black rounded-lg font-medium cursor-pointer"
                }
            >
                Used Voucher
            </div>
        </div>
    );
};

export default ToggleTabs;
