import "./postInput.css"
import plus from "../../image/plus-image.png"
import { useState } from "react"

const PostInput=(props)=> {  
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
      
    const handleSubmit=(e)=>{
      e.preventdefault()
      if (inputContent.title.trim() && inputContent.stories) {
        const story = inputContent.stories;
        if (story == "") {
          alert("stories gk ada");
        } else {
          const newData = {
            variables: {
              object: {
                title:inputContent.title,
                stories:inputContent.stories,
              },
            },
          };
          props.createContent();
          setInputContent({
            ...inputContent,
            title: "",
            stories: "",
          });
        }
      } else {
        alert("Data masih ada yang kosong");
      }
    };
    return (
      <div className="write">
      <img
      className="writeImg"
      src={image}
      alt=""
      />
      <form className="writeForm" onSubmit={handleSubmit}>
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
      <button className="writeSubmit" type="submit" onClick={handleSubmit}>
        Publish
      </button>
    </form>
      </div>
    )
}

export default PostInput;