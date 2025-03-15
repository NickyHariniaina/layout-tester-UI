import { useState, useId, useEffect } from "react";
import { Loading } from "./Loading.jsx";
import { Bar } from "./Bar";
import { ErrorNotification } from "./ErrorNotification.jsx";
import { changeInputValue } from "./function/TesterInput.js";
import { fetchAPI } from "./function/TesterInput.js";

export const TesterInput = ({ onKeyDown }) => {

  // TODO: Find a way to manage all these state.
  // But i should separate all of these in an other file 
  // and import it one by one

  const [lastInput, setLastInput] = useState("");
  const [reload, setReload] = useState(true);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [word, setWord] = useState("");
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(30);
  const [error, setError] = useState(false);
  const [typed, setTyped] = useState("Type...");
  const [translationX, setTranslationX] = useState(0);
  const touch = /[a-zA-Z0-9]/;
  const userInput = document.querySelector(".userInput");
  const inputId = useId();

  // I used the vercel API. customize it with your own link, if you want.

  useEffect(() => {
    fetchAPI(
      "https://random-word-api.vercel.app/api?words=100",
      setWord,
      error,
      loading,
      setError,
      setLoading
    );
  }, [reload]); // This reload is used in case the user wanted to play a new game

  const handleKeyDown = (event) => {
     changeInputValue(
      event,
      typed,
      setTyped,
      touch,
      word,
      setWord,
      count,
      setCount,
      setLastInput,
      userInput,
      setReload,
      reload,
      "keyboard__tester-input__preview",
      "keyboard__tester-input__preview_success",
      "keyboard__tester-input__preview_mistake",
      translationX,
      setTranslationX,
    );
  };

  // translationX should be a negative number, but
  // I'm too lazy to do such math so I just added a minus
  // operator to handle it more easily.

  return (
    <div
      className="container-fluid border rounded my-1"
      onKeyDown={handleKeyDown}
    >
      <div className="keyboard__tester-input__word fs-1 px-4 py-1 text-light text-nowrap px-2" style={{transform: `translateX(-${translationX}%)`}}>
        {loading ? <Loading /> : word}
      </div>
      <div className="keyboard__tester-input__answer fs-1 px-4 py-1 text-light text-nowrap"  style={{transform: `translateX(-${translationX}%)`}} >
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
