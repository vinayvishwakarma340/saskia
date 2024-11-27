import Image from "next/image";
import React from "react";

const TextOverPic = (props) => {
    return (
        <div>
            <section className="relative bg-vbanner opacity-90 bg-cover bg-center bg-no-repeat">
                <div className="relative mx-auto max-w-screen-2xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                    <div className="max-w-2xl m-auto text-center sm:text-left">
                        <div className="mx-auto max-w-screen-2xl border-4   hover:border-blue-500 hover:shadow-blue-500  bg-gray-100 shadow-sm rounded-lg px-4 py-12 lg:py-16 sm:px-6 lg:px-8">
                            <div className="mx-auto ">
                                <Image
                                    src={"/Login.png"}
                                    height={30}
                                    alt="login"
                                    width={30}
                                    className="mx-auto pb-3 "
                                />
                                <h1 className="text-center text-2xl font-normal text-black sm:text-3xl">
                                    {props.heading}
                                </h1>

                                {/* --------------- form---------- */}
                                <form
                                    action=""
                                    className="mb-0 mt-4 bg-gray-100 space-y-4 rounded-lg p-4"
                                >
                                    <div className="relative">
                                        <input
                                            className="w-full outline-none rounded-lg border-2 border-gray-300 lg:px-10 px-6 py-3 text-center text-sm shadow-sm"
                                            placeholder="Enter Mobile Number"
                                            required
                                            name="phone"
                                            id="phone"
                                            maxLength="10"
                                            minLength="0"
                                            pattern="^[6789][0-9]{9}$"
                                            autoComplete="mobile"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="block mt-4 w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white"
                                    >
                                        Login
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TextOverPic;
