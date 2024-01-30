import React, {useState} from 'react';
import Button from "../../../ui/button/button";
import classes from './ServicesComponent1.module.css';
import {useNavigate} from "react-router-dom";

let data=[
    {
        title:"Made-to-Measure",
        text:"Sed ut perspiciatis unde omnis iste natus error sit",
        route:"made-to-measure"
    },
    {
        title:"Ready-to-Wear",
        text:"Sed ut perspiciatis unde omnis iste natus error sit",
        route:"ready-to-wear"
    },
    {
        title:"Haute courture",
        text:"Sed ut perspiciatis unde omnis iste natus error sit",
        route:"haute-courture"
    }
]


function ServicesComponent1(){

    const navigate=useNavigate()
    const [active, setActive] = useState(0);

    let toggleActive=(i)=>{
        setActive(i);
    }


    let renderData=data.map((item, index)=>(
        <div className={`${active ===index ? classes.activeBlock :classes.block}`} key={index}
             onClick={()=>{
                 toggleActive(index);
                 navigate(item.route)
             }}>
            <div className={`${active ===index ? classes.activeBlocksInside :classes.blocksInside}`} >
                <div className={classes.blockTitle}>{item.title}</div>
                <div className={classes.blockText}>{item.text}</div>
            </div>
        </div>
    ))

    return(
        <div className={classes.whole}>
            <div className="container " style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
                <div className={classes.leftPart}>
                    <h1>Garments Customization has <br/>never been easier</h1>
                    <div className={classes.servicesText}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium dolor emque laudium, totam rem aperiam, eaque ipsa quae ab illo inventore
                        veritatis...</div>
                    <Button>Download App</Button>
                </div>
                <div className={classes.sliderDiv}>
                    <div className={classes.servicesBlocks}>
                        {renderData}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ServicesComponent1;