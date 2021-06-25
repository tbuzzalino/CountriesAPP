import styled from "styled-components";
import landing from "../../images/landing.jpg";

export const StyledDiv = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    margin: 0;
    background-image: url(${landing});
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    .tittle {
        display: flex;
        justify-content: center;
        color: white;
    }
    .container {
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        position: fixed;
        width: 100%;
        height: 100%;
    }

    .btn {
        display: flex;
        padding: 12px;
        margin: auto;
        font-size: 22px;
        text-align: center;
    }
`;
