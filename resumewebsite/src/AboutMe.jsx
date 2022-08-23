import React from 'react';
import './AboutMe.css';
import PhoneIcon from '@mui/icons-material/Phone';
import CakeIcon from '@mui/icons-material/Cake';
import bg from './assets/perpic2.png'
import {motion} from 'framer-motion'
import EmailIcon from '@mui/icons-material/Email';
import BadgeIcon from '@mui/icons-material/Badge';
export default function AboutMe() {
  return (
    <motion.div className='aboutmebackgr'
    initial={{width:0}}
    animate={{width:'100%'}}
    exit={{x:window.innerWidth , transition:{duration:0.1}}}
    >
      
<div className='container1'>



<div className='box box2'>
  <h1 className='titleaboutme'>ABOUT ME</h1>
 
</div>


<div className='box box3'><img className='image'
    width={'45%'}
    src={bg}
    alt="Canvas Logo"
   
  /> </div>
<div className='box aboutinfo'>

<h5 className='detailsfont'>Dynamic and motivated Computer engineer with many experiences ,with excellent communication and leadership,
I am interested in software engineering and front-end development. I've learnt HTML, CSS, JavaScript, and I'm current learning React and React native and I'm on my journey to become an expert in the field of web and mobile app development.</h5>
<div className='box '>


<ul>

<h5 className='details1'><BadgeIcon /> <span className='infoname'>Name :</span>  Besher hasan</h5>
<h5 className='details1'><PhoneIcon /><span className='infoname'>Phone :</span>  050 143 6251</h5>
<h5 className='details1'><EmailIcon /><span className='infoname'>Email :</span> Bisherhasan@gmail.com</h5>
<h5 className='details1'><CakeIcon /><span className='infoname'>Birthdate :</span>  27-FEB-2002</h5>
</ul>
  
</div>

<div>
</div>

</div>


<div className="box footer1"><footer>
  <p className='copyright'>Copyright &copy; 2022. The Official Website of Besher Hasan</p>
</footer></div>



</div>











   
 
    </motion.div>
  )
}
