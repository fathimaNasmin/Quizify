import React from "react";

export default function QuestionNo({currentIndex, length}) {
    const questionNoStyling = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "var(--bg-color-primary-color)",
      fontSize: "1.8em",
      fontFamily: 'var(--text-font-family)',
      fontWeight:'500',
      margin:'2% 0'
    };
    return <div style={questionNoStyling}>{currentIndex + 1}/{length}</div>
};
