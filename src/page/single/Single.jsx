import SinglePost from "../../component/singlePost/singlePost"
import "./single.css"

const GET_CONTENT = gql`
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
const outputPost=()=>{
    {props.data?.map((item) =>
        <SinglePost
        key={item.id}
        data={item}
        />    
      )}
}
export default function Single(props) {
    const {data,loading,refetch}=useQuery(GET_CONTENT,{
        variables:{_eq:{}},
        notifyOnNetworkStatusChange:true,
    });
    
    return (
        <div className="single">
           
        </div>
    )
}