import React from "react";
import RingLoader from "react-spinners/RingLoader";
import Error from "./Error.js";

// create HTML output from whatever is stored in our state (hopefully a valid hackernews JSON result object)
function DisplayNews({ state, loading, setPage }) {
  // the JSON sent back from HN has a "hits" property: an array with our search results
  const myfeed = state.hits;
  console.log("My newsfeed is this:" + myfeed);
  //just loop through all the results and return HTML elements created from each item
  if(state.nbHits === 0) {
    return(
      <Error />
    )
  }
  else {
    return (
      <>
        <h4> hackernews has these results for your query: "{state.query}" </h4>
        <RingLoader size={200} color="#151e9a" loading={loading} />
        <h5>
          Total results: {state.nbHits} (limited to the first 1000),{" "}
          {state.hitsPerPage} hits per Page
        </h5>
        <span>
          <button
            onClick={() => setPage(state?.page - 1)}
            disabled={state.page === 0}
          >
            Page {state?.page}
          </button>
        </span>
        <span>
          {" "}
          Page {state?.page + 1} of {state.nbPages}
        </span>
        <span>
          <button onClick={() => setPage(state?.page + 1)}>
            Page {state?.page + 2}
          </button>
        </span>
  
        {myfeed?.map((i) => (
          <div key={i.objectID}>
            <p>
              {" "}
              <a href={i.url} target="blank">
                {" "}
                {i.title}{" "}
              </a>{" "}
            </p>
            <br />
          </div>
        ))}
      </>
    );
  } 
}

export default DisplayNews;
