import SinglePost from "../../component/singlePost/singlePost"
import "./single.css"
export default function Single(props) {
    return (
        <div className="single">
           {props.data?.map((item) =>
          <SinglePost
          key={item.id}
          data={item}
          />    
        )}
        </div>
    )
}
