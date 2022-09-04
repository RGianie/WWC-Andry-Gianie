import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

import './Menu.css'

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='menu'>
        <Stack spacing={2} direction="row">
            <Button variant="text" sx={{ color: 'white' ,fontSize: '90%'}}>Home</Button>
            <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ color: 'white' ,fontSize: '90%'}}
            >
            Courses 
            <ExpandMoreIcon />
            </Button> 
            <Button variant="text" sx={{ color: 'white' ,fontSize: '90%'}}>Blog</Button>
            <Button variant="text" sx={{ color: 'white' ,fontSize: '90%'}}>Pricing</Button>
            <Button variant="text" sx={{ color: 'white' ,fontSize: '90%'}}>Sign up <ArrowForwardOutlinedIcon sx={{ color: 'white' ,fontSize: '90%'}}></ArrowForwardOutlinedIcon>
            </Button>

        </Stack>
     
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Course1</MenuItem>
        <MenuItem onClick={handleClose}>Course2</MenuItem>
        <MenuItem onClick={handleClose}>Course3</MenuItem>
      </Menu>
    </div>
  );
}
