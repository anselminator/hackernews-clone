import React from "react";

// create HTML output from whatever is stored in our state (hopefully a valid hackernews JSON result object)
function DisplayNews({ state }) {
  // the JSON sent back from HN has a "hits" property: an array with our search results
  const myfeed = state.hits;
  console.log("My newsfeed is this:" + myfeed);
  //just loop through all the results and return HTML elements created from each item
  return (
    <>
      <h4> hackernews has these topics for you: </h4>
      {myfeed?.map((i) => (
        <div key={i.objectID}>
          <p>
            {" "}
            {i.title} <a href={i.url}> {i.url} </a>{" "}
          </p>
          <br />
        </div>
      ))}
    </>
  );
}

export default DisplayNews;
