import Success from "Components/Modal/Success";
import React, { useRef, useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import dynamic from "next/dynamic";
import Header from "Components/Header";
import Navbar from "Components/Navbar";
const Footer = dynamic(() => import("Components/Footer"));

const earnwithsas = () => {
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");
  const [incorrectOTP, setIncorectOTP] = useState("");
  const [wrongOTp, setWrongOTp] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState({});
  const [OtpError, setOtpError] = useState({});
  const [showSaved, setShowSaved] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showOptinput, setShowOptinput] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [getOtpClick, setGetOtpClick] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [invalidNumber, setInvalidNumber] = useState(false);
  const [verifyBtn, setVerifyBtn] = useState(false);
  const [referalShow, setReferalShow] = useState(false);
  const [getOtpShow, setGetOtpShow] = useState(true);
  const [resend, setResend] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

  const defaultArray = [{ id: 1, ReferrerName: "", ReferrerNumber: "" }];
  const [referals, settReferals] = useState(defaultArray);
  const ReferalRef = useRef(0);
  const goToServices = () => {
    ReferalRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const changeCursor = (event, identity) => {
    if (
      parseInt(event.target.value) >= 0 &&
      parseInt(event.target.value) <= 9
    ) {
      switch (identity) {
        case "1": {
          setOtp1(parseInt(event.target.value));
          setWrongOTp("");
          document.getElementById("second").focus();
          break;
        }
        case "2": {
          setOtp2(parseInt(event.target.value));
          setWrongOTp("");
          document.getElementById("third").focus();
          break;
        }
        case "3": {
          setOtp3(parseInt(event.target.value));
          setWrongOTp("");
          document.getElementById("fourth").focus();
          break;
        }
        case "4": {
          setWrongOTp("");
          setOtp4(parseInt(event.target.value));
          break;
        }
      }
    } else {
      console.log("invalid key");
    }
  };

  const refHandler = (index, name, mob) => {
    settReferals([
      ...referals,
      { id: index + 1, ReferrerName: "", ReferrerNumber: "" },
    ]);
  };

  const handleInputChange = (e, id, propertyName) => {
    const newValue = e.target.value;
    settReferals((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, [propertyName]: newValue } : item
      )
    );
  };
  const refRemove = (index) => {
    var refs = referals.filter((item) => item.id !== index);
    settReferals(refs);
  };
  const removeOtpInput = (e, identity) => {
    if (e.keyCode === 8) {
      switch (identity) {
        case "1": {
          setOtp1("");
          break;
        }
        case "2": {
          setOtp2("");
          document.getElementById("first").focus();
          setWrongOTp("");
          break;
        }
        case "3": {
          setOtp3("");
          document.getElementById("second").focus();
          setWrongOTp("");
          break;
        }
        case "4": {
          setOtp4("");
          document.getElementById("third").focus();
          setWrongOTp("");
          break;
        }
      }
    }
  };

  const formValidation = () => {
    let errors = {};
    let isValid = true;
    if (!name || name === "") {
      errors.name = "Please enter full name";
      isValid = false;
    }
    if (!mobile || mobile === "" || mobile.length !== 10) {
      errors.mobile = "Please enter your mobile";
      isValid = false;
    } else {
    }
    setError(errors);
    return isValid;
  };
  const handleSaveChanges = () => {
    InsertForm();
  };

  const onlyNumericMobile = (e) => {
    var reg = /^-?\d+$/;
    reg.test(e.target.value) || e.target.value === ""
      ? setMobile(e.target.value)
      : console.log("");
  };
  const OTPValidation = () => {
    let errors = {};
    let isValid = true;
    if (!otp1 && !otp2 && !otp3 && !otp4) {
      errors.otp = "Please enter OTP";
      isValid = false;
    }
    setOtpError(errors);
    return isValid;
  };

  const VerifyUser = () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 266c2bf86d70751f59ce1ae64d7353754eee1562"
    );
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      full_name: name,
      mobile: mobile,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch("https://api.sashyundai.com/sh/fe/UserVerify", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status_code === 200 && result.status === "Success") {
          setGetOtpShow(false);
          setShowOptinput(true);
          setGetOtpClick(false);
          setShowSaved(true);
          setVerifyBtn(false);
          setReferalShow(true);
          setResend(false);
          resend === "OTP Resend SuccessFully!" && setResend(true);
        } else if (result.status_code === 200 && result.status === "Fail") {
          setInvalidNumber(true);
        }
      })
      .catch((error) => console.log("error", error))
      .finally(() => setLoading(false));
  };
  const ResendOtp = () => {
    setResendLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 266c2bf86d70751f59ce1ae64d7353754eee1562"
    );
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      full_name: name,
      mobile: mobile,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch("https://api.sashyundai.com/sh/fe/UserVerify", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status_code === 200 && result.status === "Success") {
          // setGetOtpShow(false)
          // setShowOptinput(true)
          // setGetOtpClick(false)
          setResend(true);
          setIncorectOTP(false);
        } else if (result.status_code === 200 && result.status === "Fail") {
          setInvalidNumber(true);
        }
      })
      .catch((error) => console.log("error", error))
      .finally(() => setResendLoading(false));
  };

  const VerifyOTP = () => {
    setOtpLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 266c2bf86d70751f59ce1ae64d7353754eee1562"
    );
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      CustomerName: name,
      CustomerNumber: mobile,
      OTP: `${otp1}${otp2}${otp3}${otp4}`,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch("https://api.sashyundai.com/sh/fe/VerifyOTP", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status_code === 200 && result.status === "Success") {
          setShowSaved(true);
          setVerifyBtn(false);
          setReferalShow(true);
          setResend(false);
        } else if (result.status_code === 200 && result.status === "Fail") {
          setIncorectOTP(true);
          setVerifyBtn(false);
        } else if (result.status_code === 300 && result.status === "Fail") {
          if (formValidation()) {
            VerifyUser();
          }
        }
      })
      .catch((error) => console.log("error", error))
      .finally(() => setOtpLoading(false));
  };

  const InsertForm = () => {
    setBtnLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 266c2bf86d70751f59ce1ae64d7353754eee1562"
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      CustomerName: name,
      CustomerNumber: mobile,
      referrers: referals,
      otp: "1234",
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch("https://api.sashyundai.com/sh/fe/InsertReferral", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status_code === 200 && result.status === "Success") {
          setShowSuccess(true);
        } else if (result.status_code === 200 && result.status === "Fails") {
          setGetOtpClick(true);
        }
      })
      .catch((error) => console.log("error", error))
      .finally(() => setBtnLoading(false));
  };

  const Removedata = () => {
    setName("");
    setMobile("");
    setOtp1("");
    setOtp2("");
    setOtp3("");
    setOtp4("");
    setShowSaved(false);
    setGetOtpClick(false);
    setShowOptinput(false);
    settReferals(defaultArray);
    setShowSuccess(false);
    setReferalShow(false);
    setGetOtpShow(true);
  };

  //   const verifyOTPOnSubmit = () => {
  //     if (showOptinput === false) {
  //       handleSaveChanges();
  //     } else if (showSaved !== true) {
  //       setVerifyBtn(true);
  //     } else {
  //       handleSaveChanges();
  //     }
  //   };
  const verifyOTPOnSubmit = () => {
    handleSaveChanges();
  };

  return (
    <div className="relative">
      {showSuccess && (
        <Success
          success={"Congratulations!"}
          text={"Your Details are submitted successfully."}
          onClick={() => Removedata()}
        />
      )}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      {/* <div className=''>
                <div className='relative'><img src="/banner_earnwithSAS.jpg" className='w-full h-auto'/></div>
                <div className='absolute top-0  mx-auto max-w-full lg:flex items-center justify-between p-6 lg:px-14 m-8'>
                    <div className='w-full lg:w-[45%] pl-10'>
                        <h1 className='text-4xl font-bold text-center lg:text-left text-white'>EARN WITH SAS</h1>
                        <h2 className='block lg:hidden text-base text-center font-normal  mt-2 text-white'>Recommend SAS Hyundai this festive season to earn ₹ 5000 on maturity for each successful referral.</h2>
                        <h2 className='hidden lg:block text-xl font-normal  mt-2 text-white'>Recommend SAS Hyundai to your loved ones this festive season, and receive a reward of ₹ 5000 on maturity for each successful referral.</h2>
                        <div className='hidden lg:block w-full lg:w-36 bg-red-600 py-2 text-center rounded-full text-base font-semibold text-white mt-10 lg:mt-12 cursor-pointer' onClick={() => goToServices()}>REFER NOW</div>
                    </div>
                    <div className='hidden lg:block my-8 lg:my-10 lg:w-[50%] '>
                        <img src="/car.jpg" alt='refer' className='w-full h-[350px] object-contain' />
                    </div>
                </div>
            </div> */}

      <section className="relative">
        <img
          src="/img/BannerRefer.jpg"
          alt="Banner"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="max-w-screen-xl mx-auto px-4 py-4 sm:py-12 sm:px-6 lg:py-4 lg:px-4 relative">
          <div className="text-xs lg:text-sm text-right pb-6 lg:pb-0 text-white">
            *T&C Apply
          </div>
          <div className="">
            <div className="lg:py-16">
              <h1 className="italic text-4xl lg:text-5xl font-bold text-center  text-[#f5e085] pb-2">
                EARN WITH SAS
              </h1>

              <h2 className="text-lg lg:text-2xl  font-normal text-center  mt-2 text-white">
                Refer your <span className="text-[#e5b737]">Friends</span>
                ,&nbsp;<span className="text-[#e5b737]">Relatives</span> or{" "}
                <span className="text-[#e5b737]">Colleagues</span> to SAS Kia
                who wish to <br />
                buy a car and{" "}
                <span className="text-[#e5b737]">Earn ₹ 5000 cash</span>&nbsp;on
                every referral maturity.{" "}
              </h2>

              <div
                className="hidden lg:block w-full lg:w-36 mx-auto  bg-gray-600 py-2 text-center rounded-full text-base font-semibold text-white mt-10 lg:mt-12 cursor-pointer"
                onClick={() => goToServices()}
              >
                REFER NOW
              </div>
            </div>

            {/* <div className='hidden lg:block relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full'>
            <img
              alt='Car'
              src='car.jpg'
              className='absolute inset-0 h-full w-full object-cover'
            />
          </div> */}
            {/* <div className="text-xs lg:text-sm font-normal text-white text-center pt-8">Note: Offer Valid on Delivery on/before Diwali i.e. 12th Nov 2023</div> */}
          </div>
        </div>
      </section>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          verifyOTPOnSubmit();
        }}
      >
        <div className="bg-white py-1 lg:py-8 mt-2  ">
          <div className="mx-auto max-w-7xl  p-6 lg:px-14">
            <h3 className="text-3xl text-black font-bold text-center">
              Refer. Earn. Repeat.
            </h3>
            <div className="text-base lg:text-xl text-black pt-2 text-center lg:w-[70%] mx-auto">
              Share the details by filling the form below.
            </div>
            <div
              className={
                showSaved
                  ? "lg:border rounded-3xl mt-2 lg:mt-14 pointer-events-none opacity-40"
                  : "lg:border rounded-3xl mt-2 lg:mt-14"
              }
            >
              <div className="hidden lg:block  -mt-7 " ref={ReferalRef}>
                <div className="w-full lg:w-[30%] mx-auto bg-[#000000] text-white py-2 lg:py-3 text-center rounded-lg text-base lg:text-lg font-semibold  mt-8 lg:mt-0">
                  Share Your Contact Details
                </div>
              </div>
              <div className=" lg:flex gap-4 py-2 lg:py-4 lg:px-14 lg:mt-4 ">
                <div className="text-lg font-semibold text-black lg:w-[20%]">
                  Your Full Name
                  <span className="text-base text-red-600 ml-1 dark:text-red-500 ">
                    *
                  </span>
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    autoComplete="off"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      error.name = "";
                    }}
                    className={` w-full border outline-none text-base rounded-md border-gray-300 py-2 px-3 flex flex-row ${
                      error.name
                        ? "border-red-600 focus:ring-orange-500 bg-red-100"
                        : "focus:border-blue-500 focus:ring-blue-500 border-b bg-white focus:ring-1"
                    }`}
                  />
                  <div className="block font-semibold text-sm mt-1  text-left text-[#c91429]">
                    {error.name}
                  </div>
                </div>
              </div>
              <div className=" lg:flex gap-4 lg:mt-2 lg:mx-14 lg:pb-4 ">
                <div className="text-lg font-semibold text-black lg:w-[20%]">
                  Your Mobile No
                  <span className="text-sm text-red-600 ml-1 dark:text-red-500 ">
                    *
                  </span>
                </div>
                <div className="lg:mt-0 w-full  ">
                  <div className="flex items-center  outline-none  ">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="Enter Mobile No."
                      required
                      maxLength={10}
                      autoComplete="off"
                      value={mobile}
                      onChange={(e) => {
                        onlyNumericMobile(e);
                        error.mobile = "";
                        setInvalidNumber(false);
                      }}
                      className={` w-full border outline-none text-base rounded-md  border-gray-300 px-3 flex flex-row ${
                        error.mobile
                          ? "border-red-600 focus:ring-orange-500 bg-red-100"
                          : "focus:border-blue-500 focus:ring-blue-500 border-b bg-white focus:ring-1"
                      }`}
                      pattern="^[6789][0-9]{9}$"
                    />
                  </div>

                  {getOtpClick && (
                    <div className="font-semibold text-sm mt-1 ml-2 text-left text-[#c91429]">
                      {" "}
                      Please click on Get OTP button First.
                    </div>
                  )}
                  <div className="flex justify-between">
                    <div className="block font-semibold text-sm mt-1  text-left text-[#c91429]">
                      {error.mobile}
                    </div>
                    {invalidNumber && (
                      <div className="block font-semibold text-sm mt-1  text-left text-[#c91429]">
                        Number not registered
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {loading ? (
                <div className="px-1 mx-auto text-base font-semibold w-36 text-center py-2 rounded-md bg-black  text-white mt-6 mb-4 lg:mt-2 lg:mb-6 ">
                  Loading...
                </div>
              ) : (
                <>
                  {getOtpShow ? (
                    <div
                      className="px-1 mx-auto mt-6 mb-4 lg:mt-2 lg:mb-6 text-base font-semibold w-36 text-center py-2 rounded-md bg-black cursor-pointer text-white  hover:text-white"
                      onClick={() => {
                        formValidation() && VerifyUser();
                      }}
                    >
                      {/* Get OTP */}
                      sVerify
                    </div>
                  ) : (
                    <div
                      className="px-1 mx-auto mt-6 mb-4 lg:mt-2 lg:mb-6 text-base font-semibold w-36 text-center py-2 rounded-md bg-green-600  text-white  hover:text-white"
                      // onClick={() => {
                      //   formValidation() && VerifyUser();
                      // }}
                    >
                      {/* Get OTP */}
                      Verified
                    </div>
                  )}
                </>
              )}
              {/* {showOptinput && (
                <div className="lg:flex  lg:mx-20 lg:pb-6">
                  <div className="text-lg font-semibold text-black lg:w-[19%] lg:mt-2"></div>
                  <div className="w-full mt-4 lg:mt-0">
                    <div className="lg:flex items-center gap-4">
                      <div>
                        <div id="otp" class="flex flex-row pt-1">
                          <input
                            class="m-2 border h-10 w-10 text-center form-control rounded"
                            type="text"
                            id="first"
                            maxlength="1"
                            value={otp1}
                            onInput={(e) => {
                              changeCursor(e, "1");
                              setIncorectOTP("");
                              setResend("")
                              OtpError.otp = "";
                            }}
                            onKeyDown={(e) => {
                              removeOtpInput(e, "1");
                              setIncorectOTP("");
                              setResend("")
                            }}
                            required
                          />
                          <input
                            class="m-2 border h-10 w-10 text-center form-control rounded"
                            type="text"
                            id="second"
                            maxlength="1"
                            value={otp2}
                            onInput={(e) => {
                              changeCursor(e, "2");
                              setIncorectOTP("");
                              setResend("")
                              OtpError.otp = "";
                            }}
                            onKeyDown={(e) => {
                              removeOtpInput(e, "2");
                              setIncorectOTP("");
                              setResend("")
                            }}
                            required
                          />
                          <input
                            class="m-2 border h-10 w-10 text-center form-control rounded"
                            type="text"
                            id="third"
                            maxlength="1"
                            value={otp3}
                            onInput={(e) => {
                              changeCursor(e, "3");
                              setIncorectOTP("");
                              setResend("")
                              OtpError.otp = "";
                            }}
                            onKeyDown={(e) => {
                              removeOtpInput(e, "3");
                              setIncorectOTP("");
                              setResend("")
                            }}
                            required
                          />
                          <input
                            class="m-2 border h-10 w-10 text-center form-control rounded"
                            type="text"
                            id="fourth"
                            maxlength="1"
                            value={otp4}
                            onInput={(e) => {
                              changeCursor(e, "4");
                              setIncorectOTP("");
                              setResend("")
                              OtpError.otp = "";
                            }}
                            onKeyDown={(e) => {
                              removeOtpInput(e, "4");
                              setIncorectOTP("");
                              setResend("")
                            }}
                            required
                          />
                        </div>
                        <div className="block lg:hidden font-semibold text-sm mt-1 ml-2 text-left ">
                          Please enter the 4-digit OTP sent to your mobile
                          number.{" "}
                        </div>
                        <div className="block lg:hidden font-semibold text-sm mt-1 ml-2 text-left text-[#c91429]">
                          {OtpError.otp}
                        </div>
                        {incorrectOTP && (
                          <div className="block lg:hidden font-semibold text-sm mt-1 ml-2 text-left text-[#c91429]">
                            {" "}
                            Please enter correct OTP{" "}
                          </div>
                        )}
                        {verifyBtn && (
                          <div className="block lg:hidden font-semibold text-sm mt-1 ml-2 text-left text-[#c91429]">
                            {" "}
                            Please click Verify Button.{" "}
                          </div>
                        )}
                        {resend ? (
                          <div className="block lg:hidden font-semibold text-sm mt-1 ml-2 text-left text-[#c91429]">
                          OTP resent successfully! 
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      {showSaved ? (
                        <div className="w-full lg:w-[12%]     text-center rounded-full text-base font-semibold text-green-600   lg:ml-[2%]  flex justify-center items-center gap-1">
                          Verified
                          <sapn>
                            <FaCheck />
                          </sapn>
                        </div>
                      ) : (
                        <>
                          {otpLoading ? (
                            <div className="w-full lg:w-[10%] h-10  flex items-center justify-center  bg-[#c91429] hover:bg-blue-600 py-3 text-center rounded-full text-sm font-semibold  mt-2 cursor-pointer text-white lg:ml-[2%] lg:mt-2">
                              Loading...
                            </div>
                          ) : (
                            <div
                              onClick={() => OTPValidation() && VerifyOTP()}
                              className="w-full lg:w-[10%] h-10  flex items-center justify-center  bg-[#c91429] hover:bg-blue-600 py-3 text-center rounded-full text-sm font-semibold  mt-2 cursor-pointer text-white lg:ml-[2%] lg:mt-2"
                            >
                              Verify
                            </div>
                          )}
                        </>
                      )}
                      {resendLoading ? (
                        <div className="flex items-center gap-1 justify-center mt-1 text-base text-center lg:text-left text-blue-600  pt-2">
                          <svg
                            aria-hidden="true"
                            class="w-4 h-4  text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                          <span> Loading...</span>
                        </div>
                      ) : (
                        <div
                          className="text-base text-center lg:text-left text-red-600 hover:text-red-500 cursor-pointer pt-2"
                          onClick={() => {
                            formValidation() && ResendOtp();
                          }}
                        >
                          Resend OTP
                        </div>
                      )}
                    </div>
                    <div className="hidden lg:block font-semibold text-sm mt-1 lg:ml-2 text-left ">
                      Please enter the 4-digit OTP sent to your mobile number.{" "}
                    </div>
                    <div className="hidden lg:block  font-semibold text-sm mt-1 lg:ml-2 text-left text-[#c91429]">
                      {OtpError.otp}
                    </div>
                    {incorrectOTP && (
                      <div className="hidden lg:block font-semibold text-sm mt-1 ml-2 text-left text-[#c91429]">
                        {" "}
                        Please enter correct OTP{" "}
                      </div>
                    )}
                    {verifyBtn && (
                      <div className="hidden lg:block font-semibold text-sm mt-1 ml-2 text-left text-[#c91429]">
                        {" "}
                        Please click Verify Button.{" "}
                      </div>
                    )}
                    {resend ? (
                      <div className="hidden lg:block font-semibold text-sm mt-1 ml-2 text-left text-[#c91429]">
                      OTP resent successfully! 
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              )} */}
            </div>
            {referalShow ? (
              <>
                <div className="mt-4 border lg:border-none"></div>
                <div className="lg:border rounded-3xl mt-8 lg:mt-14">
                  <div className="flex flex-col lg:flex-row -mt-7 justify-center lg:gap-8">
                    <div className="block lg:hidden w-full lg:w-[30%]   text-xl font-bold text-black mt-2 lg:mt-0 underline">
                      Share Referral Details
                    </div>
                    <div className="hidden lg:block w-full lg:w-[30%]  bg-[#000000] py-3 text-center rounded-lg text-lg font-semibold text-white mt-8 lg:mt-0">
                      Share Referral Details
                    </div>
                  </div>
                  <div className="mx-auto max-w-7xl   py-6 lg:px-14 ">
                    {referals.map((item, index) => {
                      return (
                        <div>
                          <div className="flex justify-between items-center">
                            <div className="text-base font-semibold  text-black border-2 border-black px-3 py-1.5 rounded-md">
                              Referral {index + 1}{" "}
                            </div>
                            {index > 0 && (
                              <div
                                onClick={() => {
                                  refRemove(index + 1);
                                }}
                                className="w-[25%] lg:w-[10%]  bg-[#c91429] py-1 text-center rounded-full text-sm font-semibold  mt-0 cursor-pointer text-white"
                              >
                                Remove
                              </div>
                            )}
                          </div>
                          <div className=" lg:flex gap-4  py-4  ">
                            <div className="text-lg font-semibold text-black lg:w-[20%]">
                              Name
                              <span className="text-sm text-red-600 ml-1 dark:text-red-500 ">
                                *
                              </span>
                            </div>

                            <div className=" w-full">
                              <input
                                type="text"
                                placeholder="Name"
                                required
                                autoComplete="off"
                                value={referals[index].ReferrerName}
                                onChange={(e) => {
                                  handleInputChange(
                                    e,
                                    index + 1,
                                    "ReferrerName"
                                  );
                                }}
                                className=" block px-2 outline-none w-full  rounded-lg border-gray-300  py-2 text-gray-900 shadow-sm  placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div className=" lg:flex  gap-4 pb-4 lg:mt-2 ">
                            <div className="text-lg font-semibold text-black lg:w-[20%]">
                              Contact No
                              <span className="text-sm text-red-600 ml-1 dark:text-red-500 ">
                                *
                              </span>
                            </div>
                            <div className="w-full  ">
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                pattern="^[6789][0-9]{9}$"
                                required
                                placeholder="Enter contact no."
                                maxLength={10}
                                value={referals[index].ReferrerNumber}
                                onChange={(e) => {
                                  handleInputChange(
                                    e,
                                    index + 1,
                                    "ReferrerNumber"
                                  );
                                }}
                                autoComplete="off"
                                className=" block px-2 outline-none w-full rounded-lg border-gray-300 py-2 text-gray-900 shadow-sm  placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    <div
                      onClick={(e) => {
                        refHandler(referals.length);
                      }}
                      className="w-[35%] lg:w-[15%] mx-auto bg-[#c91429] py-1 text-center rounded-full text-sm font-semibold  mt-0 cursor-pointer text-white flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      Refer More
                    </div>
                    <button
                      type="submit"
                      className="hidden lg:block mx-auto gap-4 mt-5 w-[34%] "
                    >
                      <div
                        className={
                          "bg-blue-600 py-2 hover:bg-blue-500 text-center rounded-md  cursor-pointer text-lg font-semibold text-white"
                        }
                      >
                        {" "}
                        {btnLoading ? "Loading..." : "Submit"}
                      </div>
                    </button>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
        {referalShow && (
          <button
            type="submit"
            className="fixed lg:hidden  w-full  bottom-0 left-0 z-20"
          >
            <div
              className={
                "bg-blue-600 py-2 hover:bg-blue-500 text-center  cursor-pointer text-lg font-semibold text-white"
              }
            >
              {" "}
              {btnLoading ? "Loading..." : "Submit"}
            </div>
          </button>
        )}
      </form>
      <Footer />
    </div>
  );
};

export default earnwithsas;
