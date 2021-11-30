import React,{createContext,useState} from 'react'

export const ContentContext=createContext();
const ContentContextProvider=(props)=> {
    const [content,setContent]=useState({
        id:"",
        title:"",
        stories:""
    });
    return (
       <ContentContext.Provider value={{content,setContent}} >
           {props.children}
       </ContentContext.Provider>
    )
}

export default ContentContextProvider;