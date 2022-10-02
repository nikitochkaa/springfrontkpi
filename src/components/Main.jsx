import React, {useEffect, useState} from 'react'
import {goodRusCounter} from "../grcounter";


const Main = () => {
    function createTopic(topicName, author) {
        return `
            <div className="topic">
                <a className="topic-href" href="#">&{topicName}</a>
                <strong>${author}</strong>
            </div>
        `
    }

    const topics = new Array(2)
        .fill('')
        .map(createTopic)
        .join('')

    return (
        <div>
            <div className="db-table db-view">

                <div className="topics-header">
                    <span>Name</span>
                    <span>Created by</span>
                </div>
                <div className="topics">
                    <div className="topic">
                        <a className="topic-href" href="#">Тopic1</a>
                        <span>Іванов Іван Іванович</span>
                    </div>
                    <div className="topic">
                        <a className="topic-href" href="#">Тopic2</a>
                        <span>Жигорін Жига Жигорович</span>
                    </div>
                </div>

            </div>
        </div>
    );
};


export default Main;