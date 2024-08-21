import React, { useState } from "react";
import styled from "styled-components";

export default function Button(props) {
  // State to track the button is hovered
  const [isHovered, setIsHovered] = useState(false);

  const defaultStyle = {
    backgroundColor: "var(--bg-color-primary-color)",
    border: "none",
    color: "var(--text-color)",
    fontSize: "1.2em",
    margin: "2% 0",
    padding: "1% 8%",
    borderRadius: "50px",
    width: "100%",
    fontFamily: "var(--text-font-family)",
    fontWeight: "600",
    fontStyle: "var(--text-font-style)",
  };

  // Button hover style
  const buttonHover = {
    cursor: "pointer",
    backgroundColor: "var(--bg-color-button-hover)",
  };

  const buttonStyle = {
    ...defaultStyle,
    ...(isHovered ? buttonHover : {}),
    ...props.style,
  };

  return (
    <button
      style={buttonStyle}
      type={props.type}
      onMouseEnter={() => {
        setIsHovered(true)
      }}
      onMouseLeave={() => {
        setIsHovered(false)
      }}
    >
      {props.text}
    </button>
  );
}
