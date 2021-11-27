import "./postInput.css"
import plus from "../assets/image/plus-image.png"
import { useState } from "react"

export default function PostInput(props) {  
    const [state, setState] = useState({
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
        setState({
          ...state,
          [e.target.name]: e.target.value,
        })
      }
      
    const handleSubmit=(e)=>{
        if(state.title.trim()&&state.stories){
            const stories=state.stories
            if(stories==""||stories==null){
                alert("Isi stories kamu")
            }
            else{
                const newContent={
                    title:state.title,
                    stories:state.stories
                }
                props.tambahContent(newContent)
                setState({
                    ...state,
                    title:"",
                    stories:"",
                })
            }
        }else{
            alert("Data masih kosong")
        }
    }
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
          value={state.title}
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
          value={state.stories}
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
