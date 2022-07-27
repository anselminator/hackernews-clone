function getResults(qString, setMyfeed) {
    const url = "http://hn.algolia.com/api/v1/search?query=";
    const endpoint = url + qString;
    console.log("Trying to fetch this:", endpoint);
    const response = fetch(endpoint);

    console.log("promise me this:" + response);
    let r;
    response
        .then((response) => {
            if (response.ok) {
                r = response.json();
                console.log("hoooray, a response" + r);
                return r;
            } else {
                console.log("Whoopsie daisy....");
            }
            return r;
        })
        .then((data) => {
            console.log("Updating the state NOW ", data);
            setMyfeed(data);
        })
        .catch((err) => alert(err));
}

export default getResults;