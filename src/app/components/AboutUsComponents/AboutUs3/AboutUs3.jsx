import React from 'react';
import classes from './AboutUs3.module.css';
import Video1 from "../../../assets/videos/video1.mp4";


const AboutUs3 =()=>{
    return(
        <div className={classes.whole}>
            <div className="container">
                <div className={classes.inside}>
                    <div className={classes.left}>
                        <div className={"greenTitle"}>Our Story</div>
                        <h2>How Makesy Started ?</h2>
                        <div className={classes.text}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium dolor emque laudium, totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor
                            emque laudium, totam rem aperiam. Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium dolor emque laudium, totam rem aperiam, eaque ipsa quae ab illo
                            inventore veritatis.</div>
                        <div className={classes.text}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium dolor emque laudium, totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor
                            emque laudium, totam rem aperiam.</div>
                    </div>
                    <div className={classes.videoDiv}>
                        <video width="643" height="341" controls>
                            <source src={Video1} type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs3;











