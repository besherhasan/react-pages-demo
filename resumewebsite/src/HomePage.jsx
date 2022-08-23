import React from 'react';
import './Contact.css';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import { NavLink } from 'react-router-dom';
import HailIcon from '@mui/icons-material/Hail';
import bg7 from './assets/withoutbg2.png'
import {motion} from 'framer-motion'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typewriter from 'typewriter-effect'
import './HomePage.css'
export default function HomePage() {
  return (
    <motion.div className='homebackgr'
    initial={{width:0}}
    animate={{width:'100%'}}
    exit={{x:window.innerWidth , transition:{duration:0.1}}}
    >
      
<div className='containerhome'>



<div className="boxhome boxhome2"><span className='hello1'> Hello, I am <span className='name'>Besher</span> </span></div>

<div className="boxhome boxhome4">
  
  <div className="socials1"><li ><a href='https://www.instagram.com/b9sr/' rel="noopener noreferrer" target="_blank"><InstagramIcon fontSize='large' color='action' /></a></li></div>
  <div className="socials1"><li><a href='https://www.linkedin.com/in/besher-hasan-399721172/'  rel="noopener noreferrer" target="_blank"><LinkedInIcon fontSize='large' color='action'/></a></li></div>
  <div className="socials1"><li><a href='https://www.youtube.com/channel/UCAHg71_8jl3a3YX2XQ76g8A/videos'  rel="noopener noreferrer" target="_blank"><YouTubeIcon fontSize='large' color='action'/></a></li></div>
  <div className="socials1"><li><a href='https://github.com/besherhasan?tab=repositories' rel="noopener noreferrer" target="_blank"><GitHubIcon fontSize='large' color='action'/></a></li></div>

</div>
<div className="boxhome boxhome5"><img className='image'
    width={'55%'}
    src={bg7}
    alt="Canvas Logo"
   
  /> </div>
<div className="boxhome boxhome6">
  <p className='title1'>
  
  <Typewriter 
  options={{
  
  strings:["Computer Engineer", "Front End Developer"],
  autoStart:true,
  loop:true,
  
  }}
  />
    
    </p></div>


<div className="boxhome boxhome10"><span className='desc1'>Have a good experiance with Web Development


</span></div>

<div className="boxhome boxhome13
">


<div className="getresume1">
<a href='beshercv.pdf' download='beshercv.pdf' style={{ textDecoration: 'none' }}>

<Button className='buttons' onClick={() => {
    alert('Resume Downloaded');
   }}
  variant="contained"
  size='large'
  sx={{  backgroundColor: '#3B9AE1' }}
  style={{ borderRadius:'29px' , textDecoration:"none"}}
   >
    <h5 className='fontsizebutton getresume'> <DownloadIcon variant="large" />Get Resume</h5>  
    </Button>
  

 
  </a>
</div>

<div className="hireme1">

    <NavLink to="/contact" style={{ textDecoration: 'none' }}>




<Button  
 variant="contained"

 size='large'
 style={{borderRadius:'29px'  }}
  >
   <h5 className='fontsizebutton hireme'> <HailIcon variant="large" />Hire Me</h5>  
   </Button>

  </NavLink>
</div>





 </div>











 
<div className="boxhome boxhome26"><footer>
  <p className='copyright'>Copyright &copy; 2022. The Official Website of Besher Hasan</p>
</footer></div>

</div>











   
 
    </motion.div>
  )
}
