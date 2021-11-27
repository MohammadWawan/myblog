import "./write.css"
import GetContent from '../home/Home'
import PostInput from "../../component/postInput/postInput";
import {gql,useMutation} from "@apollo/client"

export default function Write() {
  const INSERT_CONTENT = gql`
  mutation MyMutation($title: String = "", $stories: String = "", $updated_at: timestamptz = "") {
    insert_myBlog_content(objects: {title: $title, stories: $stories, updated_at: $updated_at}) {
      returning {
        title
      }
    }
  }
  `;

  const [insertNewData,{data:newData}]=useMutation(INSERT_CONTENT);

  const tambahContent = async (newContent) => {
    await insertNewData({
      variables: {
        object: {
          title:newContent.title,
          stories:newContent.stories,
        },
      },
      refetchQueries: [
        {
          query: GetContent,
        },
      ],
    });
  };
  
    return (
      <PostInput 
      tambahContent ={tambahContent}
      />
    )
}
