import React from 'react';
import AboutUsIcon4 from '../../../assets/images/AboutUsImages/AboutUsIcon4.svg';
import AboutUsIcon5 from '../../../assets/images/AboutUsImages/AboutUsIcon5.svg';
import AboutUsIcon6 from '../../../assets/images/AboutUsImages/AboutUsIcon6.svg';
import SVG1 from '../../../assets/images/AboutUsImages/SVG1.svg';
import SVG2 from '../../../assets/images/AboutUsImages/SVG2.svg';
import SVG3 from '../../../assets/images/AboutUsImages/SVG3.svg';
import Vector from '../../../assets/images/AboutUsImages/Vector.png'
import classes from './AboutUs4.module.css'



const AboutUs4 =()=>{


    const data=[
        {
            image:AboutUsIcon4,
            title:"Mission",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, Lorem ipsum dolor sit amet, " +
                "consectetur adipiscing elit ut aliquam, "
        },
        {
            image:AboutUsIcon5,
            title:"Vision",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, Lorem ipsum dolor sit amet, " +
                "consectetur adipiscing elit ut aliquam, "
        },
        {
            image:AboutUsIcon6,
            title:"Values",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, Lorem ipsum dolor sit amet, " +
                "consectetur adipiscing elit ut aliquam, "
        },
    ]

    const renderData=data.map((item, index)=>(
        <div className={classes.single} key={index}>
            <div className={classes.imageDiv}><img src={item.image} alt={""}/></div>
            <div className={classes.title}>{item.title}</div>
            <div className={classes.text}>{item.text}</div>


        </div>
    ))
    return(
        <div className={"container"}>
            <div className={classes.svgs}>
                <div className={classes.svg1}><img style={{width:"26px", height:"27px"}} src={SVG1} alt={""}/></div>
                <div className={classes.svg2}><img style={{width:"35px", height:"35px"}} src={SVG2} alt={""}/></div>
            </div>
            <div className={classes.inside}>
                <div className={classes.line}><img src={Vector} alt={""}/></div>
                <div className={classes.singles}>
                    {renderData}
                </div>
                <div className={classes.svg3}><img style={{width:"18px", height:"18px"}} src={SVG3} alt={""}/></div>
            </div>
        </div>


    )
}

export default AboutUs4;