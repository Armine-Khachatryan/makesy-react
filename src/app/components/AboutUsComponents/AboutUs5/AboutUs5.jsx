import React from 'react';
import AboutImage3 from '../../../assets/images/AboutUsImages/AboutImage3.svg';
import AboutImage4 from '../../../assets/images/AboutUsImages/AboutImage4.png';
import classes from './AboutUs5.module.css';



const AboutUs5 =()=>{


    return(
        <div className={classes.whole}>
            <div className={"container"}>
                <div className={classes.inside}>
                    <div className={classes.left}>
                        <div className={"greenTitle"}>Makesy News</div>
                        <h2>Queen Rania Al Abdallat pays a visit at Makesy offices</h2>
                        <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
                            scelerisque sapien. Nam consequat egestas libero, quis lacinia ipsum pretium non. Phasellus et
                            nisl mollis, tristique elit sit amet, facilisis arcu. Phasellus et nisl mollis</div>
                        <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
                            scelerisque sapien. Nam consequat egestas libero, </div>
                        <div className={classes.btnStyle}>View News</div>
                    </div>
                    <div className={classes.right}>
                        <img className={classes.imgStyle} src={AboutImage3} alt={""}/>
                        <img className={classes.image} src={AboutImage4} alt={""}/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs5;