import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../../redux/actions/actions';
import Card from '../Card/Card';
import { StyledDiv } from './styled';
import Pagination from '../Pagination/Pagination';
import HashLoader from 'react-spinners/HashLoader';
const Home = () => {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries);
    const regionc = useSelector((state) => state.region);
    const typeR = useSelector((state) => state.type);
    const loading = useSelector((state) => state.loading);
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 12;
    const indexOfLastCard = currentPage * cardsPerPage;
    // indice del ultimo elemento de cada pagina
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    // indice del primer elemento de cada pagina
    const currentCountries = countries.slice(indexOfFirstCard, indexOfLastCard);
    const currentRegions = regionc.slice(indexOfFirstCard, indexOfLastCard);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    // Toma el numero que me devuelve la cuenta.

    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch]);

    useEffect(() => {
        if (typeR !== 'all') {
            setCurrentPage(1);
        }
    }, [dispatch, typeR, countries]);

    return (
        <StyledDiv>
            {loading ? (
                <div className='loading'>
                    <HashLoader />
                </div>
            ) : (
                <div>
                    <div className='pag-styles'>
                        <Pagination
                            cardsPerPage={cardsPerPage}
                            paginate={paginate}
                        />
                    </div>
                    <div className='cards'>
                        {currentRegions && currentRegions.length !== 0
                            ? currentRegions.map((country, index) => {
                                  return <Card country={country} key={index} />;
                              })
                            : currentCountries &&
                              currentCountries.map((country, index) => {
                                  return <Card country={country} key={index} />;
                              })}
                    </div>
                </div>
            )}
        </StyledDiv>
    );
};

export default Home;
