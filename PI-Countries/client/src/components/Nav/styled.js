import styled from "styled-components";

export const NavBar = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    /* flex-wrap: wrap; */
    background: #1b2a41;
    padding-bottom: 20px;
    margin-bottom: 25px;
    color: white;

    .Menu {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        margin: 15px;
        font-size: 30px;
        font-weight: bold;
    }
    .sort {
        padding: 5px;
        margin-right: 10px;
        width: 6%;
    }
    .region {
        padding: 5px;
        margin-right: 10px;
    }
`;
