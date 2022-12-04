import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar3 from "../components/Navbar3";
import Footer from "../components/Footer";
import axios from "axios";
import DOMPurify from "dompurify";



export default function Post(){
    const [singlePost,setSinglePost] = useState({});
    let { postTitle } = useParams();
    useEffect(() => {
        try{
           axios.get("http://localhost:8000/Content").then(res => {
            let posts = res.data;
            for(let i = 0; i < posts.length; i++){
                if(posts[i].title === postTitle){ 
                    setSinglePost(posts[i]);
                    break;
                }
            }
        });
        }
        catch(err){
            console.log(err);
        }
    }, [])
    return(
        <>
        <Navbar3 />
        <div className="container">
            <p className="display-2">{singlePost.title}</p>
            <br />
            <p className="display-6">{singlePost.snippet}</p>
            <br />
            <div className="ql-editor" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(singlePost.body)}} />
        </div>
        <Footer />
        </>
    )
}
