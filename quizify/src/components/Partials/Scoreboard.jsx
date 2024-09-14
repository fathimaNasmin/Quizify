import { useContext, useEffect } from "react";
import { ParticipantsContext } from "../context/participants";
import { randomQuestions } from "../../../questions";
import { getAllParticipants } from "../../appwrite/appwrite";

export default function Scoreboard() {
  const { participants, setParticipants } = useContext(ParticipantsContext);

  //Fetch all the participants
  useEffect(() => {
    getAllParticipants()
      .then((data) => {
        setParticipants(data.documents.reverse().slice(0, 5));
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
        {participants.map((person) => {
          return (
            <div key={person.id} style={participantsStyle}>
              <p style={pTagStyle}>{person.name}</p>
              <p style={pTagStyle}>
                {person.score}/{randomQuestions.length}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
