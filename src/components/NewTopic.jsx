import React from 'react';
import {createNewTopic} from '../controllers/Topics';

const NewTopic = () => {
    return (
        <form>
            <ul className="form-style-1">
                <li>
                    <label>Title <span className="required">*</span></label>
                    <input name="field3" className="field-long" id="new-topic-title" required/>
                </li>
                <li>
                    <label>Your Message <span className="required">*</span></label>
                    <textarea name="field5" className="field-long field-textarea" id="new-topic-description"
                              required></textarea>
                </li>
                <li>
                    <input type="button" onClick={createNewTopic} value="Create"/>
                </li>
            </ul>
        </form>
    );
};

export default NewTopic;