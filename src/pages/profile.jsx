import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseapi } from "../constants/index.js";
import Blogslice from '../components/blogslice.jsx'
import Profileinfo from "../components/profileinfo.jsx";

const Profile = () => {
    const params = useParams();
    const [post, setPost] = useState();
    console.log("from the post => ", params.profile);


    const fetchData = async () => {
        try {
            const response = await fetch(
                `${baseapi}/post/userposts/${params?.profile}`
            );
            const fullresponse = response.json();
            return fullresponse;
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData()
            .then((miles) => {
                console.log("the post => ", miles?.userdetails);
                setPost(miles?.userdetails);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <Profileinfo />
            <h4 className="font-semibold text-lg mb-4 mt-16">Latest Posts</h4>
            <Blogslice />
        </div>
    );
};
export default Profile;
