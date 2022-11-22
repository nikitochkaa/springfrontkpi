import React from 'react';
import Post from "./Post";
import {addNewPost} from "../controllers/Posts";
import {useParams} from "react-router-dom";

const Posts = (posts) => {
    const {id} = useParams();
    return (
        <div className="topic-page-posts">
            <div className="topic-page-posts-new">
                <div id="topic-page-posts-new-text" contentEditable></div>
                <button onClick={() => addNewPost(id)} className="topic-page-posts-button">
                        <span className="material-symbols-outlined">
                            send
                        </span>
                </button>
            </div>
            <hr/>
            {posts.posts.map(post => {
                return (
                    <Post post={post}/>
                )
            })}
        </div>
    );
};

export default Posts;