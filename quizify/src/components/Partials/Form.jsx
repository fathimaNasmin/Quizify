import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Options from "./Options";

export default function Form() {
  // Inline style for Form
  const form = {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    padding: "2%",
  };

  return (
    <form action="" style={form}>
      <Options value="option 1" label="Option 1" />
      <Options value="option 2" label="Option 2" />
      <Options value="option 3" label="Option 3" />
      <Options value="option 4" label="Option 4" />

      <Button type="submit" text="Next" />
    </form>
  );
}
