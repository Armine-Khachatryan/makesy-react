import React, {useState} from 'react';
import Haute2 from '../../../assets/images/ServiceImages/Haute2.png';
import Haute3 from '../../../assets/images/ServiceImages/Haute3.png';
import Haute4 from '../../../assets/images/ServiceImages/Haute4.png';
import Ready3 from '../../../assets/images/ServiceImages/Ready3.png';
import Ready4 from '../../../assets/images/ServiceImages/Ready4.png';
import Ready5 from '../../../assets/images/ServiceImages/Ready5.png';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Zoom} from "swiper/modules";
import styles from './ReadyToWear3.module.css';
import classes from '../HauteCourture3/HauteCourture3.module.css';

const swiperData1=[
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


const swiperData2=[
    {
        name: "Saudi Arabia",
        image: Ready3
    },
    {
        name: "Saudi Arabia",
        image: Ready4
    },
    {
        name: "Saudi Arabia",
        image: Ready5
    },
    {
        name: "Saudi Arabia",
        image: Ready3
    },
    {
        name: "Saudi Arabia",
        image: Ready4
    },
    {
        name: "Saudi Arabia",
        image: Ready5
    },
]

const ReadyToWear3 =()=>{


    const [hoveredIndexSwiper1, setHoveredIndexSwiper1] = useState(null);

    const handleMouseEnterSwiper1 = (index) => {
        setHoveredIndexSwiper1(index);
    };

    const handleMouseLeaveSwiper1 = () => {
        setHoveredIndexSwiper1(null);
    };

    const [hoveredIndexSwiper2, setHoveredIndexSwiper2] = useState(null);

    const handleMouseEnterSwiper2 = (index) => {
        setHoveredIndexSwiper2(index);
    };

    const handleMouseLeaveSwiper2 = () => {
        setHoveredIndexSwiper2(null);
    };

    let renderSwiper1Data =swiperData1.map((item, index)=>(
        <SwiperSlide
            className={`${hoveredIndexSwiper1 === index ? classes.bigSlide : classes.slide}`}
            key={index}
            onMouseEnter={() => handleMouseEnterSwiper1(index)}
            onMouseLeave={handleMouseLeaveSwiper1}>
            <div className={classes.slideInside}>
                <div>
                    <img
                        className={`${hoveredIndexSwiper1 === index ? classes.bigImgDiv : classes.imgDiv}`}
                        src={item.image} alt={""}
                    />
                </div>
                <div className={classes.name}>{item.name}</div>
            </div>
        </SwiperSlide>
    ))

    let renderSwiper2Data =swiperData2.map((item, ind)=>(
        <SwiperSlide
            className={`${hoveredIndexSwiper2 === ind ? classes.bigSlide : classes.slide}`}
            key={ind}
            onMouseEnter={() => handleMouseEnterSwiper2(ind)}
            onMouseLeave={handleMouseLeaveSwiper2}>
            <div className={classes.slideInside}>
                <div>
                    <img
                        className={`${hoveredIndexSwiper2 === ind ? classes.bigImgDiv : classes.imgDiv}`}
                        src={item.image} alt={""}
                    />
                </div>
                <div className={classes.name}>{item.name}</div>
            </div>
        </SwiperSlide>
    ))


    return(
        <div className={"container"}>
            <div className={styles.insideReady}>
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
                    {renderSwiper1Data}
                </Swiper>
                <div className={classes.subTitle}>Garments for
                    <span className={classes.boldText}>your Market</span>
                </div>
                <div className={classes.text}>Our artisans and tailors are available in all the below market</div>
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
                    {renderSwiper2Data}
                </Swiper>
            </div>
        </div>

    )
}

export default ReadyToWear3;