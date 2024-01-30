import React from 'react';
import One from '../../../assets/images/ServiceImages/One.svg';
import Two from '../../../assets/images/ServiceImages/Two.svg';
import Three from '../../../assets/images/ServiceImages/Three.svg';
import Four from '../../../assets/images/ServiceImages/Four.svg';
import NewLine1 from '../../../assets/images/ServiceImages/NewLine1.svg';
import NewLine2 from '../../../assets/images/ServiceImages/NewLine2.svg';
import NewLine3 from '../../../assets/images/ServiceImages/NewLine3.svg';
import classes from '../../ServicesComponents/MadeToMeasure2/MadeToMeasure2.module.css';



const ReadyToWear2 =()=>{
    return (
        <div className={"container"}>
            <div className={classes.containerInside}>
                <div className={"greenTitle"} style={{textAlign:"center"}}>Steps</div>
                <h2 style={{textAlign:"center"}}>How it works</h2>
                <div className={classes.inside}>
                    <div className={classes.singleOther}>
                        <div className={classes.imgStyle}>
                            <img src={One} alt={""}/>
                        </div>
                        <div className={classes.singleTitle}>Scratch or style</div>
                        <div className={classes.singleOtherText}>Pick date upon availability new to call Makesy Customer
                            Support</div>
                    </div>
                    <div className={classes.lineDiv}><img  className={classes.lineStyle} src={NewLine1} alt={""}/></div>
                    <div className={classes.singleOther}>
                        <div className={classes.imgStyle}>
                            <img src={Two} alt={""}/>
                        </div>
                        <div className={classes.singleTitle}>Choose Patterns</div>
                        <div className={classes.singleOtherText}>Shipment tracking, estimated delivery dates, and frequent
                            updates on the order status</div>
                    </div>
                    <div className={classes.lineDiv}><img  className={classes.lineStyle} src={NewLine2} alt={""}/></div>
                    <div className={classes.singleOther}>
                        <div className={classes.imgStyle}>
                            <img src={Three} alt={""}/>
                        </div>
                        <div className={classes.singleTitle}>Produce</div>
                        <div className={classes.singleOtherText}>Shipment tracking, estimated delivery dates, and frequent updates on the order status</div>
                    </div>
                    <div className={classes.lineDiv}><img  className={classes.lineStyle} src={NewLine3} alt={""}/></div>
                    <div className={classes.singleOther}>
                        <div className={classes.imgStyle}>
                            <img src={Four} alt={""}/>
                        </div>
                        <div className={classes.singleTitle}>Communicate</div>
                        <div className={classes.singleOtherText}>Add your Team members, get them involved with the calls,
                            and keep them updated with the order status</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ReadyToWear2;