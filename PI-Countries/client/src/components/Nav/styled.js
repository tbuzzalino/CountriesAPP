import styled from "styled-components";

export const NavBar = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    /* flex-wrap: wrap; */
    background: #1b2a41;
    padding-bottom: 20px;
    color: white;

    .Menu {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        margin: 15px;
        font-size: 30px;
        font-weight: bold;
        span {
            font-weight: 300;
            font-size: 1.3 rem;
            text-align: center;
        }
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

    .activity {
        padding: 5px;
        margin-right: 10px;
    }

    .activities {
        padding: 5px;
        margin-right: 10px;
    }
`;
