import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';
import React from "react";
import XIcon from '@mui/icons-material/X';
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FacebookIcon></FacebookIcon>
        <InstagramIcon></InstagramIcon>
        <XIcon></XIcon>
      </div>
      <p>Tüm Hakları Saklıdır | Burger Yesek Mi?</p>
    </div>
  );
};

export default Footer;
