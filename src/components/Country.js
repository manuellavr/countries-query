import React from 'react';

export default function Country({ country }) {
    return (
        <div className="country">
            <img src={`https://www.countryflags.io/${country.code}/flat/64.png`} />
            <p>{country.code}</p>
            <p>{country.name}</p>
            <p>{country.languages && country.languages.map(lang => {return lang.name}).join(", ")}</p>
        </div>
    );
}