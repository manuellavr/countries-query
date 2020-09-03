import React from 'react';

export default function Country({ country }) {
    return (
        <a href="">
        <div className="country">
            <img className="country__img" src={`https://www.countryflags.io/${country.code}/flat/64.png`} />
            <p>{country.code}</p>
            <p>{country.name}</p>
        </div>
        </a>
    );
}