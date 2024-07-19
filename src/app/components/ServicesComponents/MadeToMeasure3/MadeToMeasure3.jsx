import React, {useState} from 'react';
import Sew from '../../../assets/images/ServiceImages/Sew.svg';
import ActiveSew from '../../../assets/images/ServiceImages/ActiveSew.svg';
import Emb from '../../../assets/images/ServiceImages/Emb.svg';
import Bead from '../../../assets/images/ServiceImages/Bead.svg';
import Svg1 from '../../../assets/images/ServiceImages/Svg1.svg';
import Svg2 from '../../../assets/images/ServiceImages/Svg2.svg';
import Svg3 from '../../../assets/images/ServiceImages/Svg3.svg';
import Svg4 from '../../../assets/images/ServiceImages/Svg4.svg';
import Knit from '../../../assets/images/ServiceImages/Knit.svg';
import Back from '../../../assets/images/ServiceIcons/Back.svg';
import GreenBack from '../../../assets/images/ServiceIcons/GreenBack.svg';
import Services21 from '../../../assets/images/ServiceImages/Services21.png';
import classes from './MadeToMeasure3.module.css';




const MadeToMeasure3 =({dataIcons, subTitle, title})=> {


    let [showRightPart, setShowRightPart]=useState(0)



    let handleData=(i)=>{
        setShowRightPart(i)
        console.log(i)
    }


    const renderIconsData=dataIcons.map((item, index)=>(
            <div className={classes.leftInside} onClick={()=>handleData(index)}>
                <div style={{display:"flex"}}>
                    <div><img className={classes.icon} src={ showRightPart ===index?  item.activeIcon: item.icon} alt={""}/></div>
                    <div className={`${classes.iconName} ${showRightPart === index ? classes.activeGreen : ""}`}>{item.name}</div>
                </div>
                <div>
                    {showRightPart ===index?    <img className={classes.back} src={GreenBack} alt={""}/>
                    :  <img className={classes.back} src={Back} alt={""}/>}
                </div>
            </div>
    ))

    return (
        <div className={"container"}>
            <div className={"greenTitle"}>{subTitle}</div>
            <h2>{title}</h2>
            <div className={classes.whole}>
                <div className={classes.inside}>
                    <div className={classes.left}>
                        {renderIconsData}
                    </div>
                    <div className={classes.right}>
                        <div>
                            <div><img className={classes.imgStyle} src={dataIcons[showRightPart].image} alt={""}/></div>
                            <div className={classes.title}>{dataIcons[showRightPart].name}</div>
                            <div className={classes.description}>{dataIcons[showRightPart].description}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MadeToMeasure3;