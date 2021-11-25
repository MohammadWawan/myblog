import Post from "../post/Post"
import "./posts.css"

export default function Posts(props) {
    return (
      <div className="posts">
        {props.data?.map((item) =>
          <Post img="https://ik.imagekit.io/72gjxz500xkw/sunset-mount-cook-national-park-alongside-lake-pukaki_wA9PPFu5L.jpg?updatedAt=1637659380830" 
          key={item.id}
          data={item}
          />    
        )}
      
        </div>
    )
}
