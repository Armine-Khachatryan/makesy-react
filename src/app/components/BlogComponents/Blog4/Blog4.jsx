import React from 'react';
import BlogImage8 from '../../../assets/images/BlogImages/BlogImage8.png';
import BlogImage9 from '../../../assets/images/BlogImages/BlogImage9.png';
import BlogImage10 from '../../../assets/images/BlogImages/BlogImage10.png';
import BlogImage11 from '../../../assets/images/BlogImages/BlogImage11.png';
import classes from './Blog4.module.css';
import BlogCalendar from "../../../assets/images/BlogImages/BlogCalendar.svg";
import Person from "../../../assets/images/BlogImages/Person.svg";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Zoom} from "swiper/modules";
import {useNavigate} from "react-router-dom";



const singleData=[
    {
        image: BlogImage8,
        title: "How to upcycle old hoodies?",
        date: "20/12/2021",
        name: "Nada Taha",
        id:1
    },
    {
        image: BlogImage9,
        title: "How to upcycle old hoodies?",
        date: "20/12/2021",
        name: "Nada Taha",
        id:2
    },
    {
        image: BlogImage10,
        title: "How to upcycle old hoodies?",
        date: "20/12/2021",
        name: "Nada Taha",
        id:3
    },
    {
        image: BlogImage11,
        title: "How to upcycle old hoodies?",
        date: "20/12/2021",
        name: "Nada Taha",
        id:4
    },
    {
        image: BlogImage8,
        title: "How to upcycle old hoodies?",
        date: "20/12/2021",
        name: "Nada Taha",
        id:5
    },
    {
        image: BlogImage9,
        title: "How to upcycle old hoodies?",
        date: "20/12/2021",
        name: "Nada Taha",
        id:6
    },
    {
        image: BlogImage10,
        title: "How to upcycle old hoodies?",
        date: "20/12/2021",
        name: "Nada Taha",
        id:7
    },
    {
        image: BlogImage11,
        title: "How to upcycle old hoodies?",
        date: "20/12/2021",
        name: "Nada Taha",
        id:8
    }
    ]


const Blog4 =()=>{

    const navigate=useNavigate();

    let handleRoute=(id, title)=>{
        navigate(`/blog/webinar/${id}`,  { state: title})
    }

    const renderData=singleData.map((item, index)=>(
        <SwiperSlide  className={classes.single} onClick={()=>handleRoute(item.id, item.title)}>
            <div><img src={item.image} alt={""}/></div>
            <div className={classes.title}>{item.title}</div>
            <div className={classes.row}>
                <div style={{display:"flex", alignItems:"center"}}>
                    <div><img src={BlogCalendar} className={classes.iconStyle} alt={""} /></div>
                    <div className={classes.name}>{item.date}</div>
                </div>
                <div style={{display:"flex", alignItems:"center"}}>
                    <div><img src={Person} className={classes.iconStyle} alt={""} /></div>
                    <div className={classes.name}>{item.name}</div>
                </div>
            </div>
            <div className={classes.buttons}>
                <div className={classes.button}>Article</div>
                {/*<div className={classes.button}>Tailoring</div>*/}
            </div>
        </SwiperSlide>
    ))


    return(
        <div className={"container"}>
            <div className={classes.whole}>
                <div className={"greenTitle"}>Others</div>
                <h2>Trending Articles</h2>
                <div className={classes.inside}>
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
        </div>
    )

}

export default Blog4;