import {getTopics} from "./Topics";
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

function createTopic({id, title, creatorUsername}) {
    return `
            <div className="topic">
                <a className="topic-href" href="/topic/${id}">${title}</a>
                <div className="topic-change-line">
                    <strong>${creatorUsername}</strong>
                    <button type="button" className="delete-but" data-id=${id}>
                        <span className="material-symbols-outlined">
                            delete
                        </span>
                    </button>
                </div>
            </div>
        `
}