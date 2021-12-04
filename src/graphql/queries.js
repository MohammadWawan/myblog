import {gql} from "@apollo/client"

export const GET_CONTENT = gql`
query MyQuery( $_eq: Int_comparison_exp = {}) {
  myBlog_konten (where: { id: $_eq }) {
    id
    title
    stories
    image_url
    created_at
    updated_at
  }
}
`;
export const INSERT_CONTENT = gql`
mutation MyMutation($stories: String!, $title: String!,$image_url: String!) {
 insert_myBlog_konten(objects: {title: $title, stories: $stories,image_url: $image_url,}) {
   affected_rows
   returning {
     id
     title
     stories
    image_url
   }
 }
}
`;

export const DELETE_CONTENT=gql`
mutation MyMutation($id: Int!) {
  delete_myBlog_konten(where: {id: {_eq: $id}}) {
    affected_rows
  }
}
`;
export const UPDATE_CONTENT=gql`
mutation MyMutation($id: Int!, $stories: String!, $title: String!) {
  update_myBlog_konten(where: {id: {_eq: $id}}, _set: {stories: $stories, title: $title}) {
    affected_rows
    returning {
      id
      title
      stories
    }
  }
}
`;
  
export const SEARCH_CONTENT=gql`
query MyQuery{
  myBlog_konten{
    id
    title
  }
}
`

export const LOGIN_ADMIN=gql`
query MyQuery($email: String!, $password: String!) {
  myBlog_user(where: {_and: {email: {_eq: $email}, password: {_eq: $password}}}) {
    id
  }
}
`;