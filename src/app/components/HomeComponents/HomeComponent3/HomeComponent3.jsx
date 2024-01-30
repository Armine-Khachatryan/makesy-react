import React from 'react';
import HomeImage1 from '../../../assets/images/HomeImages/HomeImage1.png';
import HomeImage2 from '../../../assets/images/HomeImages/HomeImage2.png';
import HomeImage3 from '../../../assets/images/HomeImages/HomeImage3.png';
import Line from '../../../assets/images/HomeImages/Lines.png';
import classes from './HomeComponent3.module.css';


const HomeComponent3 =()=>{



    return (
        <div className={classes.whole}>
            <div className="container">
                <div className={classes.title}>Categories</div>
                <h2 style={{textAlign:"center"}}>Makesy Services</h2>
                <div className={classes.inside}>
                    <div className={classes.single}>
                        <div className={classes.lineImgDiv}><img src={Line} alt={""}/></div>
                        <div className={classes.imgDiv}><img src={HomeImage1} alt={""}/></div>
                        <div className={classes.text} style={{borderBottom:"4px solid #F2C28B"}}>Made-to-Measure</div>
                    </div>
                    <div className={classes.single}>
                        <div className={classes.lineImgDiv}><img src={Line} alt={""}/></div>
                        <div className={classes.imgDiv}><img src={HomeImage2} alt={""}/></div>
                        <div className={classes.text} style={{borderBottom:"4px solid #A5D6CE"}}>Ready-to-Wear</div>
                    </div>
                    <div className={classes.single}>
                        <div className={classes.lineImgDiv}><img src={Line} alt={""}/></div>
                        <div className={classes.imgDiv}><img src={HomeImage3} alt={""}/></div>
                        <div className={classes.text} style={{borderBottom:"4px solid #5875D3"}}>Haute Courture</div>
                    </div>
                </div>
                <button className={classes.btnDiv}>View Services</button>
            </div>
        </div>
    )
}


export default HomeComponent3;
