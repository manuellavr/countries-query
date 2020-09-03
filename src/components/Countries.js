import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_COUNTRIES } from '../graphql/get_countries.js';
import Country from './Country.js';

export default function Countries(){
	
	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

	const { data: { countries = [] }  = {}, refetch } = useQuery(GET_COUNTRIES, { variables: { regex: "A." } });

	return (
        <div className="container">
        	{ alphabet.map(letter => <button className="btn--alphabet" key={letter} value={letter} onClick={(e) => refetch({regex: e.target.value + "."})}>{letter}</button>) }
        	<div className="country-list">
            	{countries && countries.map(country => <Country key={country.code} country={ country } />)}
        	</div>
        </div>
    );

}