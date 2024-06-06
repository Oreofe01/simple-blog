import React, { useState } from 'react'

const Blog = () => {

    const [postData, setPostData] = useState([]);
    console.log("post inside post data state =>", postData);



    return (
        <div>Blog</div>
    )
}

export default Blog