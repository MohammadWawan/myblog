import React,{createContext,useState} from 'react'

export const ContentContext=createContext();
const ContentContextProvider=(props)=> {
    const [content,setContent]=useState({
        id:"",
        title:"",
        stories:""
    });
    const[onEdit,setOnEdit]=useState(false);
    const [search,setSearch]=useState("");
    const[onSearch,setOnSearch]=useState(false);
    return (
       <ContentContext.Provider value={{content,setContent,onEdit,setOnEdit,search,setSearch,onSearch,setOnSearch}} >
           {props.children}
       </ContentContext.Provider>
    )
}

export default ContentContextProvider;