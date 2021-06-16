import styled from "styled-components";

export const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 90%;
    margin: 0 15px 0 150px;

    .card {
        display: flex;
        flex-direction: column;
        width: 450px;
        height: 300px;
        justify-content: center;
        border-radius: 5px;
        text-align: center;
        margin-bottom: 30px;
        background: #1b2a41;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        color: white;
        img {
            width: 250px;
            height: 150px;
            margin: auto;
            text-align: center;
        }
    }
`;
