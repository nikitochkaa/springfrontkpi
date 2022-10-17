import React, {useEffect, useState} from 'react';
import {getPostsByTopicId, getTopicById} from "../controllers/Topics";
import {useParams} from "react-router-dom";
import Posts from "./Posts";

const Topic = () => {
    const {id} = useParams();
    const [topic, setTopic] = useState([]);
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        getTopicById(id).then(data => {
            setTopic(data)
        })
    }, []);

    useEffect(() => {
        getPostsByTopicId(id).then(data => {
            setPosts(data)
        })
    }, []);

    return (
        <div className="topic-page">
            <div className="topic-page-insides">
                <div className="topic-page-insides-topic">
                    <div className="topic-page-insides-topic-header">
                        <div className="topic-page-insides-topic-title">
                            <span>{topic.title}</span>
                        </div>
                        <div className="topic-page-insides-topic-author">
                            <span>author: {topic.creatorUsername}</span>
                        </div>
                    </div>
                    <hr/>
                    <div className="topic-page-insides-topic-description">
                        <span>{topic.description}</span>
                    </div>
                </div>
                <hr/>
                <Posts posts={posts}/>
            </div>
        </div>
    );
};

export default Topic;