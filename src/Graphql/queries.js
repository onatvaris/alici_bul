import {gql} from '@apollo/client';

export const GET_COUNTRİES = gql`
  query countries {
    countries {
      name
      phone
      emoji
    }
  }
`;
