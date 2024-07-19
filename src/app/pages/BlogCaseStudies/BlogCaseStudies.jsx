import React from 'react';
import classes from '../BlogArticle/BlogArticle.module.css'
import {useLocation} from "react-router-dom";
import BasicBreadcrumbs from "../../components/Breadcrumb/Breadcrumb";
import BlogCalendar from "../../assets/images/BlogImages/BlogCalendar.svg";
import Person from "../../assets/images/BlogImages/Person.svg";
import Copy from "../../assets/images/ServiceIcons/Copy.svg";
import LinkedIn from "../../assets/images/ServiceIcons/LinkedIn.svg";
import Facebook from "../../assets/images/ServiceIcons/Facebook.svg";
import Twitter from "../../assets/images/ServiceIcons/Twitter.svg";
import Instagram from "../../assets/images/ServiceIcons/Instagram.svg";
import WhatsUp from "../../assets/images/ServiceIcons/Whatsup.svg";
import {Blog4, Blog5} from "../../components/BlogComponents";


const BlogCaseStudies =()=>{

    const {state} = useLocation();
    return(
        <>
            <div className={"container"}>
                <BasicBreadcrumbs link="blog" title={state}/>
                <div className={classes.whole}/>
                <div className={classes.title}>How Afak managed to build a sustainable brand</div>
                <div className={classes.row}>
                    <div style={{display:"flex", alignItems:"center"}}>
                        <div><img src={BlogCalendar} className={classes.iconStyle} alt={""} /></div>
                        <div className={classes.name}>20/12/2021</div>
                    </div>
                    <div style={{display:"flex", alignItems:"center"}}>
                        <div><img src={Person} className={classes.iconStyle} alt={""} /></div>
                        <div className={classes.name}>Nada Taha</div>
                    </div>
                </div>
                <div className={classes.buttons}>
                    <div className={classes.button}>Case Study</div>
                    {/*<div className={classes.button}>Tailoring</div>*/}
                </div>
                <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis scelerisque sapien. Nam consequat
                    egestas libero, quis lacinia ipsum pretium non. Phasellus et nisl mollis, tristique elit sit amet,
                    facilisis arcu. Phasellus et nisl mollis, tristique elit sit amet, facilisis arcu. Nullam condimentum
                    libero id ligula semper tincidunt. Sed quis nulla auctor mi vestibulum vestibulum quis id magna. Quisque
                    eget vestibulum est, eu aliquet dolor.</div>
                <div className={classes.subTitle}>Proin vel leo vel leo condimentum auctor</div>
                <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
                    scelerisque sapien. Nam consequat egestas libero, quis lacinia ipsum pretium non. Phasellus et nisl
                    mollis, tristique elit sit amet, facilisis arcu. Phasellus et nisl mollis, tristique elit sit amet,
                    facilisis arcu. Nullam condimentum libero id ligula semper tincidunt. Sed quis nulla auctor mi
                    vestibulum vestibulum quis id magna. Quisque eget vestibulum est, eu aliquet dolor.</div>
                <ul className={classes.ulStyling}>
                    <li className={classes.liStyling}>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</li>
                    <li className={classes.liStyling}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li className={classes.liStyling}>Duis aute irure dolor in reprehenderit in voluptate velit esse.</li>
                    <li className={classes.liStyling}>Excepteur sint occaecat cupidatat non proident, sunt in culpa.</li>
                </ul>
                <div className={classes.subTitle}>Proin vel leo vel leo condimentum auctor</div>
                <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
                    scelerisque sapien. Nam consequat egestas libero, quis lacinia ipsum pretium non. Phasellus et nisl
                    mollis, tristique elit sit amet, facilisis arcu. Phasellus et nisl mollis, tristique elit sit amet,
                    facilisis arcu. Nullam condimentum libero id ligula semper tincidunt. Sed quis nulla auctor mi
                    vestibulum vestibulum quis id magna. Quisque eget vestibulum est, eu aliquet dolor.</div>
                <div className={`${classes.text} ${classes.margin}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
                    scelerisque sapien. Nam consequat egestas libero, quis lacinia ipsum pretium non. Phasellus et nisl
                    mollis, tristique elit sit amet, facilisis arcu. Phasellus et nisl mollis, tristique elit sit amet,
                    facilisis arcu.</div>
                <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
                    scelerisque sapien. Nam consequat egestas libero, quis lacinia ipsum pretium non. Phasellus et nisl
                    mollis, tristique elit sit amet, facilisis arcu. Phasellus et nisl mollis, tristique elit sit amet,
                    facilisis arcu. Nullam condimentum libero id ligula semper tincidunt. Sed quis nulla auctor mi
                    vestibulum vestibulum quis id magna. Quisque eget vestibulum est, eu aliquet dolor.</div>
                <div className={classes.rowDiv}>
                    <div className={classes.copyDiv}>
                        <img className={classes.copyIcon} src={Copy} alt={"copy"}/>Copy link
                    </div>
                    <div className={classes.iconDiv}>
                        <img className={classes.icon} src={LinkedIn} alt={"linkedin"}/>
                    </div>
                    <div className={classes.iconDiv}>
                        <img className={classes.icon} src={Facebook} alt={"facebook"}/>
                    </div>
                    <div className={classes.iconDiv}>
                        <img className={classes.icon} src={Twitter} alt={"twitter"}/>
                    </div>
                    <div className={classes.iconDiv}>
                        <img className={classes.icon} src={Instagram} alt={"instagram"}/>
                    </div>
                    <div className={classes.iconDiv}>
                        <img className={classes.icon} src={WhatsUp} alt={"whatsUp"}/>
                    </div>
                </div>
            </div>
            <Blog4/>
            <Blog5/>
        </>
    )
}


export default BlogCaseStudies;