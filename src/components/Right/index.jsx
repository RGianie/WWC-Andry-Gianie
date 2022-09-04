import * as React from 'react';
import AccountMenu from './Menu/Menu';
import RightMenu from './Menu/Menu2';
import SideContent from './SideContent/SideContent';
import SocialMedia from './SocialMedia/SocialMedia';
import './Menu/Menu.css'



const Right = () => {
  return (
  <div className='bg-image'>
    <RightMenu/>
    <SideContent/>
    <SocialMedia/>
  </div>
  )}

export default Right
