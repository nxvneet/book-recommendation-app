import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [showBook, setBook] = useState([]);

  //Dynamic objects

  let jsBooksObj = {
    "Eloquent JavaScript": "4/5",
    "You Don't Know JS": "3.5/5"
  };

  let fictionBooksObj = {
    "Shiva Triology": "5/5",
    "Harry Potter": "4.5/5"
  };

  let businessBooksObj = {
    "Never split the difference": "3.5/5",
    Loonshots: "5/5"
  };

  // Objects converted into a list

  var jsBooksList = Object.keys(jsBooksObj);
  var fictionBooksList = Object.keys(fictionBooksObj);
  var businessBooksList = Object.keys(businessBooksObj);

  //  click handler functions in which lists are diplayed using map() and stored in a variable,
  //   that variable gets diplayed by setBook()

  function jsClickHandler() {
    var jsBooksData = jsBooksList.map((jsBooks) => {
      return (
        <li key={jsBooks}>
          {jsBooks}
          <p className="rating">{jsBooksObj[jsBooks]}</p>
        </li>
      );
    });
    setBook(jsBooksData);
  }

  function fictionClickHandler() {
    var fictionBooksData = fictionBooksList.map((fictionBooks) => {
      return (
        <li key={fictionBooks}>
          {fictionBooks}
          <p className="rating"> {fictionBooksObj[fictionBooks]}</p>
        </li>
      );
    });
    setBook(fictionBooksData);
  }

  function businessClickHandler() {
    var businessBooksData = businessBooksList.map((businessBooks) => {
      return (
        <li key={businessBooks}>
          {businessBooks}
          <p className="rating"> {businessBooksObj[businessBooks]}</p>
        </li>
      );
    });
    setBook(businessBooksData);
  }

  //Added to acheive one tab open by default
  useEffect(() => {
    jsClickHandler();
  }, []);

  return (
    <div className="App">
      <h1>📚 goodBooks</h1>
      <p>Checkout my favourite books, Select a genre to get started</p>
      <span>
        <button onClick={jsClickHandler}>JavaScript</button>
        <button onClick={fictionClickHandler}>Fiction</button>
        <button onClick={businessClickHandler}>Business</button>
        <hr></hr>
        {showBook}
      </span>
    </div>
  );
}
