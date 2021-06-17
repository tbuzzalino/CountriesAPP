import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../../redux/actions/actions";
import Card from "../Card/Card";
import { StyledDiv } from "./styled";

const Home = () => {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries);
    const regionc = useSelector((state) => state.region);
    const typeR = useSelector((state) => state.type);

    // const [cPage, setcPage] = useState([currentItems]);

    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch]);
    console.log(countries);
    console.log(typeR);

    return (
        <StyledDiv>
            {regionc && regionc.length !== 0
                ? regionc.map((country, index) => {
                      return <Card country={country} index={index} />;
                  })
                : countries &&
                  countries.map((country, index) => {
                      return <Card country={country} index={index} />;
                  })}
        </StyledDiv>
    );
};

export default Home;
