import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import DisplayNews from "./components/DisplayNews.js";
import getResults from "./newsloader.js";

function App() {
  //our state, i.e. the results from HN for a certain query
  const [myfeed, setMyfeed] = useState({});
  //the textbox where you write your search term

  //what happens when you submit your search query: call getResults, which fetches and updates our state ("myfeed")

  const getNews = () => {
    getResults("react", setMyfeed);
  };
  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="App">
      <DisplayNews state={myfeed} />
    </div>
  );
}

export default App;
