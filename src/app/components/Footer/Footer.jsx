import React, {useState} from 'react';
import FooterLogo from '../../assets/images/FooterLogo.svg';
import LinkedIn from '../../assets/images/Linkedin.svg';
import Facebook from '../../assets/images/Facebook.svg';
import Instagram from '../../assets/images/Instagram.svg';
import Twitter from '../../assets/images/Twitter.svg';
import classes from './Footer.module.css';

const Footer =()=>{
    return(
        <>
            <div className={classes.footerUp}>
                <div className="container">
                    <div className={classes.inside}>
                        <div>
                            <div><img src={FooterLogo} alt={""}/></div>
                            <div className={classes.whiteText}>Available on Google Play & <br/>App Store</div>
                            <div className={classes.downloadBtn}>Download App</div>
                        </div>
                        <div>
                            <div className={classes.title}>Company</div>
                            <div className={classes.text}>About Makesy</div>
                            <div className={classes.text}>Pricing</div>
                            <div className={classes.text}>Blog</div>
                            <div className={classes.text}>FAQ</div>
                        </div>
                        <div>
                            <div className={classes.title}>Product</div>
                            <div className={classes.text}>Services</div>
                            <div className={classes.text}>App Features</div>
                            <div className={classes.text}>Find Tailors</div>
                        </div>
                        <div>
                            <div className={classes.title}>Company</div>
                            <div className={classes.text}>Shopping & Delivery</div>
                            <div className={classes.text} >Returns &amp; Exchange</div>
                            <div className={classes.text}>Terms & Conditions</div>
                            <div className={classes.text}>Privacy Policy</div>
                        </div>
                        <div>
                            <div className={classes.title}>How it works</div>
                            <div className={classes.text}>For Customers</div>
                            <div className={classes.text}>For Garment Producers</div>
                            <div className={classes.text}>For Artisans</div>
                        </div>
                        <div>
                            <div className={classes.title}>Follow us</div>
                            <div className={classes.icons}>
                                <img className={classes.iconStyle} src={LinkedIn} alt={"LinkedIn"}/>
                                <img className={classes.iconStyle} src={Facebook} alt={"Facebook"}/>
                                <img className={classes.iconStyle} src={Instagram} alt={"Instagram"}/>
                                <img style={{cursor:"pointer"}} src={Twitter} alt={"Twitter"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.footerDown}>
                <div className={"container"}>
                    <div className={classes.downInside}>
                        <div className={classes.whiteText}>Jordan</div>
                        <div className={classes.whiteText}>Egypt</div>
                        <div className={classes.whiteText}>Lebanon</div>
                        <div className={classes.whiteText}>Jordan</div>
                        <div className={classes.whiteText}>Egypt</div>
                        <div className={classes.whiteText}>Lebanon</div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer;