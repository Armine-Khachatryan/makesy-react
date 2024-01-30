import React, {useState} from 'react';
import HomeImage11 from '../../../assets/images/HomeImages/HomeImage11.svg';
import HomeImage12 from '../../../assets/images/HomeImages/HomeImage12.svg'
import HomeImage13 from '../../../assets/images/HomeImages/HomeImage13.svg'
import HomeImage14 from '../../../assets/images/HomeImages/HomeImage14.svg'
import classes from './HomeComponent2.module.css';




const HomeComponent2 = () => {


    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };


    const data =[
        {
            img: HomeImage11,
            title:"Custom Make",
            text:"Not sure what you want? Skim through our styles and select a base style to build upon."
        },
        {
            img: HomeImage12,
            title:"Style Library",
            text:"Not sure what you want? Skim through our styles and select a base style to build upon."
        },
        {
            img: HomeImage13,
            title:"Track your orders",
            text:"Not sure what you want? Skim through our styles and select a base style to build upon."
        },
        {
            img: HomeImage14,
            title:"Chat with artisans",
            text:"Not sure what you want? Skim through our styles and select a base style to build upon."
        },
    ]



    let renderData=data.map((item, index)=>(
            <div
                className={`${classes.single} ${hoveredIndex === index ? classes.singleHovered : ''}`}
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}>
                <div className={classes.imgDiv}><img src={item.img} alt={""}/></div>
                <div className={classes.title}>{item.title}</div>
                {hoveredIndex === index &&
                    <div className={classes.text}>{item.text}</div>}
            </div>
        )
    )

    return (
        <div className={classes.whole}>
            <div className="container ">
                <h2 style={{textAlign:"center"}}>Why use Makesy?</h2>
                <div className={classes.inside}>
                    {renderData}
                </div>
            </div>
        </div>
    )
}


export default HomeComponent2;