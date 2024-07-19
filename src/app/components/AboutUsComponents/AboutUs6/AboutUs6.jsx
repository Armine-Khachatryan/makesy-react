import React from 'react';
import AboutImage5 from '../../../assets/images/AboutUsImages/AboutImage5.png';
import AboutImage6 from '../../../assets/images/AboutUsImages/AboutImage6.png';
import AboutImage7 from '../../../assets/images/AboutUsImages/AboutImage7.png';
import LinkedIn from '../../../assets/images/AboutUsImages/LinkedIn.svg';
import Facebook from '../../../assets/images/AboutUsImages/Facebook.svg';
import Email from '../../../assets/images/AboutUsImages/Email.svg';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Zoom} from "swiper/modules";
import classes from './AboutUs6.module.css';




const AboutUs6 =()=>{

    const data=[
        {
            image:AboutImage5,
            name:"Team Member Name",
            position:"Job Title"
        },
        {
            image:AboutImage6,
            name:"Team Member Name",
            position:"Job Title"
        },
        {
            image:AboutImage7,
            name:"Team Member Name",
            position:"Job Title"
        },
        {
            image:AboutImage7,
            name:"Team Member Name",
            position:"Job Title"
        },
        {
            image:AboutImage5,
            name:"Team Member Name",
            position:"Job Title"
        },
        {
            image:AboutImage6,
            name:"Team Member Name",
            position:"Job Title"
        },
        {
            image:AboutImage7,
            name:"Team Member Name",
            position:"Job Title"
        },
        {
            image:AboutImage7,
            name:"Team Member Name",
            position:"Job Title"
        },
    ]

    const renderData=data.map((item, index)=>(
        <SwiperSlide className={classes.single}>
            <div><img className={classes.imgDiv} src={item.image} alt={""}/></div>
            <div className={classes.name}>{item.name}</div>
            <div className={classes.position}>{item.position}</div>
            <div className={classes.iconsDiv}>
                <img className={classes.iconStyle} src={LinkedIn} alt={""}/>
                <img className={classes.iconStyle} src={Facebook} alt={""}/>
                <img className={classes.iconStyle} src={Email} alt={""}/>
            </div>
        </SwiperSlide>
    ))

    return(
        <div className={classes.whole}>
            <div className={"container"}>
                <div className={"greenTitle"}>Makesy Team</div>
                <h2>Meet Our Team Members</h2>
                <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
                    scelerisque sapien. Nam consequat egestas libero.</div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
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

    )
}

export default AboutUs6;