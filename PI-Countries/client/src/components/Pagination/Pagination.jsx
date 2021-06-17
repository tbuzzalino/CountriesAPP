import { useSelector } from "react-redux";
import { useEffect } from "react";

const Pagination = ({ cardsPerPage, paginate }) => {
    const countries = useSelector((state) => state.countries);
    const region = useSelector((state) => state.region);
    let pageNumbers = [];

    for (let i = 1; i <= Math.ceil(countries.length / cardsPerPage); i++) {
        pageNumbers.push(i);
    }
    useEffect(() => {
        if (region.length) {
            pageNumbers = [];
            for (let i = 1; i <= Math.ceil(region.length / cardsPerPage); i++) {
                pageNumbers.push(i);
            }
        }
    }, [region]);

    return (
        <div className="pagination">
            <ul>
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <a onClick={() => paginate(number)} href="#">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pagination;
