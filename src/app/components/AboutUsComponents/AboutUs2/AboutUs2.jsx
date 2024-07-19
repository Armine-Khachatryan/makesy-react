import React from 'react';
import AboutUsIcon1 from '../../../assets/images/AboutUsImages/AboutUsIcon1.svg';
import AboutUsIcon2 from '../../../assets/images/AboutUsImages/AboutUsIcon2.svg';
import AboutUsIcon3 from '../../../assets/images/AboutUsImages/AboutUsIcon3.svg';
import AboutImage1 from '../../../assets/images/AboutUsImages/AboutImage1.png';
import Button from "../../../ui/button/Button";
import classes from './AboutUs2.module.css';



const AboutUs2 =()=>{

    let data=[
        {
            icon:AboutUsIcon1,
            name:"Happy Clients",
            number:"+500"
        },
        {
            icon:AboutUsIcon2,
            name:"Orders Completed",
            number:"+500"
        },
        {
            icon:AboutUsIcon3,
            name:"Served Markets",
            number:"+15"
        },
    ]

    let renderSingleDiv=data.map((item, index)=>(
        <div className={classes.single} key={index}>
            <div className={classes.singleLeft}>
                <img src={item.icon} className={classes.iconStyle} alt={""}/>
            </div>
            <div>
                <div className={classes.singleRightText}>{item.name}</div>
                <div className={classes.singleRightTitle}>{item.number}</div>
            </div>
        </div>
    ))
    return(
        <div className={"container"}>
            <div className={classes.inside}>
                <div className={classes.left}>
                    <h2>Makesy designs, samples & produces for you</h2>
                    <div className={classes.text}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium dolor emque laudium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis...
                    </div>
                    <Button>Download App</Button>
                </div>
                <div className={classes.right}><img src={AboutImage1}/>
                    <div>
                        {renderSingleDiv}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs2;
