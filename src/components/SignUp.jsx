import React from 'react';
import {signUp} from '../controllers/Auth';

const SignUp = () => {
    return (
        <div>
            <section className="loginpage">
                <form action="" id="signup">
                    <div className="containerForm">
                        <h1>Sign Up</h1>
                        <p>Please fill in this form to create an account.</p>
                        <hr></hr>

                        <label><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" id="email" required></input>

                        <label><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" id="psw" required></input>

                        <label><b>Repeat Password</b></label>
                        <input type="password" placeholder="Repeat Password" id="psw-repeat" required></input>


                        <div className="clearfix">
                            <a href="/signin">
                                <button type="button" className="button" id="cancelbtn">Already have an account</button>
                            </a>
                            <button type="submit" className="button" onSubmit={signUp} id="signupbtn">Sign Up</button>
                        </div>
                    </div>
                </form>

            </section>
        </div>
    );
};

export default SignUp;