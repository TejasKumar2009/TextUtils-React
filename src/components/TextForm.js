import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpperCase = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text Converted to Uppercase!", "success");
  };

  const handleLowerCase = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text Converted to Lowercase!", "success");
  };

  const handleExtraSpaces = () => {
    const newText = text.replace(/\s+/g, " ");
    setText(newText);
    props.showAlert("Extra Spaces Removed!", "success");
  };

  const handleClearText = () => {
    setText("");
    props.showAlert("Text Cleared!", "success");
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied To Clipboard!", "success");
  };

  return (
    <>
      <div className="container my-4">
        <h1
          className={`text-center text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          Enter Text Below to Analyze
        </h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: `${
                props.mode === "light" ? "white" : "#1c2128"
              }`,
              color: `${props.mode === "light" ? "black" : "white"}`,
            }}
            value={text}
            onChange={handleOnChange}
            className="form-control"
            id="textBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          onClick={handleUpperCase}
          className={`btn btn-${props.blueLight==="enable" ? "warning" : "primary"} mx-1 my-1 `}
        >
          Convert to UPPERCASE
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleLowerCase}
          className={`btn btn-${props.blueLight==="enable" ? "warning" : "primary"} mx-1 my-1`}
        >
          Convert to lowercase
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleExtraSpaces}
          className={`btn btn-${props.blueLight==="enable" ? "warning" : "primary"} mx-1 my-1`}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleClearText}
          className={`btn btn-${props.blueLight==="enable" ? "warning" : "primary"} mx-1 my-1`}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleCopyText}
          className={`btn btn-${props.blueLight==="enable" ? "warning" : "primary"} mx-1 my-1`}
        >
          Copy Text
        </button>
      </div>
      <div className="container my-4">
        <h2
          className={`my-3 text-${props.mode === "light" ? "dark" : "light"}`}
        >
          Your Text Summary
        </h2>
        <h5
          className={`mb-3 text-${props.mode === "light" ? "dark" : "light"}`}
        >
          {text.split(" ").filter((element) => element.length !== 0).length}
          {text.split(" ").filter((element) => element.length !== 0).length ===
          1
            ? " Word "
            : " Words "}
          & {text.length}
          {text.split(" ").filter((element) => element.length !== 0).length
            ? " Character"
            : " Characters"}
        </h5>
        <h5
          className={`mb-3 text-${props.mode === "light" ? "dark" : "light"}`}
        >
          {0.0032 *
            text.split(" ").filter((element) => element.length !== 0).length}
          &nbsp;Average Minutes to Read
        </h5>
        {text.length === 0 ? (
          <h2 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
            No Text To Preview
          </h2>
        ) : (
          <h2 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
            Preview -
          </h2>
        )}
        <details>
          <summary
            className={`text-${props.mode === "light" ? "dark" : "light"}`}
          >
            {text.slice(0, 1000)}
          </summary>
          {text.slice(1000, text.length)}
        </details>
      </div>
    </>
  );
};

export default TextForm;
