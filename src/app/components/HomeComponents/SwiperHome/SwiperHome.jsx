import React, {useState} from 'react';
import HomeImage15 from '../../../assets/images/HomeImages/HomeImage15.png';
import HomeImage16 from '../../../assets/images/HomeImages/HomeImage16.png';
import HomeImage17 from '../../../assets/images/HomeImages/HomeImage17.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import classes from './SwiperHome.module.css'
import { Zoom, Navigation,Pagination } from 'swiper/modules';

const data=[
    {
        name:"Shirene Rifaie",
        position:"Founder, Jordan Fashion Week",
        description:"It was a great experience working with Makesy. They were committed to understanding our brand and" +
            " our needs. The collaboration and the communication have been perfect.",
        image:HomeImage15
    },
    {
        name:"Rany Kawar",
        position:"Co-founder, Arak",
        description:"It was a great experience working with Makesy. They were committed to understanding our brand and" +
            " our needs. The collaboration and the communication have been perfect and I was impressed with their work" +
            " ethics.",
        image:HomeImage16
    },
    {
        name:"Shirene Rifaie",
        position:"Founder, Jordan Fashion Week",
        description:"It was a great experience working with Makesy. They were committed to understanding our brand and" +
            " our needs. The collaboration and the communication have been perfect.",
        image:HomeImage17
    },
    {
        name:"Shirene Rifaie",
        position:"Founder, Jordan Fashion Week",
        description:"It was a great experience working with Makesy. They were committed to understanding our brand and" +
            " our needs. The collaboration and the communication have been perfect.",
        image:HomeImage15
    },
    {
        name:"Rany Kawar",
        position:"Co-founder, Arak",
        description:"It was a great experience working with Makesy. They were committed to understanding our brand and" +
            " our needs. The collaboration and the communication have been perfect and I was impressed with their work" +
            " ethics.",
        image:HomeImage16
    },
    {
        name:"Shirene Rifaie",
        position:"Founder, Jordan Fashion Week",
        description:"It was a great experience working with Makesy. They were committed to understanding our brand and" +
            " our needs. The collaboration and the communication have been perfect.",
        image:HomeImage17
    },
]

const HomeSwiper =() => {

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    let renderData=data.map((item, index)=>(
        <SwiperSlide
            className={`${hoveredIndex === index ? classes.bigSlide : classes.slide}`}
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}>
                <div className={classes.slideInside}>
                    <div className={`${hoveredIndex === index ? classes.bigImgDiv : classes.imgDiv}`}><img src={item.image} alt={""}/></div>
                    <div className={classes.name}>{item.name}</div>
                    <div className={classes.text}>{item.position}</div>
                    <div className={`${hoveredIndex === index ? classes.boldText : classes.text}`}>{item.description}</div>
                </div>
        </SwiperSlide>
    ))

    return (
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
            className="swiperHome"
        >
            {renderData}
        </Swiper>
    );
};


export default HomeSwiper;