import React, { useState, useMemo, useRef } from "react";
import ReactQuill, {Quill} from "react-quill";
import { bodyToolbar } from "../components/toolbars";
import { resizeFile, resizeCover } from "../components/resizeImage";
import ImageUploader from "quill-image-uploader";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import axios from "axios";
import 'react-quill/dist/quill.snow.css';


Quill.register("modules/imageUploader", ImageUploader);


function Compose(){
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [cover, setCover] = useState("");
    const [coverURL, setCoverURL] = useState("");
    const [snippet, setSnippet] = useState("");
    const imgArray = useRef([]);
    
    const UploadCover = async event => {
        try {
            setCover(event.target.value);
            const file = event.target.files[0];
            const image = await resizeCover(file);
            const { data } = await axios({ method : "post", url : "http://localhost:8000/postImage", data : {image}});
            imgArray.current = [...imgArray.current, data.publicId]
            setCoverURL(data.url);
        }
        catch(err){
            console.log("Cover image not uploaded: " + err);
        }
    }    

   const UploadImg = async file => {
      try {
          const image = await resizeFile(file);
          const { data } = await axios({ method : "post", url : "http://localhost:8000/postImage", data : {image}});
          imgArray.current = [...imgArray.current, data.publicId]
          return data.url;
      }
      catch(err){
          console.log("Image not uploaded: " + err);
      }
  }    


    const postData = async event => {
        event.preventDefault();
        try{
            await axios({
            method : "post",
            url : "http://localhost:8000/Content",  
            data :{
             title : title,
             coverImage : coverURL,
             snippet : snippet,
             body : body,
             imgArray : imgArray
             }});
        }
        catch(err){
            console.log("Data not uploaded: " + err);
        }
    }
    
    const bodyModule = useMemo(() => ({
        toolbar : bodyToolbar,
        imageUploader : {
            upload : UploadImg
        }
    }),[])
   
    return(
        <> 
        <Navbar2 /> 
        <div className="container">
            <br />
            <label htmlFor="posttitle">Title</label>
            <input 
                type="text" 
                value={title} 
                className="form-control"
                name="posttitle"
                onChange={event => setTitle(event.target.value)}
                placeholder="Title for your post"
            />
            <br />
            <label htmlFor="formFile">Cover Image</label>
            <input
                type="file"
                className="form-control"
                value={cover}
                id="formFile"
                accept="image/*"
                onChange={UploadCover}
            />
            <br />
            <label htmlFor="snippet">Snippet</label>
            <input 
                type="text" 
                className="form-control"
                name="snippet"
                value={snippet}
                onChange={event => setSnippet(event.target.value)}
            />
            <br />
            <label htmlFor="postcontent">Content</label>
            <ReactQuill 
                theme="snow" 
                value={body} 
                style={{"backgroundColor" : "#fff"}}
                onChange={(content, delta, source, editor) =>{
                    setTimeout(() => setBody(content))
                }} 
                modules={bodyModule}
                placeholder="Content for your post"
            />
            <br />
            <button 
            className="btn btn-outline-success" 
            type="submit"
            onClick={postData}> 
            Publish 
            </button>
        </div>
        <Footer />
        </>
    )
}
export default Compose;

