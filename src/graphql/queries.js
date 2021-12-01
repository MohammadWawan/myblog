import {gql} from "@apollo/client"

export const GET_CONTENT = gql`
query MyQuery {
  myBlog_konten {
    id
    title
    stories
    created_at
    updated_at
  }
}
`;

export const INSERT_CONTENT = gql`
mutation MyMutation($stories: String!, $title: String!) {
 insert_myBlog_konten(objects: {title: $title, stories: $stories}) {
   affected_rows
   returning {
     id
     title
     stories
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
  