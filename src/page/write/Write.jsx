import "./write.css"
import GetContent from '../home/Home'
import PostInput from "../../component/postInput/postInput";
import {gql,useMutation} from "@apollo/client"
import {GET_CONTENT} from "../../graphql/queries.js"
export default function Write() {
 const INSERT_CONTENT = gql`
  mutation MyMutation($object: myBlog_content_insert_input={}) {
    insert_myBlog_content(object: $object) {
      id
    }
  }
  `;

  const [insertNewData,{data:insertData}]=useMutation(INSERT_CONTENT);

  const createContent = (newContent) => {
    insertNewData({
      variables: {
        object: {
          title:newContent.title,
          stories:newContent.stories,
        },
      },
      refetchQueries: [
        {
          query: {GET_CONTENT},
        },
      ],
    });
  };
  
    return (
      <PostInput 
      createContent ={createContent}
      />
    )
}
