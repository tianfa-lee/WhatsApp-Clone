import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../config/firebase";
import { useStateValue } from "../../reducer/StateProvider";
import { actionTypes } from "../../reducer/Reducer";

export default function Login() {
    // eslint-disable-next-line no-empty-pattern
    const [{}, dispatch] = useStateValue();

    // Sign in with Google
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((err) => alert(err.message));
    };
    
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Logo"/>
                <div className="login__text">
                    <h1>Sign in to WhatsApp</h1>
                </div>
                <Button onClick={signIn}>Sign In With Google</Button>
            </div>
        </div>
    );
}

