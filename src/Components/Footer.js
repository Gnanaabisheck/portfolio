import React from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
const Footer = () => {
  return (
    <div>
        <footer style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}} className='p-3'>
        <div className="phone my-2" style={{display:'flex',justifyContent:'space-around'}}>
        <FaPhoneVolume className=' me-2'id='icon'/>
        <h6>+91 9361235596</h6>
        
            
        </div>
        <div className="mail my-2"  style={{display:'flex',justifyContent:'space-around'}}>
        <IoMdMail className='me-2' id='icon'/>
        <h6>gnanaabisheck@gmail.com</h6>
        </div>
        </footer>
    </div>
  )
}

export default Footer