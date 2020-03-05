import React, { useState } from "react";
import Button from "../Button";

import "./Counter.css";
//import { getElementError } from "@testing-library/react";

const Counter = () => {
  const [value, setValue] = useState(0);

  const numberClassName = value === 0 ? "number-zero" : "number-not-zero";

  return (
    <section>
      <Button text="Increment" onClick={() => setValue(value + 1)} />
      <h2 className={numberClassName}>{value}</h2>
    </section>
  );
};

export default Counter;
