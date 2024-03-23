import React from 'react';
import FooterStyle from './FooterStyle';
import Navbar from 'components/Navbar/Navbar';
import Footer_1 from 'components/Footer/Footer';
import NavbarLeftLogoCenterLinks from 'components/NavbarLeftLogoCenterLinks/NavbarLeftLogoCenterLinks';
import TwoColumn from 'components/TwoColumn/TwoColumn';
import CreateAccountForm from 'components/CreateAccountForm/CreateAccountForm';
import HeroHeadingLeft from 'components/HeroHeadingLeft/HeroHeadingLeft';
import NavbarLeftLogo from 'components/NavbarLeftLogo/NavbarLeftLogo';
import {Button, Checkbox, IconButton, TextField, withStyles} from '@material-ui/core';
import {Menu, AttachMoney, AccessAlarm, OfflineBolt, Twitter, Facebook, Instagram, YouTube, LinkedIn, ThumbUpAlt, ShoppingCart, GitHub, } from '@material-ui/icons';
import {Link as NavLink} from 'react-router-dom';

const Footer = props => {
  const {classes} = props;

  return (
    <div className={classes.footerContainer} ownedByUser={false}>
      <div className={classes.footerLinkContainer}>
        <p className={classes.linksTitle}>
          Links
        </p>
      <NavLink to="/" className={classes.removeDefaultLinkStyles}>
          <p className={classes.footerHomeLink}>
          Home
        </p>
      </NavLink>
      <NavLink to="/about" className={classes.removeDefaultLinkStyles}>
          <p className={classes.footerAboutLink}>
          About
        </p>
      </NavLink>
      <NavLink to="/portfolio" className={classes.removeDefaultLinkStyles}>
          <p className={classes.footerPortfolioLink}>
          Portfolio
        </p>
      </NavLink>
      <NavLink to="/contact" className={classes.removeDefaultLinkStyles}>
          <p className={classes.footerContactLink}>
          Contact
        </p>
      </NavLink>
      </div>
      <div className={classes.outerLinkContainer}>
        <div className={classes.footerLogoContainer}>
          <p className={classes.footerLogo}>
            LOGO
          </p>
        </div>
        <div className={classes.socialContainer}>
        <a href="https://www.instagram.com/teddybearhospitalusa/" className={classes.removeDefaultLinkStyles}>
            <Instagram className={classes.instagramIconLink}/>
        </a>
        <a href="https://youtube.com/@TeddyBearHospitalUSA" className={classes.removeDefaultLinkStyles}>
            <YouTube className={classes.youtubeIconLink}/>
        </a>
        <a href="https://www.facebook.com/teddybearhospitalusa" className={classes.removeDefaultLinkStyles}>
            <Facebook className={classes.facebookIconLink}/>
        </a>
        </div>
      </div>
    </div>
  );
};


export default withStyles(FooterStyle)(Footer);