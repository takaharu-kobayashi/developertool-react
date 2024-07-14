import { ChangeEvent, useState, FC } from "react";
import styled from "styled-components";

export const App: FC = () => {
  // Textarea State.
  const [text, setText] = useState<string>("");
  // Output Textarea for changed State.
  const [afterText, setAfterText] = useState<string>("");

  // Set input content to State when entering text box.
  const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value);

  // When [Remove Blank Row] button is pressed.
  const onClickAdd = () => {
    // Set the value after removing blank lines in the text box.
    setAfterText(text.split("\n").filter((row) => row.trim() !== "").join("\n"));
  };

  // When the [Clear] button is pressed.
  const onClickClear = () => {
    // empty text box.
    setText("");
  };

  return (
    <div>
      <STextarea value={text} onChange={onChangeText}></STextarea>
      <SButton onClick={onClickAdd}>Remove blank row</SButton>
      <SButton onClick={onClickClear}>Clear</SButton>
      <SOutTextarea value={afterText}></SOutTextarea>
    </div>
  );
};

const STextarea = styled.textarea`
  width: 95%;
  height: 200px;
  rows: 10;
  cols: 100;
`;

const SButton = styled.button`
  margin: 16px;
`;

const SOutTextarea = styled.textarea`
  width: 95%;
  height: 200px;
  rows: 10;
  cols: 100;
  readonly: true;
`;
