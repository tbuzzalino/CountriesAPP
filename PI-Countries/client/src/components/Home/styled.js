import styled from "styled-components";

export const StyledDiv = styled.div`
    width: 90%;
    /* margin: 0 15px 0 150px; */
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 25px;
    .cards {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin: auto;
        grid-gap: 4em;
    }
    .pag-styles {
        .pagination ul {
            display: flex;
            justify-content: space-around;
            margin-right: 20px;
            text-decoration: none;
            list-style-type: none;
            font-size: 20px;
        }
        li {
            text-decoration: none;
            /* border: 1px solid white; */
            border-radius: 8px;
            background-color: #1b2a41;
            padding: 8px;
            width: 30px;
            text-align: center;
        }
        a {
            text-decoration: none;
            color: white;
            margin: auto;
            :hover {
                color: white;
            }
        }
    }

    .card {
        display: flex;
        flex-direction: column;
        width: 450px;
        height: 300px;
        justify-content: center;
        border-radius: 5px;
        text-align: center;
        /* margin-bottom: 30px; */
        background: #1b2a41;
        /* box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; */

        color: white;
        img {
            width: 250px;
            height: 150px;
            margin: auto;
            text-align: center;
            position: relative;

            transition: transform 0.2s ease-in-out;
            :hover {
                transform: scale(1.25);
            }
        }
    }
`;
