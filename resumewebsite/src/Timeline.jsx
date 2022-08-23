import * as React from 'react';
import Box from '@mui/material/Box';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';

import TimelineDot from '@mui/lab/TimelineDot';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { Typography } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';
import './Timeline.css'

export default function BoxSx() {
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'white',
        
      }}
      
      paddingLeft='10px'
      position={'relative'}
      left='1390px'
      top='-550px'
>

<Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" >
            
              <AssignmentIndIcon fontSize='large' color="action" />  
           
          
          </TimelineDot>
        </TimelineSeparator>
       
        <Typography variant='h5'><span className='information'>Name : Besher Hasan</span> </Typography>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
            
          <TimelineDot TimelineDot color="primary">
          <WorkIcon fontSize='large' color="action" position='relative' />  
          </TimelineDot>
        </TimelineSeparator>
        <Typography variant='h5'><span className='information'>Title : Front End Developer</span> </Typography>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot TimelineDot color="primary">
          <EmailIcon fontSize='large' color="action" />  
          </TimelineDot>
        </TimelineSeparator>
        <Typography variant='h5'><span className='information'>Email : <span className='emailinfo'>bisherhasan@Gmail.com</span> </span> </Typography>
      </TimelineItem>
    </Timeline>





</Box>
  );
}
