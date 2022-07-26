function getResults(qString, page, setMyfeed, setLoading, setIsError) {
    const url = "http://hn.algolia.com/api/v1/search?query=";
    const endpoint = url + qString + "&page=" + page + "&hitsPerPage=50";
    console.log("Trying to fetch this:", endpoint);
    const response = fetch(endpoint);

    console.log("promise me this:" + response);
    let r;
    response
        .then((response) => {
            if (response.ok) {
                r = response.json();
                console.log("hoooray, a response" + r);
                setLoading(false);

                return r;
            } else {
                console.log("Whoopsie daisy....");
                setIsError(2);
            }
            return r;
        })
        .then((data) => {
            console.log("Updating the state NOW ", data);
            setMyfeed(data);
        })
        .catch((err) => setIsError(3));
}

export default getResults;