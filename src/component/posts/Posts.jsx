import Post from "../post/Post"
import "./posts.css"

export default function Posts(props) {
    return (
      <div className="posts">
        {props.data?.map((item) =>
          <Post
          key={item.id}
          data={item}
          />    
        )}
      
        </div>
    )
}
