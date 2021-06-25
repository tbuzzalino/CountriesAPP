import styled from "styled-components";

export const StyledDiv = styled.div`
    text-align: center;
    font-size: 18px;
    color: white;
    border: 1px solid white;
    border-radius: 5px;
    width: 50%;
    margin: 15px auto;
    height: 500px;

    div {
        display: flex;
        justify-content: space-around;
        width: 450px;
        margin: auto;
        margin-bottom: 15px;
    }

    select {
        width: 300px;
    }
    p {
        color: red;
        .danger {
            font-size: 15px;
        }
    }

    label {
        font-weight: 600;
    }
    .btn {
        margin-top: 15px;
        padding: 8px;
        margin-right: 12px;
    }
    .container {
        display: flex;
        justify-content: space-around;
        width: 450px;
        margin: auto;
        margin-bottom: 15px;

        label {
            margin: 0;
            padding: 0;
        }
        input {
            width: 300px;
        }
    }
`;
