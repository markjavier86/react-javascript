import React from "react";
import { useState } from "react";

function Sum() {
  const [input, setInput] = useState("");

  const getSumOfAllNumbers = (number) => {
    // Check if letter or null
    if (isNaN(number) || !number) {
      return "Please enter a number";
    }

    let sum = 0;
    for (let i = 1; i <= number; i++) {
      sum = sum + i;
    }

    return sum;
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-5">
          <input
            type="text"
            className="w-100 lead"
            placeholder="Input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="col-md-5">
          <textarea
            className="text-primary fs-5"
            name="text"
            id="text"
            cols="30"
            rows="10"
            readOnly={true}
            placeholder="Output"
            value={getSumOfAllNumbers(input)}
          />
        </div>
      </div>
    </div>
  );
}

export default Sum;
