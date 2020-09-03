import gql from 'graphql-tag';

export const GET_COUNTRIES= gql`
    query countries($regex: String) {
        countries(filter: {code: {regex: $regex}}){
		    code
		    name
		    continent{
		      name
		    }
		    native
		    phone
		    capital
		    currency
		    languages{
		      name
		    }
		    emoji
		    states{
		      name
		    }
		  }
    }
`;