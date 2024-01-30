import React from 'react';
import classes from '../MadeToMeasure1/MadeToMeasure1.module.css';
import Ready1 from "../../../assets/images/ServiceImages/Ready1.png";


const ReadyToWear1 =()=>{


    return(
        <div className={classes.whole}>
            <div className={"container"}>
                <div className={classes.containerInside}>
                    <div className={classes.left}>
                        <div className="greenTitle">Ready to wear Summary</div>
                        <h2>Summary</h2>
                        <div className={classes.text}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium dolor emque laudium, totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor
                            emque laudium, totam rem aperiam.</div>
                        <div className={classes.text}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium dolor emque laudium, totam rem aperiam.</div>
                    </div>
                    <div className={classes.right}>
                        <img className={classes.imgStyle} src={Ready1} alt={""}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ReadyToWear1;
