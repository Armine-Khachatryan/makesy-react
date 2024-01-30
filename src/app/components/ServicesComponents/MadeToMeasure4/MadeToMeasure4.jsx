import React from 'react';
import {useMemo} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Services5 from '../../../assets/images/ServiceImages/Services5.png';
import Services6 from '../../../assets/images/ServiceImages/Services6.png';
import Services7 from '../../../assets/images/ServiceImages/Services7.png';
import Services8 from '../../../assets/images/ServiceImages/Services8.png';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import classes from './MadeToMeasure4.module.css';
import { Zoom, Navigation,Pagination } from 'swiper/modules';


const data=[
    {
        image:Services5,
        name:"Swimwear",
    },
    {
        image:Services6,
        name:"Formal Wear",
    },
    {
        image:Services7,
        name:"Casual Wear",
    },
    {
        image:Services8,
        name:"Smart Wear",
    },
    {
        image:Services5,
        name:"Swimwear",
    },
    {
        image:Services6,
        name:"Formal Wear",
    },
    {
        image:Services7,
        name:"Casual Wear",
    },
    {
        image:Services8,
        name:"Smart Wear",
    },
]


const MadeToMeasure4 =()=> {

    const renderSwiperData=useMemo(()=>{
       return data.map((item, index)=>(
            <SwiperSlide key={index}>
                <div className={classes.slideInside}>
                    <div><img className={classes.image} src={item.image} alt={""}/></div>
                    <div className={classes.name}>{item.name}</div>

                </div>
            </SwiperSlide>
        ))

    },[data])


    // const renderSwiperData= data.map((item, index)=>(
    //         <SwiperSlide key={index}>
    //             <div className={classes.slideInside}>
    //                 <div><img className={classes.image} src={item.image} alt={""}/></div>
    //                 <div className={classes.name}>{item.name}</div>
    //
    //             </div>
    //         </SwiperSlide>
    //     ))

    return(
        <div className={"container"}>
            <div className={classes.whole}>
                <div className={"greenTitle"} style={{textAlign:"center"}}>Categories</div>
                <h2 style={{textAlign:"center"}}>Garments Categories</h2>
                <div style={{position:"relative"}}>
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
                        className="swiperServices1"
                    >
                        {renderSwiperData}
                    </Swiper>
                </div>

            </div>
        </div>
    )
}

export default MadeToMeasure4;