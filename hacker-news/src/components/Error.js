import React from "react";
import notFound from '../404.webp'
function Error() {
        return (
            <>
            <h1>NOTHING FOUND</h1>
            <img src={notFound} />
            </>
        )
}


export default Error;