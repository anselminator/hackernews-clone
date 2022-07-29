import React from "react";
import SearchIcon from "@material-ui/icons/Search";

function SearchBar({ setQueryWord, setPage}) {
  const submitHandler = (e) => {
    e.preventDefault();
    const text = document.getElementById("search-form");
    console.log("input string:", text.value);
    setQueryWord(text.value);
    setPage(0);
  };

  return (
    <div className="App">
      <label htmlFor="search-form">
        <form onSubmit={submitHandler}>
          <input
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
          <button onClick={submitHandler}><SearchIcon /></button>
        </form>
      </label>
    </div>
  );
}

export default SearchBar;
