import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import BasicBreadcrumbs from "../../components/Breadcrumb/Breadcrumb";
import classes from '../BlogWebinar/BlogWebinar.module.css';
import styles from './BlogReport.module.css';
import BlogCalendar from "../../assets/images/BlogImages/BlogCalendar.svg";
import BlogImage17 from '../../assets/images/BlogImages/BlogImage17.png';
import Person from "../../assets/images/BlogImages/Person.svg";
import BlogReportComponent from "../../components/BlogComponents/BlogReportComponent/BlogReportComponent";
import {Blog4, Blog5} from "../../components/BlogComponents";

const BlogReport=()=>{
    const {state} = useLocation();
    const [viewReport, setViewReport]=useState(false)


    return(
        <>
            <div className={"container"}>
                <BasicBreadcrumbs link="blog"  title={"Fashion Report 2023"}/>
                <div className={classes.title}>Fashion Report 2023</div>
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
                    <div className={classes.button}>Report</div>
                </div>
                <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
                    scelerisque sapien. Nam consequat egestas libero, quis lacinia ipsum pretium non. Phasellus et nisl
                    mollis, tristique elit sit amet, facilisis arcu. Phasellus et nisl mollis, tristique elit sit amet,
                    facilisis arcu. Nullam condimentum libero id ligula semper tincidunt. Sed quis nulla auctor mi
                    vestibulum vestibulum quis id magna. Quisque eget vestibulum est, eu aliquet dolor.</div>
                <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
                    scelerisque sapien. Nam consequat egestas libero, quis lacinia ipsum pretium non. Phasellus et nisl
                    mollis, tristique elit sit amet, facilisis arcu. Phasellus et nisl mollis, tristique elit sit
                    amet.</div>
                <div className={styles.title}>Proin vel leo vel leo condimentum auctor</div>
                <div><img className={styles.imgStyle} src={BlogImage17} alt={""}/></div>
                <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
                    scelerisque sapien. Nam consequat egestas libero, quis lacinia ipsum pretium non. Phasellus et nisl
                    mollis, tristique elit sit amet, facilisis arcu. Phasellus et nisl mollis, tristique elit sit
                    amet.</div>
            </div>
            {viewReport ?
                <div className={"container"} style={{paddingBottom:"64px"}}>
                    <div className={styles.title}>Proin vel leo vel leo condimentum auctor</div>
                    <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
                        scelerisque sapien. Nam consequat egestas libero, quis lacinia ipsum pretium non. Phasellus et
                        nisl mollis, tristique elit sit amet, facilisis arcu. Phasellus et nisl mollis, tristique elit
                        sit amet.</div>
                    <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
                        scelerisque sapien. Nam consequat egestas libero, quis lacinia ipsum pretium non. Phasellus et
                        nisl mollis, tristique elit sit amet, facilisis aLorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Mauris quis scelerisque sapien. Nam consequat egestas libero, quis lacinia
                        ipsum pretium non. Phasellus et nisl mollis, tristique elit sit amet, facilisis arcu. Phasellus
                        et nisl mollis, tristique elit sit amet.hasellus et nisl mollis, tristique elit sit amet.</div>
                    <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
                        scelerisque sapien. Nam consequat egestas libero, quis lacinia ipsum pretium non. Phasellus et
                        nisl mollis, tristique elit sit amet, facilisis arcu. Phasellus et nisl mollis, tristique elit
                        sit amet.</div>
                    <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
                        scelerisque sapien. Nam consequat egestas libero, quis lacinia ipsum pretium non. Phasellus et
                        nisl mollis, tristique elit sit amet, facilisis aLorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Mauris quis scelerisque sapien. Nam consequat egestas libero, quis lacinia
                        ipsum pretium non. Phasellus et nisl mollis, tristique elit sit amet, facilisis arcu. Phasellus
                        et nisl mollis, tristique elit sit amet.hasellus et nisl mollis, tristique elit sit amet.</div>
                    <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
                        scelerisque sapien. Nam consequat egestas libero, quis lacinia ipsum pretium non. Phasellus
                        et nisl mollis, tristique elit sit amet, facilisis aLorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Mauris quis scelerisque sapien. Nam consequat egestas libero, quis lacinia
                        ipsum pretium non. Phasellus et nisl mollis, tristique elit sit amet, facilisis arcu. Phasellus
                        et nisl mollis, tristique elit sit amet.hasellus et nisl mollis, tristique elit sit amet.</div>
                    <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
                        scelerisque sapien. Nam consequat egestas libero, quis lacinia ipsum pretium non. Phasellus et
                        nisl mollis, tristique elit sit amet, facilisis arcu. Phasellus et nisl mollis, tristique elit
                        sit amet.</div>
                </div>:
                <BlogReportComponent onSetTrue={setViewReport}/>
            }
            <Blog4/>
            <Blog5/>
        </>
    )
}


export default BlogReport;



