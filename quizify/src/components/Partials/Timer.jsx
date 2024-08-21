import React from "react";

export default function Timer() {
    const timerStyle = {
      backgroundColor: "#fff",
      width: "110px",
      height: "110px",
      borderRadius: "50%",
      border:'5px solid var(--bg-color-primary-color)',
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "var(--bg-color-primary-color)",
      fontSize: "1.8em",
      fontFamily: "var(--text-font-family)",
      fontWeight: "500",
    };
    return <div style={timerStyle}>00:00</div>
};
