import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Options from "./Options";

export default function Form() {
  // state to select the option
  const [selectedOption, setSelectedOption] = useState("");

  // Function for handling the option change
  const handleOptionChange = (event) => {
    setSelectedOption("");
    setSelectedOption(event.target.value);
    console.log(event.target.value);
  };

  // Inline style for Form
  const form = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <form action="" style={form}>
      <Options
        value="option1"
        label="Option 1"
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
      />
      <Options
        value="option2"
        label="Option 2"
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
      />
      <Options
        value="option3"
        label="Option 3"
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
      />
      <Options
        value="option4"
        label="Option 4"
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
      />

      <Button type="submit" text="Next" />
    </form>
  );
}
