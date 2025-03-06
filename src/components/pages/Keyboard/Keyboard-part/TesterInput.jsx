import { useState, useId, useEffect } from "react";
import { Loading } from "./Loading.jsx";
import { Bar } from "./Bar";
import { ErrorNotification } from "./ErrorNotification.jsx";
import { changeInputValue } from "./function/TesterInput.js";
import { fetchAPI } from "./function/TesterInput.js";

export const TesterInput = ({ onKeyDown }) => {
  const [lastInput, setLastInput] = useState("");
  const [reload, setReload] = useState(true);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const userInput = document.querySelector(".userInput");
  const inputId = useId();
  const [word, setWord] = useState("");
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(30);
  const [error, setError] = useState(false);
  const [typed, setTyped] = useState("Type...");
  const touch = /[a-zA-Z0-9]/;

  useEffect(() => {
    fetchAPI(
      "https://random-word-api.herokuapp.com/word?number=5",
      setWord,
      error,
      loading,
      setError,
      setLoading
    );
  }, [reload]);

  const handleKeyDown = (event) => {
    changeInputValue(
      event,
      typed,
      setTyped,
      touch,
      word,
      setWordg
      count,
      setCount,
      setLastInput,
      userInput,
      setReload,
      reload,
      "keyboard__tester-input__preview",
      "keyboard__tester-input__preview_success",
      "keyboard__tester-input__preview_mistake"
    );
  };

  return (
    <div
      className="container-fluid bg-dark border rounded my-1"
      onKeyDown={handleKeyDown}
    >
      <div className="keyboard__tester-input__word fs-1 px-4 py-1 text-light text-nowrap px-2">
        {loading ? <Loading /> : word}
      </div>
      <div className="keyboard__tester-input__answer fs-1 px-4 py-1 text-light text-nowrap">
        {lastInput}
      </div>
      <div className="keyboard__tester-input__preview fs-4 my-2 py-1 mx-auto w-25 text-center bg-light rounded">
        {typed}
      </div>
      <input
        type="text"
        className="form-control w-25 mx-auto my-2 userInput d-none"
        id={inputId}
      />
      <Bar inputId={inputId} minute={minute} second={second} />
      <div className="">{error ? <ErrorNotification /> : null}</div>
    </div>
  );
};
