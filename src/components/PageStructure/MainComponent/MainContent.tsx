import * as React from "react";
import { useState } from "react";
import "./MainContent.css";
import Animate from "../../Animate";

const MainContent = () => {
  const [count] = useState(0);
  return (
    <main className="craetho">
      <div>
        <Animate key={count} />
      </div>
    </main>
  );
};

export default MainContent;
