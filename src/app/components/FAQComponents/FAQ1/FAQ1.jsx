import React from 'react';
import BasicBreadcrumbs from "../../Breadcrumb/Breadcrumb";
import classes from '../../TermsAndConditionsComponents/TermsAndConditions1/TermsAndConditions1.module.css';


const FAQ1 =()=>{
    return(
        <div className={classes.whole}>
            <div className={"container"}>
                <BasicBreadcrumbs link={"home"} title={"FAQ"}/>
                <div className={classes.title}>Frequently asked questions</div>
            </div>
        </div>
    )
}

export default FAQ1;