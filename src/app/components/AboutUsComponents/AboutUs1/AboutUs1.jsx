import React from 'react';
import classes from '../../TermsAndConditionsComponents/TermsAndConditions1/TermsAndConditions1.module.css';
import BasicBreadcrumbs from "../../Breadcrumb/Breadcrumb";



const AboutUs1 =()=>{
    return(
        <div className={classes.whole}>
            <div className={"container"}>
                <BasicBreadcrumbs link={"home"} title={"About Makesy"}/>
                <div className={classes.title}>About Makesy</div>
            </div>
        </div>
    )
}


export default AboutUs1;