import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import DisplayNews from "./components/DisplayNews.js";
import getResults from "./newsloader.js";
import Error from "./components/Error.js"

function App() {
  //our state, i.e. the results from HN for a certain query
  const [myfeed, setMyfeed] = useState({});
  const [isError, setIsError] = useState(0);

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const userQuery = "React";

  //the textbox where you write your search term

  //what happens when you submit your search query: call getResults, which fetches and updates our state ("myfeed")

  const getNews = () => {
    getResults(userQuery, page, setMyfeed, setLoading, setIsError);
    setLoading(true);
  };
  useEffect(() => {
    getNews();
  }, [page]);

  return (
    <div className="App">
      {isError ? <Error /> : <DisplayNews state={myfeed} loading={loading} setPage={setPage} /> }
    </div>
  );
}

export default App;
