import {gql} from "@apollo/client"

export const GET_CONTENT = gql`
query MyQuery($_eq: Int_comparison_exp = {}) {
    myBlog_content(where: {id: $_eq}) {
      id
      title
      stories
      created_at
      updated_at
    }
  }
`;

export const INSERT_CONTENT = gql`
  mutation MyMutation($object: myBlog_content_insert_input = {}) {
    insert_myBlog_content(objects: $object) {
      id
    }
  }
  `;

  