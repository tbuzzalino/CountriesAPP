import React from "react";
import { useHistory } from "react-router-dom";
import { StyledDiv } from "./styled";

const Landing = () => {
    const history = useHistory();
    return (
        <StyledDiv className="container">
            <div>
                <h1 className="tittle">Welcome to the Countries App</h1>
                <button onClick={() => history.push(`/home`)} className="btn">
                    Start your journey!
                </button>
            </div>
        </StyledDiv>
    );
};

export default Landing;
