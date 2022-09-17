import React from 'react';
import classes from "../styles/signuppage.css";
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
                            <input type="text" placeholder="Enter Email" name="email" required></input>

                                <label><b>Password</b></label>
                                <input type="password" placeholder="Enter Password" name="psw" required></input>

                                    <label><b>Repeat Password</b></label>
                                    <input type="password" placeholder="Repeat Password" name="psw-repeat" required></input>


                                        <div className="clearfix">
                                            <button type="button" className="cancelbtn">Cancel</button>
                                            <button type="submit" className="signupbtn">Sign Up</button>
                                        </div>
                    </div>
                </form>

            </section>
        </div>
    );
};

export default SignUp;