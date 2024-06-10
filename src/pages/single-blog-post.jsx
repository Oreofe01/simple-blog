import React, { useState } from "react";
import { Link } from "react-router-dom";
import moment from 'moment';

const SingleBlogPost = ({ cohort2post }) => {
    //   const something = props.cohort2post;
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Link to={`/blog/${cohort2post?.slug}`}>
            <div className="border border-gray-300 drop-shadow-md rounded-md p-3">
                <img src={cohort2post?.post_image} alt="img" className="h-60 w-full" />
                <h5 className="text-gray-500 font-bold">{cohort2post?.title}</h5>
                <h5>{cohort2post?.userID}</h5>
                {/* <p
                    className="text-gray-600 h-56 overflow-hidden"
                    dangerouslySetInnerHTML={{ __html: cohort2post?.post_title }}
                    style={isExpanded ? {} : {
                    WebkitlLineClamp: 9,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    display: '-webkit-box', }}
                /> */}
                {/* <Link to={`/blog/${cohort2post?.slug}`}> <button classname="">readmore</button> </Link> */}
                <div className="flex space-x-5 py-3">
                    <img src={cohort2post.User.profile_pic !== "" ? cohort2post.User.profile_pic : "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="} alt="profile pic" className="h-6" />
                    <span className="text-gray-400 text-sm">{cohort2post.User.name}</span>
                    <p className="text-gray-400 text-sm">{moment(cohort2post.created_at).format("MMMM D, YYYY")}</p>
                </div>
            </div>
        </Link>
    );
};

export default SingleBlogPost;