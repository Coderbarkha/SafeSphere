import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer(){
    return(
        <div className='max-w-10xl max-h-7xl bg-black  flex items-center gap-4'>
            <div className='text-white'>
                <h1 className='font-bold'>SafeSphere</h1>
                <p className='font-sm'>Speak up safely, report anonymously, and <br/> help create a secure learning environment<br/> where every student feels safe.</p>
            </div>
            <div className='text-white'>
                <h2 className='font-bold'>Quick Links</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Report</li>
                <li>Dashboard</li>
                <li>Contact</li>
            </ul>
            </div>
            <div className='text-white'>
            <h2 className='font-bold'>Contact</h2>
            <p>123 Campus Road, City</p>
            <p>support@safesphere.com</p>
            <p>+1 234 567 890</p>
            </div>
            <div className='text-white'>
                <h2>Stay Updated</h2>
                <p>Subscribe to get tips, safety updates, and resources for a safer student life.</p>
                <input type='email' placeholder='Your Email'/>
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitter/>
            </div>

        </div>
    )
}

export default Footer;