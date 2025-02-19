import React from 'react';
import Page2Style from './Page2Style';
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import NavbarLeftLogoCenterLinks from 'components/NavbarLeftLogoCenterLinks/NavbarLeftLogoCenterLinks';
import TwoColumn from 'components/TwoColumn/TwoColumn';
import CreateAccountForm from 'components/CreateAccountForm/CreateAccountForm';
import HeroHeadingLeft from 'components/HeroHeadingLeft/HeroHeadingLeft';
import NavbarLeftLogo from 'components/NavbarLeftLogo/NavbarLeftLogo';
import {Button, Checkbox, IconButton, TextField, withStyles} from '@material-ui/core';
import {Menu, AttachMoney, AccessAlarm, OfflineBolt, Twitter, Facebook, Instagram, YouTube, LinkedIn, ThumbUpAlt, ShoppingCart, GitHub, } from '@material-ui/icons';
import {Link as NavLink} from 'react-router-dom';

const Page2 = props => {
  const {classes} = props;

  return (
    <div className={classes.root}>
      <img className={classes.Media1} src={'https://nimbus-media-bucket.s3.amazonaws.com/media/2.png'}/>

    </div>
  );
};


export default withStyles(Page2Style)(Page2);