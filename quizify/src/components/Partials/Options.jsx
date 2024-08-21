import React, {useState} from "react";

export default function Options(props) {
  // state to select the option
  const [selectedOption, setSelectedOption] = useState("");

  // Function for handling the option change
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Inline style for label
  const label = {
    backgroundColor: "#fff",
    borderRadius: "10px",
    width: "100%",
    padding: "2%",
    margin: "2% 0",
  };

  return (
    <label style={label}>
      <input
        type="radio"
        name="answer"
        value={props.value}
        checked={selectedOption === props.value}
        onChange={handleOptionChange}
      />
      {props.label}
    </label>
  );
}
