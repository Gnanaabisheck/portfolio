import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import profile from '../Assets/profile.png'
import './Stylefile.css'
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


const Anchor = () => {
    
  return (
    <div>


    <Navbar expand="lg" className='text-center'>
   
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="nav my-3">
           
            <div className="lists p-2">
                <ul>
                    <li>
                    <div className="image">
                <img src={profile} alt="" />
            </div>
            
                    </li>
                      <li>
                      <div className="heading mx-2">
                <h3>
                    Gnanaabisheck G
                </h3>
                
            </div>
                      </li>
                  
                        <li>
                            <div >
                            <Link className='fs-5  text-decoration-none' id='links' to='/'>
                          <div className="lst">
                          <span >About</span>
                          </div>
                            </Link>
                            </div>
                        </li>
                        <li>
                            <div>
                            {/* <Link className='fs-5   text-decoration-none' id='links'  to='/skills'>
                             <div className="lst">
                             <span >Skills</span>
                             </div>
                            </Link> */}
                            </div>
                        </li>
                        <li>
                            <div >
                            <Link className='fs-5  text-decoration-none' id='links' to='/project'>
                          <div className="lst">
                          <span className=''>My Works</span>
                          </div>
                            </Link>
                            </div>
                        </li>
                        <li>
                            <Link className='fs-5 text-decoration-none' id='links' to='/contact'>
                            <div className="lst">
                            <span >Contact</span>
                            </div>
                            </Link>
                          
                            </li>
                            <div className="links-icon fs-1 " style={{display:'flex',justifyContent:'space-around',marginLeft:'-30px'}}>
                             <Link to='https://www.linkedin.com/in/gnanaabisheck-g/'>
                             <FaLinkedin className='text-light'/>
                             </Link>
                              <Link to='https://github.com/Gnanaabisheck?tab=repositories'>
                              <FaGithub className='text-light'/>
                              </Link>
                           
                            </div>
                                    
                    
                  
                </ul>
            </div>
          </Nav>
        </Navbar.Collapse>
     
    </Navbar>
  
    </div>
  )
}

export default Anchor