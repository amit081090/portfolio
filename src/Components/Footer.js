import React from 'react';
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import {Link}  from "react-router-dom"
import "../Styles/Footer.css";


 const Footer = () => {
  return (
    <div className='footer'>
<div className='socialMedia'>
    <Link>
    <InstagramIcon/>
    <TwitterIcon/>
    <FacebookIcon/>
    <LinkedInIcon/>
    </Link>
</div>
<p>&#169;:2023 bogni.com</p>

    </div>
  );
}

export default Footer;
