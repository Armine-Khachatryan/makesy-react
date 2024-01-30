import React, {useState} from 'react';
import Haute2 from '../../../assets/images/ServiceImages/Haute2.png';
import Haute3 from '../../../assets/images/ServiceImages/Haute3.png';
import Haute4 from '../../../assets/images/ServiceImages/Haute4.png';
import classes from './HauteCourture3.module.css';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Zoom} from "swiper/modules";

const data=[
    {
        name: "Weddings",
        image: Haute2
    },
    {
        name: "Prom",
        image: Haute3
    },
    {
        name: "Ramdan",
        image: Haute4
    },
    {
        name: "Weddings",
        image: Haute2
    },
    {
        name: "Prom",
        image: Haute3
    },
    {
        name: "Ramdan",
        image: Haute4
    }
]
const HauteCourture3 =()=>{


    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const renderData=data.map((item, index)=>(
        <SwiperSlide
            className={`${hoveredIndex === index ? classes.bigSlide : classes.slide}`}
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}>
            <div className={classes.slideInside}>
                <div>
                    <img
                        className={`${hoveredIndex === index ? classes.bigImgDiv : classes.imgDiv}`}
                        src={item.image} alt={""}
                    />
                </div>
                <div className={classes.name}>{item.name}</div>
            </div>
        </SwiperSlide>
    ))


    return(
        <div className="container">
            <div className={classes.inside}>
                <div className="greenTitle" style={{textAlign:"center"}}>Categories</div>
                <h2 style={{textAlign:"center"}}>Garments made for you</h2>
                <div className={classes.subTitle}>What matches
                    <span className={classes.boldText}>your Occasion</span>
                </div>
                <div className={classes.text}>Show your personality through your clothes. Make every occasion unique
                    by choosing the right garment piece.</div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    zoom={true}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Zoom, Navigation,Pagination]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="swiperServices2"
                >
                    {renderData}
                </Swiper>
            </div>
        </div>
    )
}

export default HauteCourture3;