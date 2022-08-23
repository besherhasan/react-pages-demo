import React from 'react'
import bg2 from './assets/reacticon.png'
import bg3 from './assets/strapiicon.jpg'
import bg4 from './assets/cplusicon.jpg'
import bg5 from './assets/pcrepair.png'
import ConstructionIcon from '@mui/icons-material/Construction';
import Circlec from './components/Circlec';
import Circlematlab from './components/Circlematlab';
import Circlejavscript from './components/Circlejavscript';
import Circlereact from './components/Circlereact';
import Circlepy from './components/Circlepy';
import CircleMariadb from './components/CircleMariadb';
import SchoolIcon from '@mui/icons-material/School';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import {motion} from 'framer-motion';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import './Resume.css';
import './Avatar.css'
import EngineeringIcon from '@mui/icons-material/Engineering';
import Circlecplus from './components/Circlecplus';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import Circlehtmlcss from './components/Circlehtmlcss';


export default function Resume() {
  return (
    <motion.div 
    initial={{width:0}}
    animate={{width:'100%'}}
    exit={{x:window.innerWidth , transition:{duration:0.1}}}
    className='resumecontainer'
    >



<div className='container2'>

<div className='boxresume boxresume1'>
  <h1 className='titleresume6'>MY RESUME</h1>
  </div>

<div className='boxresume boxresume2'>
  <h4 className='titleresume'><SchoolIcon fontSize="large" color="info" /> Education</h4>
<h6 className='location'><LocationOnOutlinedIcon />Ajman University of Science & Technology</h6>
<li className='historyofme'>B.Sc in Computer Engineering (2019-2023).</li>
</div>












<div className='boxresume boxresume3'>
<h4 className='titleresume'><WorkHistoryIcon fontSize="large" color="info" /> Work History</h4>
  <div className='boxresume'>

  <h6 className='location'><LocationOnOutlinedIcon />Dubai Media City</h6>
<li className='historyofme'>Television Presenter (2011 -2013).</li>
  </div>
 
  <div className='boxresume'>

  <h6 className='location'><LocationOnOutlinedIcon />Dubai Al Ghurair Investment LLC</h6>
<li className='historyofme'>Software Enginnering Internship (2022/June  to  2022/July , Two month).</li>
  </div>

  <div className='boxresume'>

<h6 className='location'><LocationOnOutlinedIcon />Ajman University </h6>
<li className='historyofme'>Core Team Member of Google Developer Student Club.</li>
</div>











</div>
<div className='boxresume boxresume4'><h4 className='titleresume'><CodeOffIcon fontSize="large" color="info" /> Programming skills</h4>

<div className='boxresume boxresume40'>
<div className='boxresume boxresume41'>
<Circlehtmlcss />

</div>
<div className='boxresume boxresume42'>
 <Circlereact /> 
</div>
<div className='boxresume boxresume43'>
<Circlecplus /> 
</div>
<div className='boxresume boxresume44'>
 <Circlejavscript /> 
</div>

<div className='boxresume boxresume42'>
<Circlematlab /> 
</div>

<div className='boxresume boxresume42'>
<Circlec />
</div>

<div className='boxresume boxresume42'>
<Circlepy />
</div>

<div className='boxresume boxresume42'>
<CircleMariadb />
</div>


</div>

</div>








<div className='boxresume boxresume5'>
<h4 className='titleresume'><EngineeringIcon fontSize="large" color="info" /> Skills</h4>

<div className='boxresume'>
 <h6 className='location'><img src={bg2} alt="Avatar" class="avatar" /> Web development with html ,css , React.js :</h6>
 <ul>
<li className='historyofme' >Building responsive webiste with grid and media querey.</li> 
<li className='historyofme' >Work with Material-UI and bootstrap CSS framework. </li> 
<li className='historyofme' >Use Framer to make animation on React.js website. </li>
<li className='historyofme' >Installing and using of Node package manager. </li> 
<li className='historyofme' >Use React Router To route the pages. </li> 
<li className='historyofme' >Displaying data from an API.</li> 
<li className='historyofme' >Knowledge of React.js Hooks. </li> 
<li className='historyofme' >Fetching data with hooks. </li> 
<li className='historyofme' >Integrate STRAPI with react.js. </li> 
 </ul>

</div>


<div className='boxresume'>
 <h6 className='location'><img src={bg3} alt="Avatar" class="avatar" /> Headless CMS with STRAPI :</h6>
 
 <ul>
<li className='historyofme' >Create and Publish content using an API with STRAPI.</li> 
<li className='historyofme' >Use api from STRAPI and integrate it with react.js.</li> 
<li className='historyofme' >manage and access content using an API.</li> 
<li className='historyofme' >Set Roles & Permissions for the access. </li>
 </ul>
</div>



<div className='boxresume'>
 <h6 className='location'><img src={bg4} alt="Avatar" class="avatar" /> Have a good experiance with C++ :</h6>
 
 <ul>
<li className='historyofme' > Data structure and , OOP.</li> 
<li className='historyofme' >Standard template library STL.</li> 
<li className='historyofme' >linked list, array-based list, and algorithms.</li> 
<li className='historyofme' >Set Roles & Permissions for the access. </li>
 </ul>
</div>


<div className='boxresume'>
 <h6 className='location'><img src={bg5} alt="Avatar" class="avatar" /> Have a Professional experience with PC :</h6>
 
 <ul>
<li className='historyofme' > Build pc from scratch .</li> 
<li className='historyofme' >Upgrade and repair pc.</li> 
<li className='historyofme' > knowledge in types of CPU, GPU, Ram, Power supply. </li> 
<li className='historyofme' >knowledge in types of motherboards and water cooling.</li>
<li className='historyofme' > Building of pc start from low end pc until high end pc .</li>
 </ul>

</div>

</div>









<div className='boxresume boxresume6'>
  
<h4 className='titleresume'><ConstructionIcon fontSize="large" color="info" /> Competitions and projects</h4>

<div className='boxresume'>
    <h6 className='location'><LocationOnOutlinedIcon /> Innovator Competitions ,Abu Dhabi, United Arab Emirates</h6>
<ul>
 <li className='historyofme' >Innovator (2015), smart home.</li> 
 <li className='historyofme' >Innovator (2016) ,smart baby bed.</li> 
</ul>

</div>

<div className='boxresume'>
    <h6 className='location'><IntegrationInstructionsIcon /> React.js Projects</h6>
<ul>
<li className='historyofme' >Building Weather status website that fetch api of weather.</li> 
 <li className='historyofme' >Create a simple calculator Website.</li> 
 
 <li className='historyofme' >Create a Resume Website.</li> 
</ul>

</div>



</div>
<div className='boxresume boxresume7'><footer>
  <p className='copyright'>Copyright &copy; 2022. The Official Website of Besher Hasan</p>
</footer></div>









        
      </div>

    </motion.div>
  )
}
