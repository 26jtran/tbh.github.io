import React from 'react';
import NavbarLeftLogoStyle from './NavbarLeftLogoStyle';
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import NavbarLeftLogoCenterLinks from 'components/NavbarLeftLogoCenterLinks/NavbarLeftLogoCenterLinks';
import TwoColumn from 'components/TwoColumn/TwoColumn';
import CreateAccountForm from 'components/CreateAccountForm/CreateAccountForm';
import HeroHeadingLeft from 'components/HeroHeadingLeft/HeroHeadingLeft';
import {Button, Checkbox, IconButton, TextField, withStyles} from '@material-ui/core';
import {Menu, AttachMoney, AccessAlarm, OfflineBolt, Twitter, Facebook, Instagram, YouTube, LinkedIn, ThumbUpAlt, ShoppingCart, GitHub, } from '@material-ui/icons';
import {Link as NavLink} from 'react-router-dom';

const NavbarLeftLogo = props => {
  const {classes} = props;

  return (
    <div className={classes.navbarContainer} ownedByUser={false}>
      <IconButton className={classes.drawerIcon2}>
        <Menu/>
      </IconButton>
      <div className={classes.logoContainer2}>
        <p className={classes.Logo2}>
          LOGO
        </p>
      </div>
      <div className={classes.linkContainer2}>
      <NavLink to="/" className={classes.removeDefaultLinkStyles}>
          <p className={classes.homeLink2}>
          Home
        </p>
      </NavLink>
      <NavLink to="/about" className={classes.removeDefaultLinkStyles}>
          <p className={classes.aboutLink2}>
          About
        </p>
      </NavLink>
      <NavLink to="/features" className={classes.removeDefaultLinkStyles}>
          <p className={classes.featuresLink2}>
          Features
        </p>
      </NavLink>
      <NavLink to="/contact" className={classes.removeDefaultLinkStyles}>
          <Button className={classes.contactLinkButton2} variant={'contained'}>
          Contact Now
        </Button>
      </NavLink>
      </div>
    </div>
  );
};


export default withStyles(NavbarLeftLogoStyle)(NavbarLeftLogo);