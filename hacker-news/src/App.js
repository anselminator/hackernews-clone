import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import DisplayNews from "./components/DisplayNews.js";
import getResults from "./newsloader.js";

function App() {
  //our state, i.e. the results from HN for a certain query
  const [myfeed, setMyfeed] = useState({});
  //the textbox where you write your search term
  const query = document.getElementById("initialQuery");

  //what happens when you submit your search query: call getResults, which fetches and updates our state ("myfeed")
  const getNews = (e) => {
    e.preventDefault();
    const form = document.getElementById("initialQuery");
    console.log("text = ", form.value);
    getResults(form.value, setMyfeed);
  };

  return (
    <div className="App">
      <form onSubmit={getNews}>
        <input
          id="initialQuery"
          type="text"
          placeholder="search HackerNews"
          defaultValue="react"
        ></input>
        <input type="submit" value="Search Hackernews"></input>
      </form>
      <DisplayNews state={myfeed} />
    </div>
  );
}

export default App;
