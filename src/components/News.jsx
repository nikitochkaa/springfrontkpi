import React, {useEffect, useState} from 'react'
import {goodRusCounter} from "../grcounter";


const News = () => {
    const init = new Date()
    const [date, setDate] = useState(init)

    const tick = () => {
        setDate(new Date())
    }
    useEffect(() => {
        const timerID = setTimeout(() => tick(), 3000)
        return () => {
            clearTimeout(timerID)
        }
    }, [date])

    return (
        <div className="counter">
            <span className="countName">Good russian soldiers count</span>
            <br/>
            <span>{goodRusCounter()}</span>
        </div>
    );
};


export default News;