import Image from "next/image";
import React from "react";
import Footer from "../Components/Footer";
import Header from "Components/Header";

const NoDataFound = () => {
    return (
        <div>
            <div className="sticky top-0 z-50">
                <Header />
            </div>
            <div className="text-center text-3xl font-medium text-blue-600 py-6 my-4">
                Access in only for Authorised member
            </div>
            <Image
                src={"/security.svg"}
                className="mx-auto"
                height={500}
                width={500}
            />
            <Footer />
        </div>
    );
};

export default NoDataFound;
