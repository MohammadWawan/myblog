import "./write.css"
import {useMutation} from "@apollo/client"
import {GET_CONTENT,INSERT_CONTENT,UPDATE_CONTENT} from "../../graphql/queries"
import { ContentContext } from "../../context/ContentContext";
import React,{useContext,useState,useEffect} from "react";
import plus from "../../image/plus-image.png"
import { useNavigate } from 'react-router-dom';
import { storage } from "../../fire";
import { getDownloadURL, uploadBytesResumable,ref } from "@firebase/storage";
const Write=()=> {
  const {content,onEdit,setOnEdit}=useContext(ContentContext);
  const [insertNewData,{data:insertData}]=useMutation(INSERT_CONTENT);
  const[editDataById,{data:ediData}]=useMutation(UPDATE_CONTENT);
  
  useEffect(()=>{
    if(onEdit){
      setInputContent({
        id:content.id,
        title:content.title,
        stories:content.stories,
      })
    }
  },[onEdit]);

  const [inputContent, setInputContent] = useState({
    id:"",
    title:"",
    stories:"",
    });

    const [progress,setProgress]=useState(0);
    const [file,setFile]=useState();
    
    const uploadFiles=()=>{
      const storageRef=ref(storage, `/images/${file.name}`);
      const uploadTask=uploadBytesResumable(storageRef,file);

      uploadTask.on("state_changed",(snapshot)=>{
        const prog=Math.round(
          (snapshot.bytesTransferred/snapshot.totalBytes)*100
        );
        setProgress(prog);
      },(err)=>console.log(err),
        ()=>{
          getDownloadURL(uploadTask.snapshot.ref).then((url)=>{
            console.log(url)
            insertNewData({
            variables: {
              title:inputContent.title,
              stories:inputContent.stories,
              image_url:url
            },
            refetchQueries: [
              {
                query: GET_CONTENT,
              },
            ],
          })});
        }
      );
    };

    const onChangePhoto=(e)=>{
      setFile(e.target.files[0])
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
        if (story === "") {
          alert("Data masih ada yang kosong");
        } else {
          if(onEdit){
            editDataById({
              variables:{
                id:inputContent.id,
                title:inputContent.title,
                stories:inputContent.stories,
              }
            })
            setOnEdit(false)
          }else{
          console.log(inputContent);
          uploadFiles();
          
          }
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
        {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <div className="writeFormGroup">
        <label htmlFor="fileInput">
          <i className="writeIcon fas fa-plus">
            <img src={plus} alt="" width="100%" height="auto"/>
          </i>
        </label>
        <input id="fileInput" type="file" style={{ display: "none" }} onChange={onChangePhoto} />      
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