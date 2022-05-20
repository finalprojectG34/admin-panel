import { gql } from '@apollo/client';

export const GET_ALL_CATEGORIES = gql`
  query {
    getAllCategories {
      id
      description
      facets
      image
      name
      parentId
      parentsPath
      path
      slug
    }
  }
`;

export const GET_ONE_CATEGORY = gql`
  query ($id: String!) {
    getAllCategories(id: $id) {
      id
      description
      facets
      image
      name
      parentId
      parentsPath
      path
      slug
    }
  }
`;
