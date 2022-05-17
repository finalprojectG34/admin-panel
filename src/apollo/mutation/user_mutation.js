import { gql } from '@apollo/client';

export const DELETE_USER = gql`
  mutation ($deleteUserId: String!) {
    deleteUser(id: $deleteUserId) {
      id
      firstName
      lastName
      email
      phone
    }
  }
`;

export const CREATE_USER = gql`
  mutation ($input: UserInput!) {
    createUser(input: $input) {
      id
      firstName
      lastName
      email
      phone
    }
  }
`;

export const UPDATE_USER = gql`
  mutation ($input: UserInput!) {
    updateUser(input: $input) {
      id
      firstName
      lastName
      email
      phone
    }
  }
`;
