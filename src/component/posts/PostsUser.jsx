import PostUser from "../post/PostUser"
import "./posts.css"

export default function PostsUser(props) {
    return (
      <div className="posts">
        {props.data?.map((item) =>
          <PostUser
          key={item.id}
          data={item}
          />    
        )}
      
        </div>
    )
}
