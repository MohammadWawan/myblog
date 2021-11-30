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
  delete_myBlog_konten_by_pk(id: $id) {
    id
  }
}
`;

  