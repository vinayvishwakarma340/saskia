import React from "react";
import { forwardRef } from "react";

const PinItem = forwardRef(({ onChange, onBackSpaceHandler }, ref) => {
  const handleKeyUp = (e) => {
    if (e.keyCode === 8) {
      onBackSpaceHandler();
    } else {
      onChange(e);
    }
  };
  return (
    <div>
      <input
        // className="inputDesign"
        className="border-solid border-2 w-10 h-12 rounded p-2 text-center outline-none border-gray-400shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-md"
        maxLength={1}
        onChange={onChange}
        ref={ref}
        onKeyUp={handleKeyUp}
        onKeyPress={(e) => {
          if (!/[0-9]/.test(e.key)) {
            e.preventDefault()
          }
        }}
      />
    </div>
  );
});

export default PinItem;
