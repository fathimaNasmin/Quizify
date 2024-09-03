import React, { useEffect, useState } from "react";

export default function Timer({onTimesUp}) {
  const timerStyle = {
    backgroundColor: "#fff",
    width: "110px",
    height: "110px",
    borderRadius: "50%",
    border: "5px solid var(--bg-color-primary-color)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "var(--bg-color-primary-color)",
    fontSize: "1.8em",
    fontFamily: "var(--text-font-family)",
    fontWeight: "500",
  };

  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    // Start the timer when the component renders
    // Check if time is up
    if (timeLeft === 0) {
      onTimesUp();
      return;
    }

    // Start the countdown timer
    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000); // Decrement every second

    return () => clearInterval(timerInterval);
  }, [timeLeft]);
  // console.log(timeLeft);

  // Format the time as minutes and seconds
  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `0${minutes}: ${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return <div style={timerStyle}>{formatTime()}</div>;
}


// show timeout message in finish page
// style the timer
