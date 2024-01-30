import React from 'react';
import HomeImage4 from '../../../assets/images/HomeImages/HomeImage4.png';
import HomeImage5 from '../../../assets/images/HomeImages/HomeImage5.png';
import HomeImage6 from '../../../assets/images/HomeImages/HomeImage6.png';
import Back from '../../../assets/images/HomeImages/Back.svg';
import classes from './HomeComponent4.module.css';


const HomeComponent4 =()=>{



    return(
        <>
            <div className="container">
                <div className={classes.title}>Segments</div>
                <h2 style={{textAlign:"center"}}>How Makesy Works ?</h2>
                <div className={classes.inside}>
                    <div className={classes.single}>
                        <div><img src={HomeImage4} alt={""}/></div>
                        <div className={classes.singleTitle}>For Customers</div>
                        <div className={classes.singleText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                            aliquam, Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, </div>
                        <div className={classes.learnBtn}>Learn More
                            <img src={Back} alt={""}/>
                        </div>
                    </div>
                    <div className={classes.single}>
                        <div><img src={HomeImage5} alt={""}/></div>
                        <div className={classes.singleTitle}> For Garment Producers</div>
                        <div className={classes.singleText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                            aliquam, Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,  </div>
                        <div className={classes.learnBtn}>Learn More
                            <img src={Back} alt={""}/>
                        </div>
                    </div>
                    <div className={classes.single}>
                        <div><img src={HomeImage6} alt={""}/></div>
                        <div className={classes.singleTitle}>For Artisans</div>
                        <div className={classes.singleText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                            aliquam, Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,  </div>
                        <div className={classes.learnBtn}>Learn More
                            <img src={Back} alt={""}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
}

export default HomeComponent4;