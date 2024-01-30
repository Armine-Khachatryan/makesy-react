import React from 'react';
import Services13 from '../../../assets/images/ServiceImages/Services13.png';
import Services14 from '../../../assets/images/ServiceImages/Services14.png';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Zoom} from "swiper/modules";
import classes from './MadeToMeasure5.module.css';

const workshopData=[
    {
        image:Services13,
        name:"Machine Name",
        description:"machine description machine description machine description machine description machine " +
            "description machine description  machine description"
    },
    {
        image:Services13,
        name:"Machine Name",
        description:"machine description machine description machine description machine description machine " +
            "description machine description  machine description"
    },
    {
        image:Services13,
        name:"Machine Name",
        description:"machine description machine description machine description machine description machine " +
            "description machine description  machine description"
    },
    {
        image:Services13,
        name:"Machine Name",
        description:"machine description machine description machine description machine description machine " +
            "description machine description  machine description"
    },
    {
        image:Services13,
        name:"Machine Name",
        description:"machine description machine description machine description machine description machine " +
            "description machine description  machine description"
    },
    {
        image:Services13,
        name:"Machine Name",
        description:"machine description machine description machine description machine description machine " +
            "description machine description  machine description"
    }
]

const artisansData=[
    {
        image:Services14,
        name:"Artist Name",
        description:"Skill description Skill description Skill description Skill description Skill description Skill " +
            "description Skill description Skill description Skill description Skill description "
    },
    {
        image:Services14,
        name:"Artist Name",
        description:"Skill description Skill description Skill description Skill description Skill description Skill " +
            "description Skill description Skill description Skill description Skill description "
    },
    {
        image:Services14,
        name:"Artist Name",
        description:"Skill description Skill description Skill description Skill description Skill description Skill " +
            "description Skill description Skill description Skill description Skill description "
    },
    {
        image:Services14,
        name:"Artist Name",
        description:"Skill description Skill description Skill description Skill description Skill description Skill " +
            "description Skill description Skill description Skill description Skill description "
    },
    {
        image:Services14,
        name:"Artist Name",
        description:"Skill description Skill description Skill description Skill description Skill description Skill " +
            "description Skill description Skill description Skill description Skill description "
    },
    {
        image:Services14,
        name:"Artist Name",
        description:"Skill description Skill description Skill description Skill description Skill description Skill " +
            "description Skill description Skill description Skill description Skill description "
    }]

const MadeToMeasure5 =()=> {


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
            <div className="greenTitle" style={{textAlign:"center"}}>Categories</div>
            <h2 style={{textAlign:"center"}}>Production</h2>
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
                        <h2>Workshops</h2>
                        <div className={classes.textRight}>Choose between the latest Garments Machines
                            to Produce your Garments</div>
                        <ul className={classes.listStyle}>
                            <li>Lower Cost</li>
                            <li>More consistent</li>
                            <li>Less Time</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={classes.downDiv}>
                <div className={classes.downInside}>
                    <div className={classes.downLeft}>
                        <h2>Artisans</h2>
                        <div className={classes.textRight}>Choose between a lot of Talented Makesy Artisans
                            to work on your Garment</div>
                        <ul className={classes.listStyle}>
                            <li>Unique Pieces</li>
                            <li>Eco Friendly</li>
                            <li>Unique Pieces</li>
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
    )
}

export default MadeToMeasure5;