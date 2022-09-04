import React from 'react'
import socialMedia from './socialMedia.png'

export default function SocialMedia() {
  return (
    <div style={{backgroundColor: 'white', width: '40%', height:'50%', marginTop: '90%', textAlign: 'center', borderRadius: '10px', paddingTop:'15px'}}>
        <h4 >99+ Certified Mentors</h4>
        <img src={socialMedia} alt='social media' style={{width: '150px'}}></img>
    </div>
  )
}
