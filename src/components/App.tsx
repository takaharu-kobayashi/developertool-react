import { ChangeEvent, useState, FC } from "react";
import styled from "styled-components";

export const App: FC = () => {
  // Textarea State.
  const [text, setText] = useState<string>("");
  // Output Textarea for changed State.
  const [afterText, setAfterText] = useState<string>("");
  // Copy State.
  const [copied, setCopied] = useState<boolean>(false);

  // Set input content to State when entering text box.
  const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value);

  // When [Remove Blank Row] button is pressed.
  const onClickAdd = () => {
    // Set the value after removing blank lines in the text box.
    setAfterText(text.split("\n").filter((row) => row.trim() !== "").join("\n"));
  };

  // When [Copy to Clipboard] button is pressed.
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(afterText);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000); // 3秒後に非表示
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  
  // When the [Clear] button is pressed.
  const onClickClear = () => {
    // empty text box.
    setText("");
    setAfterText("");
  };

  return (
    <div>
      <STextarea value={text} onChange={onChangeText}></STextarea>
      <SButton onClick={onClickAdd}>Remove blank rows</SButton>
      <SButton onClick={copyToClipboard}>Copy to Clipboard</SButton>
      {copied && <span style={{ color: "green" }}>Copied!</span>}
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
