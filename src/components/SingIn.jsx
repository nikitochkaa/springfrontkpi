import React from 'react';

const SignIn = () => {

    // fetch('http://localhost:8080/auth/sign-up', {
    //     headers,
    //     method: 'POST',
    //     body: JSON.stringify({
    //         query: operationsDoc,
    //         variables: variables,
    //         operationName: operationName,
    //     }),
    // }).then(response => response.json())
    //     .then(data => {
    //         setState(data)
    //     })
    // fetch('http://localhost:8080/auth/sign-in', {
    //         headers,
    //         method: 'POST',
    //         body: JSON.stringify({
    //             query: operationsDoc,
    //             variables: variables,
    //             operationName: operationName,
    //         }),
    //     }).then(response => response.json())
    //         .then(data => {
    //             setState(data)
    //         })


    return (
        <div>
            <section className="loginpage">
                <form action="" id="signup">
                    <div className="containerForm">
                        <h1>Sign In</h1>
                        <p>Please log in to your account.</p>
                        <hr></hr>

                        <label><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" required></input>

                        <label><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required></input>

                        <div className="clearfix">
                            <a href="/signup">
                                <button type="button" className="cancelbtn">I don't have an account</button>
                            </a>
                            <button type="submit" className="signupbtn">Sign In</button>
                        </div>
                    </div>
                </form>

            </section>
        </div>
    );
};

export default SignIn;