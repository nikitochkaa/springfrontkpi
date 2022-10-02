import React from 'react';

const signUpInput = (children, ...props) => {
    return (
        <div>
            <label><b>{children}</b></label>
            <input {...props}/>
        </div>
    );
};

export default Input;