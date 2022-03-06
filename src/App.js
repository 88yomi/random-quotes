import { useState, useEffect } from "react";

import "./App.css";
import Wrapper from "./components/Wrapper";
import TextBox from "./components/Textbox";
import Button from "./components/Button";

const url =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

const App = () => {
  const [allQuotes, setAllQuotes] = useState({});
  const [quoteText, setQuoteText] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");

  useEffect(() => {
    document.title = "Random Quote Machine"
    
    async function getQuotes() {
      let response = await fetch(url);
      let data = await response.json();
      setAllQuotes(data.quotes);
    }
    getQuotes();
  }, []);

  // for the initial display of random quote
  useEffect(() => {
    if (allQuotes.length) {
      showQuote();
    }
  }, [allQuotes]);

  function showQuote() {
    let index = Math.floor(Math.random() * allQuotes.length);
    setQuoteText(allQuotes[index].quote);
    setQuoteAuthor(allQuotes[index].author);
  }

  const handleClick = () => {
    showQuote();
  };

  return (
      <Wrapper>
        <TextBox id="text" text={quoteText} />
        <TextBox id="author" text={quoteAuthor} />

        <Button id="new-quote" handleClick={handleClick} text="new quote" />
        <Button
          id="tweet-quote"
          text="tweet"
          tweet={encodeURI(quoteText + " - " + quoteAuthor)}
        />
      </Wrapper>
  );
};

export default App;
