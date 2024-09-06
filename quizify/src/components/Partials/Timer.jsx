import { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export default function Timer({ onTimesUp }) {
  const timerStyle = {
    width: "110px",
    height: "110px",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "var(--bg-color-primary-color)",
    fontSize: "1.8em",
    fontFamily: "var(--text-font-family)",
    fontWeight: "500",
  };

  const [timeLeft, setTimeLeft] = useState(300);

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

  // Format the time as minutes and seconds
  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return (
      <div style={timerStyle}>{`0${minutes}: ${
        seconds < 10 ? "0" : ""
      }${seconds}`}</div>
    );
  };

  return (
    <CountdownCircleTimer
      isPlaying
      duration={300}
      colors={"#134B70"}
      colorsTime={[10, 6, 3, 0]}
      size={130}
      strokeWidth={10}
    >
      {({ timeLeft }) => formatTime(timeLeft)}
    </CountdownCircleTimer>
  );
}
