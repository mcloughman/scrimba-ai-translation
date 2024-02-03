import React from "react"
import { useState, useEffect } from "react"
import OpenAI from "openai"
import Header from "./Header"
import Form from "./Form"

function App() {
  const [translationResult, setTranslationResult] = useState("")
  const [userInput, setUserInput] = useState("")
  const [hasBeenTranslated, setHasBeenTranslated] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("French")

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  })

  const translateText = async () => {
    try {
      console.log("User input", userInput)
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You tranlate statements in English to ${selectedLanguage}`,
          },
          { role: "user", content: userInput },
        ],
      })
      // Access the translated content based on the selected language
      let translatedContent

      // Assuming the API response provides translations for different languages
      if (response.choices[0].message.translations) {
        translatedContent =
          response.choices[0].message.translations[selectedLanguage]
      } else {
        // Default to English if translations are not available
        translatedContent = response.choices[0].message.content
      }

      setTranslationResult(translatedContent)
    } catch (error) {
      console.error("Error translating text:", error)
      // Handle errors
    }
  }

  const handleInputChange = (e) => {
    setUserInput(e.target.value)
  }
  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await translateText()
    setHasBeenTranslated(true)
  }

  return (
    <div>
      <Header />
      <Form
        userInput={userInput}
        handleLanguageChange={handleLanguageChange}
        handleInputChange={handleInputChange}
        hasBeenTranslated={hasBeenTranslated}
        translationResult={translationResult}
        selectedLanguage={selectedLanguage}
        handleSubmit={handleSubmit}
        setHasBeenTranslated={setHasBeenTranslated}
      />
    </div>
  )
}

export default App
