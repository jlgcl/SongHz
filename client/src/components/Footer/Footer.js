import React, { useEffect, useState } from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="links">
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-twitter"></a>
        <a href="#" class="fa fa-instagram"></a>
        <a href="#" class="fa fa-youtube"></a>
      </div>
      <div className="spacer"></div>
      <div className="message">2020 COPYRIGHT &#169; SONGHZ CORP. ALL RIGHTS RESERVED </div>
    </div>
  );
};

export default Footer;
