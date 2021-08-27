import Modal from "react-bootstrap/Modal";
import "../style/Login.css";
import React from "react";



const Login = () => {
    return (
        <div class="login">
            <div class="login-triangle"></div>
            <form>
                <h3>Log In</h3>
                <div className="form-group login">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <div class="d-grid gap-2 col-6 mx-auto">
                    <br></br>
                    <button type="submit" className="btn btn-secondary">Submit</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;