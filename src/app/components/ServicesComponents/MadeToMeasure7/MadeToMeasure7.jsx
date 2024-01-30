import React from 'react';
import classes from './MadeToMeasure7.module.css';
import Video1 from "../../../assets/videos/video1.mp4";



const MadeToMeasure7 =()=> {

    return(
        <div className={classes.whole}>
            <div className={"container"}>
                <div className={classes.inside}>
                    <div className={classes.videoDiv}>
                        <video width="643" height="366" controls>
                            <source src={Video1} type="video/mp4"/>
                        </video>
                    </div>
                    <div className={classes.right}>
                        <div className={classes.title}>Videos</div>
                        <h2>Curious about how it happens?</h2>
                        <div className={classes.text}>Watch this Video</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MadeToMeasure7;