import React, {useEffect, useState} from 'react'
import {topicsTemplate} from "../controllers/topics.template";
import {deleteTopicById} from "../controllers/Topics";

const Main = () => {
    const [topics, setTopics] = useState([]);
    useEffect(() => {topicsTemplate().then(data => {
        setTopics(data)
    })},[])

    useEffect(() => {
        const list = document.getElementsByClassName("delete-but")
        for (let i = 0; i < list.length; i++) {
            list.item(i).addEventListener("click", () => {deleteTopicById(list.item(i).dataset.id)})
        }
    })


    return (<div>
            <a className="new-topic" href="/new">
                <button className="new-topic-button" role="button">Create a<br/>new Topic</button>
            </a>
            <div className="db-table db-view">
                <div className="topics-header">
                    <span>Name</span>
                    <span>Created by</span>
                </div>
                <div className="topics">
                    {topics}
                </div>
            </div>
        </div>
    );
};


export default Main;