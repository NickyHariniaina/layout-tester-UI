export const changeInputValue = (event, typed, setTyped, touch, word, setWord, count, setCount, setLastInput, userInput, setReload, reload, classPreview, passedClass, mistakeClass) => {
  const inputPreview = document.querySelector(`.${classPreview}`)
  word = word.split(" ")
  if (typed === word[count]) {
    inputPreview.classList.add(`${passedClass}`)
    inputPreview.classList.remove(`${mistakeClass}`)
  }
  else inputPreview.classList.remove(`${passedClass}`)
  if (event.key === " ") {
    if (typed === word[count]) {
      setTyped("Type...")
      userInput.value = ""
      setCount(i => i + 1)
      setLastInput(input => input + typed + " ")
    } else {
      inputPreview.classList.add(`${mistakeClass}`)
    }
    if (count === word.length) {
      setWord("")
      setLastInput("")
      setCount(0)
      setReload(!reload)
    }
  }
  else if (touch.test(event.key) && event.key.length === 1) {
    setTyped(text => text + event.key)
    if (typed === "Type...") setTyped(text => touch.test(event.key) ? event.key : " ")
  } else if (event.key === "Backspace") {
    if (typed !== "Type...") {
      setTyped(text => {
        text = text.split("")
        text.pop()
        return text.join("")
      })
    }
  }
}

export const fetchAPI = async (url, setWord, error, loading, setError, setLoading) => {
  try {
    const data = await fetch(url)
    if (data.ok) {
      let Jdata = await data.json()
      setWord(Jdata.join(" "))
      setLoading(!loading)
    }
  } catch (e) {
    setError(!error)
  }
}
