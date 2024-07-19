import React from 'react';
import Services18 from '../../../assets/images/ServiceImages/Services18.png';
import Services19 from '../../../assets/images/ServiceImages/Services19.png';
import Services20 from '../../../assets/images/ServiceImages/Services20.png';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Zoom} from "swiper/modules";
import classes from './MadeToMeasure6.module.css';




const MadeToMeasure6 =({sliderData, mainSubTitle, mainTitle})=>{


    const renderData=sliderData.map((item, index)=>(
        <SwiperSlide className={classes.sliderInside}>
            <div className={classes.insideLeft}>
                <div className={classes.imageDiv}>
                    <img src={item.avatar} alt={""}/></div>
                <div>
                    <div className={classes.name}>{item.name}</div>
                    <div className={classes.position}>{item.position}</div>
                    <div className={classes.description}>{item.description}</div>
                </div>
            </div>
            <div className={classes.rightPart}>
                <img className={classes.lineImg} src={Services20} alt={""}/>
                <img className={classes.rightImg} src={item.image} alt={""}/>
            </div>
        </SwiperSlide>
    ))


    return(
        <div className={classes.whole}>
            <div className={"container"}>
                <div className="greenTitle" style={{paddingLeft:"50px"}}>{mainSubTitle}</div>
                <h2 style={{paddingLeft:"50px"}}>{mainTitle}</h2>
                <div className={classes.inside}>
                    <div>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            zoom={true}
                            navigation={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Zoom, Navigation,Pagination]}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            className="swiperServices7"
                        >
                            {renderData}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MadeToMeasure6;
