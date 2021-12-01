import "./post.css";
import gambar from "../../image/logo.png"
import TimeAgo from "react-timeago"
import indonesiaStrings from "react-timeago/lib/language-strings/id"
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import Button from "@restart/ui/esm/Button";
import { ContentContext } from "../../context/ContentContext";
import React,{useContext} from "react";
import { useNavigate } from 'react-router-dom';

const Post = (props) => {
  
  const {id,title,stories,created_at,updated_at}=props.data;
  const formatter = buildFormatter(indonesiaStrings)
  let navigate = useNavigate();
  const {setContent}=useContext(ContentContext);
  const handleMore=(id,title,stories)=>{
    setContent({
      id:id,
      title:title,
      stories:stories,
    })
    navigate("/singlepost");
  }
  
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
      <Button onClick={()=>handleMore(id,title,stories)} className="postDesc" >more</Button>
    </div>
  );
}

export default Post;