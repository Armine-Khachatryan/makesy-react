import React from 'react';
import TermsIcon5 from '../../../assets/images/TermsAndConditionsImages/TermsIcon5.svg';
import TermsIcon6 from '../../../assets/images/TermsAndConditionsImages/TermsIcon6.svg';
import classes from '../../TermsAndConditionsComponents/TermsAndConditions3/TermsAndConditions3.module.css';



const FAQ3 =()=>{
    return(
        <div className={"container"}>
            <div className={classes.inside}>
                <div className={classes.left}>
                    <div className={classes.title}>Need Extra help?</div>
                    <div className={classes.subTitle}>you can contact us we will answer to you shortly.</div>
                </div>
                <div className={classes.right}>
                    <div className={classes.blueBtn}>
                        <img className={classes.icon} src={TermsIcon5} alt={""}/>Chat Now
                    </div>
                    <div className={classes.whiteBtn}>
                        <img className={classes.icon} src={TermsIcon6} alt={""}/>Send Email
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ3;