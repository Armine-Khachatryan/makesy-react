import React from 'react';
import One from '../../../assets/images/ServiceImages/One.svg';
import Two from '../../../assets/images/ServiceImages/Two.svg';
import Three from '../../../assets/images/ServiceImages/Three.svg';
import Line1 from '../../../assets/images/ServiceImages/Line1.png';
import Line2 from '../../../assets/images/ServiceImages/Line2.png';
import classes from './MadeToMeasure2.module.css';



const MadeToMeasure2 =()=> {

    return (
        <div className={"container"}>
            <div className={classes.containerInside}>
                <div className={"greenTitle"} style={{textAlign:"center"}}>Steps</div>
                <h2 style={{textAlign:"center"}}>How it works</h2>
                <div className={classes.inside}>
                    <div className={classes.single}>
                        <div className={classes.imgStyle}>
                            <img src={One} alt={""}/>
                        </div>
                        <div className={classes.singleTitle}>Pre selected styles</div>
                        <div className={classes.singleText}>Pick date upon availability new to call Makesy Customer
                            Support</div>
                    </div>
                    <div className={classes.lineDiv}><img  className={classes.lineStyle} src={Line1} alt={""}/></div>
                    <div className={classes.single}>
                        <div className={classes.imgStyle}>
                            <img src={Two} alt={""}/>
                        </div>
                        <div className={classes.singleTitle}>Customization</div>
                        <div className={classes.singleText}>Shipment tracking, estimated delivery dates, and frequent
                            updates on the order status</div>
                    </div>
                    <div className={classes.lineDiv}><img  className={classes.lineStyle} src={Line2} alt={""}/></div>
                    <div className={classes.single}>
                        <div className={classes.imgStyle}>
                            <img src={Three} alt={""}/>
                        </div>
                        <div className={classes.singleTitle}>Communicate</div>
                        <div className={classes.singleText}>Add your Team members, get them involved with the calls,
                            and keep them updated with the order status</div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default MadeToMeasure2;