import * as React from 'react';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import Typography from '@mui/material/Typography';
import './SideContent.css'
//star

export default function SideContent() {
  return (
    <div className='side-content'>
        <AutoAwesomeOutlinedIcon className='para'/>
         <Typography className='para'>
       Define your futur with Sinaux
      </Typography>
      {/* <p className='para'>Define your futur with Sinaux</p> */}
    </div>
  )
}
