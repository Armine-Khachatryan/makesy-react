import React from 'react';
import Sew from '../../../assets/images/ServiceImages/Sew.svg';
import ActiveSew from '../../../assets/images/ServiceImages/ActiveSew.svg';
import Emb from '../../../assets/images/ServiceImages/Emb.svg';
import Bead from '../../../assets/images/ServiceImages/Bead.svg';
import Svg1 from '../../../assets/images/ServiceImages/Svg1.svg';
import Svg2 from '../../../assets/images/ServiceImages/Svg2.svg';
import Svg3 from '../../../assets/images/ServiceImages/Svg3.svg';
import Svg4 from '../../../assets/images/ServiceImages/Svg4.svg';
import Knit from '../../../assets/images/ServiceImages/Knit.svg';
import classes from './MadeToMeasure3.module.css';




const MadeToMeasure3 =()=> {

    const dataIcons=[
        {
            icon:Sew,
            ActiveIcon:ActiveSew,
            name:"Sewing"
        },
        {
            icon:Emb,
            ActiveIcon:ActiveSew,
            name:"Embroidery"
        },
        {
            icon:Bead,
            ActiveIcon:ActiveSew,
            name:"Beading"
        }
    ]

    const renderDataIcons=dataIcons.map((item, index)=>(
        <div className={classes.single} key={index}>
            <div>
                <div>
                    <img src={item.icon} alt={""}/>
                </div>
                <div>{item.name}</div>

            </div>

        </div>
    ))



    return (
        <div className={"container"}>
            <div className={"greenTitle"}>In details</div>
            <h2>Makesy helps in all aspects and details</h2>
            <div className={classes.whole}>
                {/*{renderDataIcons}*/}

            </div>
        </div>
    )
}


export default MadeToMeasure3;