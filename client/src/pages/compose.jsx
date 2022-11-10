import React, { useState } from "react";
import SunEditor from "suneditor-react";
import 'suneditor/dist/css/suneditor.min.css';
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import axios from "axios";


function Compose(){
    const[title, setTitle] = useState("");
    const[body, setBody] = useState("");
    async function postData(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:8000/postContent",  
            {title : title,
             body:body
             }).then(res => console.log(res));
        }
        catch(err){
            console.log(err);
        }
      
    }
    return(
        <> 
        <Navbar2 /> 
        <div className="container">
            <br />
            <label htmlFor="posttitle">Title</label>
            <SunEditor
             name="posttitle" 
             placeholder="Post title goes here"
             width="1150"
             height="100"
             setDefaultStyle="font-size:30px"
             defaultValue={title}
             autoFocus={true}
             onInput={something => console.log(something)}
             onChange={event => {setTitle(event)}}
             setOptions={{
                buttonList:[[
                    "bold",
                    "underline",
                    "italic",
                    "strike",
                    "fontSize",
                    "fontColor",
                    "align",
                    "undo",
                    "redo",
                ]]
            }}
             />
            <br />
            <label htmlFor="postcontent">Content</label>
            <SunEditor 
                name="postcontent"
                placeholder="Post content goes here"
                width="1150"
                height="300"
                setDefaultStyle="font-size:40px"
                defaultValue={body}
                onImageUpload={(targetImgElement, index, state, imageInfo, remainingFilesCount) => {console.log(targetImgElement)}}
                onChange={event => {setBody(event); console.log(event);}}
                setOptions={{
                    buttonList:[[
                        "bold",
                        "underline",
                        "italic",
                        "strike",
                        "fontSize",
                        "fontColor",
                        "list",
                        "align",
                        "image",
                        "formatBlock",
                        "undo",
                        "redo"
                    ]]
                }}
            />
            <br />
            <button 
            className="btn btn-success" 
            type="submit"
            onClick={postData}> 
            Publish </button>
        </div>
        <Footer />
        </>
    )
}
export default Compose;

