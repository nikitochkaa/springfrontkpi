import React from 'react';

const SignIn = () => {
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
                            <button type="submit" className="signupbtn">Sign Ip</button>
                        </div>
                    </div>
                </form>

            </section>
        </div>
    );
};

export default SignIn;