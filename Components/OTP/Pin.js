import React, { useRef } from "react";
import { useState } from "react";
// import PropTypes from "prop-types";
import PinItem from "./PinItem";

const Pin = ({ inputLength, setOtpHandler }) => {
  const [inputArr] = useState(new Array(inputLength).fill(""));

  // I want to store all the inputs fields value in useRef
  // then you have to pass a function in ref={()=>{}}
  const inputRef = useRef([]);

  // for showing the value of inputs
  const [inputBoxValue, setInputBoxValue] = useState(
    new Array(inputLength).fill("")
  );

  const handleOnChange = (e, ind) => {
    inputBoxValue[ind] = e.target.value;
    setInputBoxValue(inputBoxValue);
    //   for moving the focus to  next input field
    if (e.target.value.length > 0 && ind < inputLength - 1)
      inputRef.current[ind + 1].focus();
    console.log(inputBoxValue);
    setOtpHandler(inputBoxValue.join(""));
  };

  const handleBackSpace = (e, ind) => {
    if (ind > 0) {
      inputRef.current[ind - 1].focus();
    }
  };

  const handlePaste = (e) => {
    // this will prevent to paste any thing in otp field
    // e.preventDefault();

    // console.log(e.clipboardData.getData("text"));

    const pasteData = e.clipboardData
      .getData("text")
      .split("")
      .splice(0, inputLength);
    console.log(pasteData);
    // the map method returns a new array by applying the callback function on each element of an array, while the forEach method doesn't return anything.
    pasteData.forEach((data, ind) => {
      inputBoxValue[ind] = data;
      inputRef.current[ind].value = data;

      if (ind < inputLength - 1) {
        inputRef.current[ind].focus();
      }
    });
  };

  // console.log(inputRef.current);
  return (
    <div
      // style={{ display: "flex", justifyContent: "center" }}
      className="flex justify-evenly mt-5 "
      onPaste={handlePaste}
    >
      {inputArr.map((elem, ind) => {
        return (
          <PinItem
            key={ind}
            ref={(elem) => {
              // this ref return all input elements
              //   console.log(elem);
              inputRef.current[ind] = elem;
            }}
            onChange={(e) => handleOnChange(e, ind)}
            onBackSpaceHandler={(e) => {
              handleBackSpace(e, ind);
            }}
          />
        );
      })}
    </div>
  );
};

export default Pin;
// here small p in propTypes and res capyial P
// Pin.propTypes = {
//   inputLength: PropTypes.number.isRequired,
// };
