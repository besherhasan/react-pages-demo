import React from 'react';
import './Contact.css';
import {motion} from 'framer-motion'
import Emailcontact from './Emailcontact';
export default function Contact() {
  return (
    <motion.div className='homebackgr'
    initial={{width:0}}
    animate={{width:'100%'}}
    exit={{x:window.innerWidth , transition:{duration:0.1}}}
    >
 




<Emailcontact />





        
  
 
    </motion.div>
  )
}
