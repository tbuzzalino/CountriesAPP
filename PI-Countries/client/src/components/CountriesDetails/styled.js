import styled from "styled-components";

export const StyledDiv = styled.div`
    width: 90%;
    margin: 0 15px 0 150px;
    background-color: red;

    .card {
        width: 50px;
        height: 50px;
        border: 1px solid black;
        justify-content: center;
        margin-bottom: 10px;
        .flag {
            display: flex;
            justify-content: flex-end;
            width: 50%;
            height: 150px;
            margin: auto;
        }
        h2,
        p {
            margin: auto;
            font-size: 30px;
        }
    }
`;
