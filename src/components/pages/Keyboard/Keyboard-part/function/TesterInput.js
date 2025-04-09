/**
 * This file contains all the function used in TesterInput.jsx.
 * List of exported function in this file:
 *  - changeInputValue
 *  - fetchAPI
 */

// Calculate the translation here and change the value
// in the spacePressed func: the value change every we are in a odd number.
// This func return an integer.

const translateChanger = (wordLength) => {
  let oneWordWidth = 1.3;
  let translateValue = oneWordWidth * (wordLength + 2)
  return translateValue;
}

// This func has been made to manage the space event
// everything that should happens if the space is pressed

const spacePressed = ( setWord, setCount, setLastInput, userInput, setReload, reload, mistakeClass, inputPreview, typed, word, translationX, wordLength, setTranslationX, count, setTyped ) => {

  // If the typed word is equal to the current test word.
  // Here we handle all the color change of the input, 
  // className, translation and score. 
  // TODO: Add a score later. 

  if (typed === word[count]) {
    setTyped("Type...");
    userInput.value = "";
    setCount((i) => i + 1);
    setLastInput((input) => input + typed + " ");
    if (count % 2 === 0 && count !== 0)
      setTranslationX(t => t + translateChanger(wordLength))
  } else {
    inputPreview.classList.add(`${mistakeClass}`);
  }
};

const backSpacePressed = (typed, setTyped) => {
  if (typed !== "Type...") {
    // FIXME: There is a bug if the user type "Type...", like it's a minimal bug.
    setTyped((text) => {
      text = text.split("");
      text.pop();
      return text.join("");
    });
  }
};
const touchPressed = (event, touch, setTyped, typed) => {
  setTyped((text) => text + event.key);
  if (typed === "Type...")
    setTyped((text) => (touch.test(event.key) ? event.key : " "));
};

export const changeInputValue = ( event, typed, setTyped, touch, word, setWord,count, setCount, setLastInput, userInput, setReload, reload, classPreview, passedClass, mistakeClass, translationX, setTranslationX, ) => {
  
  const inputPreview = document.querySelector(`.${classPreview}`);
  word = word.split(" ");
  let wordLength = count === 0? word[count].length: word[count].length + word[count - 1].length;

  if (typed === word[count]) {
    inputPreview.classList.add(`${passedClass}`);
    inputPreview.classList.remove(`${mistakeClass}`);
  } else inputPreview.classList.remove(`${passedClass}`);

  // This part is for verifying the word length
  // And change the translationX value to the calculate value.
  // current translationX = 0.
  // TODO: Check the width of one letter.
  // Let's just tell that one letter is equal to 2px.
  // TODO: Verify if this is working as wanted.

  // The algo is in the spacePressed function.

  if (event.key === " ")
    spacePressed(
      setWord,
      setCount,
      setLastInput,
      userInput,
      setReload,
      reload,
      mistakeClass,
      inputPreview,
      typed,
      word,
      translationX,
      wordLength,
      setTranslationX,
      count,
      setTyped,
    );
  else if (touch.test(event.key) && event.key.length === 1)
    touchPressed(event, touch, setTyped, typed);
  else if (event.key === "Backspace") 
    backSpacePressed(typed, setTyped);
};

/**
 * This function fetches data from an API.
 * It changes the state of the word, error and loading.
 */

export const fetchAPI = async (
  url,
  setWord,
  error,
  loading,
  setError,
  setLoading,
) => {
  try {
    const data = await fetch(url);
    if (data.ok) {
      let Jdata = await data.json();
      setWord(Jdata.join(" "));
      setLoading(!loading);
    }
  } catch (e) {
    setError(!error); // A pop-up will appear if there is an error.
  }
};

// TODO: Change the "inputPreviewEntry" name.

export const showFocusedSign = (focusedState, inputPreviewEntry) => {
  if (focusedState) {
    inputPreview = document.querySelector(inputPreviewEntry);
    inputPreview.classList.add("keyboard__tester-input__preview-focused");
  } 
}