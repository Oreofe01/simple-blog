import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { baseapi } from "../constants/index.js";

const PostCard = () => {
    const params = useParams();
    const [post, setPost] = useState();
    console.log("from the post => ", params);

    console.log("the link => ", baseapi);

    // function to get the single blog post

    console.log("posts inside post data state => ", post);

    const fetchData = async () => {
        try {
            const response = await fetch(`${baseapi}/post/${params.id}`);
            const fullresponse = response.json();
            return fullresponse;
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData()
            .then((miles) => {
                console.log("the post => ", miles);
                setPost(miles.post);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <div className="p-3">
                <img src={post?.post_image} alt="img" />
                <h5 className="text-gray-500 font-bold mb-6">{post?.title}</h5>
                <p
                    className="text-gray-800 text-justify"
                    dangerouslySetInnerHTML={{ __html: post?.post_content }}
                />
            </div>

            {/* a button that goes back to the blog page */}
            <button className="my-5">
                <Link to="/blog" className="bg-blue-800 rounded-full py-1 px-6 text-gray-300 font-semibold hover:bg-blue-500">Back</Link>
            </button>
        </div>
    );
};

export default PostCard;