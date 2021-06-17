import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../../redux/actions/actions";
import Card from "../Card/Card";
import { StyledDiv } from "./styled";
import Pagination from "../Pagination/Pagination";

const Home = () => {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries);
    const regionc = useSelector((state) => state.region);
    const typeR = useSelector((state) => state.type);

    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 10;
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCountries = countries.slice(indexOfFirstCard, indexOfLastCard);
    const currentRegions = regionc.slice(indexOfFirstCard, indexOfLastCard);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch]);
    console.log(countries);
    console.log(typeR);

    return (
        <StyledDiv>
            <Pagination cardsPerPage={cardsPerPage} paginate={paginate} />
            {currentRegions && currentRegions.length !== 0
                ? currentRegions.map((country, index) => {
                      return <Card country={country} index={index} />;
                  })
                : currentCountries &&
                  currentCountries.map((country, index) => {
                      return <Card country={country} index={index} />;
                  })}
        </StyledDiv>
    );
};

export default Home;
