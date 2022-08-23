import React from 'react'
import {motion} from 'framer-motion';
import './Certificates.css';
import Gallery from './Gallery';



export default function Certificates() {
  return (
    <motion.div 
    initial={{width:0}}
    animate={{width:'100%'}}
    exit={{x:window.innerWidth , transition:{duration:0.1}}}
    className='Certificatecontainer'
    >






<Gallery />
<div className='container7'>
<div className="box">

</div>

<div className="box footer1"><footer>
  <p className='copyright'>Copyright &copy; 2022. The Official Website of Besher Hasan</p>
</footer></div>

        
  </div>    

    </motion.div>
  )
}
