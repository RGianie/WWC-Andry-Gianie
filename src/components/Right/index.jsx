import * as React from 'react';
import AccountMenu from './Menu/Menu';
import RightMenu from './Menu/Menu2';
import SideContent from './SideContent/SideContent';
import SocialMedia from './SocialMedia/SocialMedia';



const Right = () => {
  return (
  <div>
    <RightMenu/>
    {/* <AccountMenu/> */}
    <SideContent/>
    <SocialMedia/>
  </div>
  )
};

export default Right;
