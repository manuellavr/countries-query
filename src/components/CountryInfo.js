import React from 'react';
import { Link } from 'react-router-dom';

export default function CountryInfo(props){

	const country = props.location.country
	const url = `https://en.wikipedia.org/wiki/${country.name.replace(/ /g, "_")}`

	return(
		<>
		<div className="container info_container">
		<Link to="/"><div className="row info_nav"> Back to Homepage</div></Link>
		<div className="row">
		<img alt="a flag icon" src={`https://www.countryflags.io/${country.code}/flat/64.png`} />
		<h1 className="country__name">
			{country.name === country.native ? country.name : `${country.name} (${country.native})`}
		</h1>
		</div>
		<div className="row"><p className="subtext">Learn more at: <a href={url} target="__blank">https://en.wikipedia.org/wiki/{country.name.replace(/ /g, "_")}</a></p>

</div>
		<div className="info_container">
		<div className="row">
			<div className="col-sm-6 info">
				<div className="big_txt"><i class="fa fa-phone" aria-hidden="true"></i> <b>Phone:</b> {country.phone}</div>
				<div className="big_txt"><i class="fa fa-building-o" aria-hidden="true"></i> <b>Capital:</b> {country.capital}</div>
				<div className="big_txt"><i class="fa fa-language" aria-hidden="true"></i> <b>Language(s):</b> {country.languages.map(lang => lang.name).join(", ")}</div>
			</div>
			<div className="col-sm-6 info">
				<div className="big_txt"><i class="fa fa-globe" aria-hidden="true"></i> <b>Continent:</b> {country.continent.name} </div>
				<div className="big_txt"><i class="fa fa-money" aria-hidden="true"></i> <b>Currency:</b> {country.currency}</div>
				<div className="big_txt"><b>{country.states.length > 0 ? "States:" : ""}</b></div>
				<p className="medium_txt">{ country.states.length > 0 ?  country.states.map(state => state.name).join(", ") : ""}</p>
			</div>
		</div>
		</div>
		</div>
		</>
	)
}