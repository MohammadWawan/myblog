import "./post.css";
import gambar from "../assets/image/logo.png"
const Post = (props) => {
  const {id,title,stories}=props.data;

  return (
    <div className="post">
      <img
        className="postImg"
        src={gambar}
        alt=""
      />
      <div className="postInfo">
        <span className="postTitle">
          <div className="link">
            {title}
          </div>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        {stories}
      </p>
    </div>
  );
}

export default Post;