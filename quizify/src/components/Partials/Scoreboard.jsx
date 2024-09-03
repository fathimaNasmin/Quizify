import { useContext, useEffect } from "react";
import { ParticipantsContext } from "../context/participants";
import { questions } from "../../../questions";

export default function Scoreboard() {
  const { participants } = useContext(ParticipantsContext);

  useEffect(()=>{

  },[])

  const scoreBoard = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "2% 0",
    width: "100%",
    boxSizing: "border-box",
  };
  const participantsStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "var(--text-color)",
    margin: "10px 0%",
    padding: "0% 2%",
    borderRadius: "10px",
    width: "100%",
  };
  const pTagStyle = {
    color: "black",
    fontSize: "1em",
    fontFamily: "var(--text-font-family)",
    fontWeight: "500",
  };
  return (
    <>
      <h3>Scoreboard</h3>
      <div style={scoreBoard}>
        {participants.map((person, index) => {
          return (
            <div key={index} style={participantsStyle}>
              <p style={pTagStyle}>{person.name}</p>
              <p style={pTagStyle}>
                {person.score}/{questions.length}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
