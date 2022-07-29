import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import DisplayNews from "./components/DisplayNews.js";
import getResults from "./newsloader.js";
import Error from "./components/Error.js";
import SearchBar from "./components/SearchBar.js";

function App() {
  //our state, i.e. the results from HN for a certain query
  const [myfeed, setMyfeed] = useState({});
  // has there been some kind of error?
  const [isError, setIsError] = useState(0);
  // what is the search query?
  const [queryWord, setQueryWord] = useState("React");
  // display some animation while waiting for response
  const [loading, setLoading] = useState(false);
  // what page of the results are we on?
  const [page, setPage] = useState(0);
  const userQuery = "React";

  //the textbox where you write your search term

  //what happens when you submit your search query: call getResults, which fetches and updates our state ("myfeed")

  const getNews = () => {
    setIsError(0);
    getResults(queryWord, page, setMyfeed, setLoading, setIsError);
    setLoading(true);
  };
  useEffect(() => {
    getNews();
  }, [page, queryWord]);

  return (
    <div className="App">
      <SearchBar setQueryWord={setQueryWord} setPage={setPage} />
      {isError ? (
        <Error />
      ) : (
        <DisplayNews state={myfeed} loading={loading} setPage={setPage} />
      )}
    </div>
  );
}

export default App;
