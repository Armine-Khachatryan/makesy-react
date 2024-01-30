import React from 'react';
import HomeImage7 from '../../../assets/images/HomeImages/HomeImage7.svg';
import HomeImage8 from '../../../assets/images/HomeImages/HomeImage8.svg';
import HomeImage9 from '../../../assets/images/HomeImages/HomeImage9.svg';
import HomeImage10 from '../../../assets/images/HomeImages/HomeImage10.svg';
import classes from './HomeComponent5.module.css';


const HomeComponent5 =()=>{

    return(
        <div className={classes.whole}>
            <div className="container">
                <div className={classes.title}>Makesy Features</div>
                <h2>What can you do on Makesy?</h2>
                <div className={classes.inside}>
                    <div className={classes.single} style={{borderLeft:"5px solid #F2C593"}}>
                        <div className={classes.imgStyle}><img src={HomeImage7} alt={""}/></div>
                        <div className={classes.singleTitle}>Instant chat</div>
                        <div className={classes.singleText}>If customers want to chat with customer support ,all they have
                            to do is click the Message button on the businesses website.</div>
                    </div>
                    <div className={classes.single} style={{borderLeft:"5px solid #93C8BF"}}>
                        <div className={classes.imgStyle}><img src={HomeImage8} alt={""}/></div>
                        <div className={classes.singleTitle}>Team Collaboration</div>
                        <div className={classes.singleText}>Add your Team members, get them involved with the calls,
                            and keep them updated with the order status</div>
                    </div>
                </div>
                <div className={classes.inside} style={{marginTop:"24px"}}>
                    <div className={classes.single} style={{borderLeft:"5px solid #4667CE"}}>
                        <div className={classes.imgStyle}><img src={HomeImage9} alt={""}/></div>
                        <div className={classes.singleTitle}>Track order</div>
                        <div className={classes.singleText}>Shipment tracking, estimated delivery dates, and frequent
                            updates on the order status</div>
                    </div>
                    <div className={classes.single} style={{borderLeft:"5px solid #F28F8F"}}>
                        <div className={classes.imgStyle}><img src={HomeImage10} alt={""}/></div>
                        <div className={classes.singleTitle}>Schedule Calls</div>
                        <div className={classes.singleText}>Pick date upon availability new to call Makesy Customer
                            Support</div>
                    </div>
                </div>
                <button className={classes.btnDiv}>View All Features</button>

            </div>
        </div>
    )
}


export default HomeComponent5;