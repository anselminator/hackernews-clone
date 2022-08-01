import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@mui/material/TextField";
import Button from "@material-ui/core/Button";

function SearchBar({ setQueryWord, setPage }) {
  const submitHandler = (e) => {
    e.preventDefault();
    const text = document.getElementById("search-form");
    console.log("input string:", text.value);
    setQueryWord(text.value);
    setPage(0);
  };
  const submitHandler2 = (e) => {
    e.preventDefault();
    const text = document.getElementById("search-form2");
    console.log("input string:", text.value);
    setQueryWord(text.value);
    text.value = "";
    setPage(0);
  };

  return (
    <div className="App">
      <label htmlFor="search-form">
        <form onSubmit={submitHandler2}>
          {/*       <input
            type="text"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Search for..."
            onSubmit={submitHandler}
          />
          {/*}      <div className="searchIcon">
          <SearchIcon />
  </div> */}

          {/*   <button onClick={submitHandler}><SearchIcon /></button> */}
          <TextField
            id="search-form2"
            label="search hackernews"
            variant="filled"
          />
          <Button
            onClick={submitHandler2}
            variant="outlined"
            size="large"
            startIcon={<SearchIcon />}
          >
            Search
          </Button>
        </form>
      </label>
    </div>
  );
}

export default SearchBar;
