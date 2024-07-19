import React from 'react';
import classes from './MadeToMeasure7.module.css';




const MadeToMeasure7 =({video, subTitle, mainTitle, text})=> {

    return(
        <div className={classes.whole}>
            <div className={"container"}>
                <div className={classes.inside}>
                    <div className={classes.videoDiv}>
                        <video width="643" height="366" controls>
                            <source src={video} type="video/mp4"/>
                        </video>
                    </div>
                    <div className={classes.right}>
                        <div className={classes.title}>{subTitle}</div>
                        <h2>{mainTitle}</h2>
                        <div className={classes.text}>{text}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MadeToMeasure7;