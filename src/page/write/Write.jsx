import "./write.css"
import {gql,useMutation} from "@apollo/client"
import {GET_CONTENT} from "../../graphql/queries"
import { ContentContext } from "../../context/ContentContext";
import React,{useContext,useState,} from "react";
import plus from "../../image/plus-image.png"
import { useNavigate } from 'react-router-dom';
const Write=()=> {

 const INSERT_CONTENT = gql`
 mutation MyMutation($stories: String!, $title: String!) {
  insert_myBlog_konten(objects: {title: $title, stories: $stories}) {
    affected_rows
    returning {
      id
      title
      stories
    }
  }
}
`;

  const {content}=useContext(ContentContext);
  const [insertNewData,{data:insertData}]=useMutation(INSERT_CONTENT);
  const createContent = () => {
    insertNewData({
      variables: {
        title:inputContent.title,
        stories:inputContent.stories,
      },
      refetchQueries: [
        {
          query: GET_CONTENT,
        },
      ],
    });
  };
  
  const [inputContent, setInputContent] = useState({
    id:"",
    title:"",
    stories:"",
    });

    
    const [image,setImage]=useState("")
    const [saveImage,setSaveImage]=useState(null);

    const handleUploadChange=(e)=>{
      console.log(e.target.files[0])
      let uploaded=e.target.files[0]
      setImage(URL.createObjectURL(uploaded))
      setSaveImage(uploaded)
    }
    const onChange = (e) => {
        setInputContent({
          ...inputContent,
          [e.target.name]: e.target.value,
        })
      }
    const navigate=useNavigate()
    const handleSubmit=()=>{
      if (inputContent.title.trim() && inputContent.stories) {
        const story = inputContent.stories;
        if (story == "") {
          alert("stories gk ada");
        } else {
          console.log(inputContent);
          createContent();
          setInputContent({
            ...inputContent,
            title:"",
            stories:"",
          });
        }
        
      } else {
        alert("Data masih ada yang kosong");
      }
      navigate("/")
    };
    return (
      <div className="write">
      <img
      className="writeImg"
      src={image}
      alt=""
      />
      
      <div className="writeFormGroup">
        <label htmlFor="fileInput">
          <i className="writeIcon fas fa-plus">
            <img src={plus} alt="" width="100%" height="auto" />
          </i>
        </label>
        <input id="fileInput" type="file" style={{ display: "none" }} onChange={handleUploadChange} />
        <input
          className="writeInput"
          placeholder="Title"
          type="text"
          autoFocus={true}
          value={inputContent.title}
          name="title"
          onChange={onChange}
        />
      </div>
      <div className="writeFormGroup">
        <textarea
          className="writeInput writeText"
          placeholder="Tell your story..."
          type="text"
          autoFocus={true}
          value={inputContent.stories}
          name="stories"
          onChange={onChange}
        />
      </div>
      <button className="writeSubmit" onClick={handleSubmit}>
        Publish
      </button>
    
      </div>
    )
}

export default Write;