import gql from 'graphql-tag';

export const GET_COUNTRY= gql`
    query country($code: ID!) {
        country(code: $code){
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
		    states{
		      name
		    }
		}
    }
`;