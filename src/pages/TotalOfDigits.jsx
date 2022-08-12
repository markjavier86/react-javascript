import React from "react";
import { useState } from "react";

function TotalOfDigits() {
  const [input, setInput] = useState("");
  let total = 0;

  const getTotal = () => {
    input.split("").map((data) => {
      if (!isNaN(data)) {
        total = total + parseInt(data);
      }
    });

    return total;
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
        <div className="col-md-5 d-flex justify-content-center">
          <h1 className="text-primary">{getTotal()}</h1>
        </div>
      </div>
    </div>
  );
}

export default TotalOfDigits;
