import React from 'react';
import classes from './TermsAndConditions1.module.css';
import BasicBreadcrumbs from "../../Breadcrumb/Breadcrumb";


const TermsAndConditions1 =()=>{
    return(
        <div className={classes.whole}>
            <div className={"container"}>
                <BasicBreadcrumbs link={"home"} title={"Terms & Conditions"}/>
                <div className={classes.title}>Terms & Conditions</div>
            </div>
        </div>
    )
}

export default TermsAndConditions1;