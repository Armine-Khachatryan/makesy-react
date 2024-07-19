import React from 'react';
import BlogBg1 from '../../../assets/images/BlogImages/BlogBg1.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import classes from './Blog1.module.css';


const Blog1 =()=>{


    return(
        <div className={"container"}>
            <div className={classes.inside}>
                {/*<Swiper*/}
                {/*    direction={'vertical'}*/}
                {/*    pagination={{*/}
                {/*        clickable: true,*/}
                {/*    }}*/}
                {/*    modules={[Pagination]}*/}
                {/*    className="my"*/}
                {/*>*/}
                {/*    <SwiperSlide>Slide 1</SwiperSlide>*/}
                {/*    <SwiperSlide>Slide 2</SwiperSlide>*/}
                {/*    <SwiperSlide>Slide 3</SwiperSlide>*/}
                {/*    <SwiperSlide>Slide 4</SwiperSlide>*/}
                {/*    <SwiperSlide>Slide 5</SwiperSlide>*/}
                {/*    <SwiperSlide>Slide 6</SwiperSlide>*/}
                {/*    <SwiperSlide>Slide 7</SwiperSlide>*/}
                {/*    <SwiperSlide>Slide 8</SwiperSlide>*/}
                {/*    <SwiperSlide>Slide 9</SwiperSlide>*/}
                {/*</Swiper>*/}
                <Swiper
                    direction={'vertical'}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="my"
                >
                    <SwiperSlide className={classes.slide}>
                            <div className={classes.text}>By Hanadi. August 29, 2022</div>
                            <div className={classes.title}>How customization can help</div>
                            <div className={classes.bgTitle}>climate change</div>
                            <div className={classes.subTitle}>Sed ut perspiciatis unde omnis iste natus error sit
                                voluptatem accusantium dolor emque laudium, totam rem aperiam, eaque ipsa quae ab illo
                                inventore veritatis...</div>
                            <div className={classes.whiteBtn}>Read Article</div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={classes.slide}>
                            <div className={classes.text}>By Hanadi. August 29, 2022</div>
                            <div className={classes.title}>How customization can help</div>
                            <div className={classes.bgTitle}>climate change</div>
                            <div className={classes.subTitle}>Sed ut perspiciatis unde omnis iste natus error sit
                                voluptatem accusantium dolor emque laudium, totam rem aperiam, eaque ipsa quae ab illo
                                inventore veritatis...</div>
                            <div className={classes.whiteBtn}>Read Article</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={classes.slide}>
                            <div className={classes.text}>By Hanadi. August 29, 2022</div>
                            <div className={classes.title}>How customization can help</div>
                            <div className={classes.bgTitle}>climate change</div>
                            <div className={classes.subTitle}>Sed ut perspiciatis unde omnis iste natus error sit
                                voluptatem accusantium dolor emque laudium, totam rem aperiam, eaque ipsa quae ab illo
                                inventore veritatis...</div>
                            <div className={classes.whiteBtn}>Read Article</div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

    )
}

export default Blog1;