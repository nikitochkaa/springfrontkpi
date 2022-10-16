import React, {useEffect, useState} from 'react'
import {goodRusCounter} from "../grcounter";
import {getTopics} from "../controllers/Topics";
var parse = require('html-react-parser');

const Main = () => {
    function createTopic({title, creatorUsername}) {
        return `
            <div className="topic">
                <a className="topic-href" href="#">${title}</a>
                <strong>${creatorUsername}</strong>
            </div>
        `
    }
    const data = getTopics()

    const topics = parse(
        data.map(createTopic)
            .join('')
    )

    return (
        <div>
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