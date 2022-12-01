import React from 'react';
import Navbar3 from "../components/Navbar3";
import Footer from "../components/Footer";


function About(){
    const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
    return(
        <>
        <Navbar3 /> 
        <div className='container'>
            <h1>About</h1>
            <p>{aboutContent}</p>
        </div>
        <Footer />
        </>
    )
}
export default About;
