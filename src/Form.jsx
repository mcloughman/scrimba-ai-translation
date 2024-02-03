const Form = ({
  userInput,
  handleInputChange,
  selectedLanguage,
  hasBeenTranslated,
  translationResult,
  handleLanguageChange,
  handleSubmit,
  setHasBeenTranslated,
}) => {
  return (
    <main className="main">
      <form onSubmit={handleSubmit}>
        <label className="input-label">
          {!hasBeenTranslated ? (
            <p>Text to translate 👇</p>
          ) : (
            <p>Original Text 👇</p>
          )}
          <textarea value={userInput} onChange={handleInputChange} />
        </label>
        <br />
        {!hasBeenTranslated ? (
          <>
            <p>Select language 👇</p>
            <div className="radios">
              <div className="radio">
                <input
                  type="radio"
                  name="language"
                  id="French"
                  value="French"
                  checked={selectedLanguage === "French"}
                  onChange={handleLanguageChange}
                />
                <label htmlFor="French">
                  <span>French</span> <img src="../assets/fr-flag.png" />
                </label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="language"
                  id="Spanish"
                  value="Spanish"
                  checked={selectedLanguage === "Spanish"}
                  onChange={handleLanguageChange}
                />
                <label htmlFor="Spanish">
                  <span>Spanish</span>
                  <img src="../assets/sp-flag.png" />
                </label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="language"
                  id="Japanese"
                  value="Japanese"
                  checked={selectedLanguage === "Japanese"}
                  onChange={handleLanguageChange}
                />
                <label htmlFor="Japanese">
                  <span>Japanese </span>
                  <img src="../assets/jpn-flag.png" />
                </label>
              </div>
            </div>

            <br />
            <button type="submit" onSubmit={handleSubmit}>
              Translate
            </button>
          </>
        ) : (
          <>
            <label className="result-label">
              Translation result:
              <p>Selected Language: {selectedLanguage}</p>
              <textarea readOnly value={translationResult} />
            </label>
            <br />
            <button type="button" onClick={() => setHasBeenTranslated(false)}>
              Another Translation?
            </button>
          </>
        )}
      </form>
    </main>
  )
}

export default Form
