import React from 'react';
import classes from './HomeComponent7.module.css';
import HomeSwiper from "../SwiperHome/SwiperHome";



const HomeComponent7 =()=>{
    return(
        <div className={classes.whole}>
            <div className={"container"}>
                <div className={classes.title}>Reviews</div>
                <h2>Loved by industry leaders</h2>
                <div className={classes.inside}>
                    <HomeSwiper/>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent7;