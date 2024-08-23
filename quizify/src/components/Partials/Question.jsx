import React from "react";

export default function Question(props) {
    const bgStyle = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      borderRadius: "10px",
      width:'100%',
      margin:'2% 0',
      padding:'2% 0'
    };
    const paraStyle = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "black",
      fontSize: "1.2em",
      fontFamily: "var(--text-font-family)",
      fontWeight: "500",
    };
    return (
      <div style={bgStyle}>
        <p style={paraStyle}>
          {props.questionText}
        </p>
      </div>
    );
};
