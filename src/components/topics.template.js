import {getTopics} from "../controllers/Topics";
import parse from "html-react-parser";

export function topicsTemplate() {
    let topics
    return new Promise((resolve, reject) => {
        getTopics().then(data => {
            topics = parse(
                data.map(createTopic)
                    .join('')
            )
            resolve(topics)
        })

    })
}

function createTopic({title, creatorUsername}) {
    return `
            <div className="topic">
                <a className="topic-href" href="#">${title}</a>
                <div className="topic-change-line">
                    <strong>${creatorUsername}</strong>
                    <div onclick="deleteTopicById" className="delete-but">
                        <span className="material-symbols-outlined">
                            delete
                        </span>
                    </div>
                </div>
            </div>
        `
}