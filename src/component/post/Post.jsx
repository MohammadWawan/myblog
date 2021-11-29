import "./post.css";
import gambar from "../../image/logo.png"
import TimeAgo from "react-timeago"
import indonesiaStrings from "react-timeago/lib/language-strings/id"
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import Button from "@restart/ui/esm/Button";

const Post = (props) => {
  const {id,title,stories,created_at,updated_at}=props.data;
  const formatter = buildFormatter(indonesiaStrings)
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
        <span className="postDate">
          <TimeAgo date={updated_at} formatter={formatter} />
          </span>
      </div>
      <p className="postDesc">
        {stories}
      </p>
      <Button href="/singlepost"className="postDesc col col-lg-2" >more</Button>
    </div>
  );
}

export default Post;