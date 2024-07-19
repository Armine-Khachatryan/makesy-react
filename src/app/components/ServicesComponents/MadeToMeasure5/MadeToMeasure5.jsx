import React from 'react';
import Services13 from '../../../assets/images/ServiceImages/Services13.png';
import Services14 from '../../../assets/images/ServiceImages/Services14.png';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Zoom} from "swiper/modules";
import classes from './MadeToMeasure5.module.css';



const MadeToMeasure5 =({workshopData,artisansData,subTitle,title, workshopTitle,artisansTitle,
                           listWorkshop,listArtisans, workshopText, artisansText})=> {


    let renderWorkshopData=workshopData.map((item, index)=>(
        <SwiperSlide
            key={index}>
            <div className={classes.slide}>
                <div className={classes.slideInside}>
                    <div className={classes.imgDiv}><img className={classes.img} src={item.image} alt={""}/></div>
                    <div className={classes.title}>{item.name}</div>
                    <div className={classes.text}>{item.description}</div>
                </div>
            </div>
        </SwiperSlide>
    ))

    let renderArtisansData=artisansData.map((item, index)=>(
        <SwiperSlide
            key={index}>
            <div className={classes.slide}>
                <div className={classes.slideInside}>
                    <div className={classes.imgDiv}><img className={classes.img} src={item.image} alt={""}/></div>
                    <div className={classes.title}>{item.name}</div>
                    <div className={classes.text}>{item.description}</div>
                </div>
            </div>
        </SwiperSlide>
    ))

    return(
        <div className={classes.whole}>
            <div className={"container"}>
                <div className="greenTitle" style={{textAlign:"center"}}>{subTitle}</div>
                <h2 style={{textAlign:"center"}}>{title}</h2>
                <div className={classes.upDiv}>
                    <div className={classes.upDivInside}>
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
                            className="swiperServices5"
                        >
                            {renderWorkshopData}
                        </Swiper>
                        <div className={classes.upRight}>
                            <h2>{workshopTitle}</h2>
                            <div className={classes.textRight}>{workshopText}</div>
                            <ul className={classes.listStyle}>
                                {listWorkshop.map((item, index)=>(
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={classes.downDiv}>
                    <div className={classes.downInside}>
                        <div className={classes.downLeft}>
                            <h2>{artisansTitle}</h2>
                            <div className={classes.textRight}>{artisansText}</div>
                            <ul className={classes.listStyle}>
                                {listArtisans.map((item, index)=>(
                                    <li>{item}</li>
                                ))}
                            </ul>
                        </div>
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
                            className="swiperServices6"
                        >
                            {renderArtisansData}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MadeToMeasure5;