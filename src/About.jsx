import React from 'react';
import Comman from "./Comman";
import web from '../src/images/img.png';

const About =()=>
{
    return(
<>
<Comman name="Welcome to About Page" 
visit="/contact" 
imgsrc={web} 
btname="Contact Now"/>


</>
    );
};

export default About;
