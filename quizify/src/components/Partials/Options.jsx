import React, { useState } from "react";

export default function Options(props) {

  // Inline style for label
  const label = {
    backgroundColor: "#fff",
    borderRadius: "10px",
    width: "100%",
    padding: "2% 0",
    margin: "2% 0",
    fontSize: "1em",
    fontFamily: "var(--text-font-family)",
    fontWeight: "500",
  };

  const labelHover = {
    cursor: "pointer",
  };

  const selectOptionStyle = {
    backgroundColor: "#6c919a",
  };

  const labelStyle = {
    ...label,
    ...selectOptionStyle,
  };

  return (
    <label
      style={props.selectedOption === props.value ? labelStyle : label}
    >
      <input
        type="radio"
        name="answer"
        value={props.value}
        checked={props.selectedOption === props.value}
        onChange={props.handleOptionChange}
        style={{ margin: "0px 10px 0px 10px" }}
      />
      {props.label}
    </label>
  );
}
