import React from "react";
import notFound from './404cat.png'
function Error() {
        return (
            <>
            <h1>NOTHING FOUND</h1>
            <img src={notFound} />
            </>
        )
}


export default Error;