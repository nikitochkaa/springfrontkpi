import React from 'react';
import {signIn} from '../controllers/Auth';

const SignIn = () => {

    return (
        <div>
            <section className="loginpage">
                <form id="signup">
                    <div className="containerForm">
                        <h1>Sign In</h1>
                        <p>Please log in to your account.</p>
                        <hr></hr>

                        <label><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" id="email" required></input>

                        <label><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" id="psw" required></input>

                        <div className="clearfix">
                            <a href="/signup">
                                <button type="button" id="cancelbtn">I don't have an account</button>
                            </a>
                            <button type="submit" onSubmit={signIn} id="signupbtn">Sign In</button>
                        </div>
                    </div>
                </form>

            </section>
        </div>
    );
};

export default SignIn;