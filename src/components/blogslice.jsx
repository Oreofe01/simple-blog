import React, { useEffect, useState } from "react";
import { baseapi } from "../constants/index.js";
import banner from "../assets/banner.svg"
import SingleBlogPost from "../pages/single-blog-post";

const Blog = () => {
    // const baseapi = import.meta.env.VITE_BASE_API_LINK;
    // our api link
    // https://cohort2-blog-api.onrender.com/post/all-posts

    const [postData, setPostData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(`${baseapi}/post/all-posts`);
            const fullresponse = response.json();
            return fullresponse;
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData()
            .then((miles) => {
                console.log("the posts => ", miles);
                setPostData(miles.posts);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {postData.slice(0, 9)?.map((post) => (
                    <SingleBlogPost key={post.id} cohort2post={post} />
                ))}
            </div>
        </div>
    );
};

export default Blog;