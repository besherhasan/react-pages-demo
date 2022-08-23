import React from 'react'
import ibmcert from './img1/ibm.png'
import python from './img1/python.png'
import cyber from './img1/cybercert.png'
import reactcert from './img1/reactcert.png'
import recomendlet from './img1/recomendlet.png'
import googlecert from './img1/awscert.png'
import aws from './img1/googleitsupport.png'
import react2 from './img1/react2cert.png'
import './Gallery.css'
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react'

const Gallery = () =>{

let data=[
    {
        id:1,
        imgsrc:ibmcert,
       
    },
    {
        id:2,
        imgsrc:python,
       
    },

    {
        id:3,
        imgsrc:googlecert,
       
    },

    {
        id:4,
        imgsrc:cyber,
       
    },
  {
        id:7,
        imgsrc:recomendlet,
       
    },

    {
        id:5,
        imgsrc:reactcert,
       
    },

    {
        id:6,
        imgsrc:aws,
       
    },
    {
        id:7,
        imgsrc:react2,
       
    },



  

   

]

const [model,setmodel] = useState(false);
const [tempimgsrc, settempimgsrc] = useState('');

const getimg =(imgsrc) =>{
    settempimgsrc(imgsrc);
    setmodel(true);
}
return(
    
<>



<div className={model? "model open" : "model"}>
    <div className='container'>


    </div>


    <img  src={tempimgsrc}  alt='fail to load services'/>
    
    <CloseIcon onClick={()=>setmodel(false)}/>
  
</div>

<h1 className='titlecerti1' style={{textAlign:'center', color:'#046cbb' }}>Certificates</h1>




    <div className='gallery'>
    {data.map((item,index) => {
return(
    
<div className='pics' key={index} onClick={()=> getimg(item.imgsrc)}>
<img src={item.imgsrc}  alt='fail to load services'  style={{width: '70%'}}/>
    </div>


)
      

    })}
    
    
    </div> 


</>

)


}

export default Gallery;