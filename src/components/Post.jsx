import React from 'react';
import {deletePostById} from "../controllers/Posts";

const Post = (post) => {
    return (
        <div className="topic-page-posts-post">
            <div className="topic-page-posts-post-author">
                <span>{post.post.creatorUsername}</span>
            </div>
            <div className="topic-page-posts-post-text">
                <span className="topic-page-posts-post-text-arrow">↳  </span>
                <span>{post.post.text}</span>
            </div>
            {/*<button id="edit-button" type="button" className="topic-page-posts-post-button">*/}
            {/*    <span className="material-symbols-outlined">*/}
            {/*        edit_note*/}
            {/*    </span>*/}
            {/*</button>*/}
            <button onClick={() => deletePostById(post.post.id)} id="delete-button" type="button" className="topic-page-posts-post-button">
                <span className="material-symbols-outlined">
                    delete
                </span>
            </button>
        </div>
    );
};

export default Post;