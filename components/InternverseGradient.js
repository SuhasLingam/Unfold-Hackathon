import React from "react";
import Gradient from "rgt";

const internverseGradient = ({ text }) => (
  <span style={{ fontFamily: "PilatExtended" }}>
    <Gradient dir="left-to-right" from="#F9AC21" to="#6B17EC">
      {text ? text : "InternGROW"}
    </Gradient>
  </span>
);

export default internverseGradient;
