import React from 'react';
import { Link } from 'react-router-dom';


export default function Country({ country }) {
    return (
        <Link to={{
            pathname:`country/${country.code}`,
            country: country
        }}>
        <div className="country">
            <img className="country__img" alt="a flag icon" src={`https://www.countryflags.io/${country.code}/flat/64.png`} />
            <p>{country.code}</p>
            <p>{country.name}</p>
        </div>
        </Link>
    );
}