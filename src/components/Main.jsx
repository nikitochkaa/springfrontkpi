import React, {useEffect, useState} from 'react'
import {goodRusCounter} from "../grcounter";
import {topicsTemplate} from "./topics.template";


var parse = require('html-react-parser');

const Main = () => {
    const [topics, setTopics] = useState([]);
    useEffect(() => {topicsTemplate().then(data => {
        console.log(data)
        setTopics(data)
    })},[])

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