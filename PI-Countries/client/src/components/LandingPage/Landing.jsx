import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";

const Landing = () => {
    const history = useHistory();
    return (
        <div className="container">
            <div>
                <h1 className="tittle">Welcome to the Countries App</h1>
                <button onClick={() => history.push(`/home`)} className="btn">
                    Start your journey!
                </button>
            </div>
        </div>
    );
};

export default Landing;
