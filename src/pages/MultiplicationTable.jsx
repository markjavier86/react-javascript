import React from "react";
import { useState } from "react";

function MultiplicationTable() {
  const [input, setInput] = useState("");
  const sequence = [];

  const getMultiplicationTable = (number) => {
    // Check if letter or null
    if (isNaN(number) || !number) {
      return "Please enter a number";
    }

    //Creating a multiplication table
    for (let i = 1; i <= 10; i++) {
      // display the result
      sequence.push(i * number);
    }

    return sequence.map((data) => data);
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
            className="text-primary"
            name="text"
            id="text"
            cols="30"
            rows="10"
            readOnly={true}
            placeholder="Output"
            value={getMultiplicationTable(input)}
          />
        </div>
      </div>
    </div>
  );
}

export default MultiplicationTable;
