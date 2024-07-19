import React, {useState, useRef} from 'react';
import {useLocation} from "react-router-dom";
import BasicBreadcrumbs from "../../components/Breadcrumb/Breadcrumb";
import BlogCalendar from "../../assets/images/BlogImages/BlogCalendar.svg";
import Person from "../../assets/images/BlogImages/Person.svg";
import video from '../../assets/videos/video1.mp4';
import {Blog4, Blog5} from '../../components/BlogComponents/index';
import BlogImage14 from '../../assets/images/BlogImages/BlogImage14.png';
import BlogImage15 from '../../assets/images/BlogImages/BlogImage15.png';
import BlogImage16 from '../../assets/images/BlogImages/BlogImage16.png';
import classes from './BlogWebinar.module.css';
import VideoModal from "../../components/BlogComponents/VideoModal/VideoModal";
import { FaPlay, FaPause } from 'react-icons/fa';
import PlayCircle from '../../assets/images/BlogImages/PlayCircle.svg';


const BlogWebinar =()=>{

    const {state} = useLocation();
    const [openVideoModal, setVideModal]=useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [emailDone, setEmailDone]=useState(false);
    const videoRef = useRef(null);

    let openModal = () => {
        setVideModal(true)
    }

    let closeModal = () => {
        setVideModal(false)
    }

    let data=[
        {
            image:BlogImage14,
            title:"How to upcycle old hoodies?",
            date:"20/12/2021",
            name:"Nada Taha"
        },
        {
            image:BlogImage15,
            title:"How to upcycle old hoodies?",
            date:"20/12/2021",
            name:"Nada Taha"
        },
        {
            image:BlogImage16,
            title:"How to upcycle old hoodies?",
            date:"20/12/2021",
            name:"Nada Taha"
        }
    ]

    let playVideo=()=>{
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
            setEmailDone(true);
        }
    }

    let handlePlayVideo=()=>{
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    }

    const handleVideoPause = () => {
        videoRef.current.pause();
        setIsPlaying(false)
        // setIsPlaying(false);
    };



    let renderData=data.map((item, index)=>(
        <div className={classes.single} key={index}>
            <div className={classes.singleInside}>
                <div className={classes.left}><img src={item.image} alt={""}/></div>
                <div>
                    <div className={classes.singleTitle}>{item.title}</div>
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
                </div>
            </div>
        </div>
        ))



    return(
        <>
            <div className={"container"}>
                <BasicBreadcrumbs link="blog" title={state}/>
                <div className={classes.title}>How to upcycle old hoodies?</div>
                <div className={classes.row}>
                    <div style={{display:"flex", alignItems:"center"}}>
                        <div><img src={BlogCalendar} className={classes.iconStyle} alt={""} /></div>
                        <div className={classes.name}>20/12/2021</div>
                    </div>
                    <div style={{display:"flex", alignItems:"center"}}>
                        <div><img src={Person} className={classes.iconStyle} alt={""} /></div>
                        <div className={classes.name}>Nada Taha</div>
                    </div>
                </div>
                <div className={classes.buttons}>
                    <div className={classes.button}>Webinar</div>
                </div>
                <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
                    scelerisque sapien. Nam consequat egestas libero, quis lacinia ipsum pretium non. Phasellus et nisl
                    mollis, tristique elit sit amet, facilisis arcu. Phasellus et nisl mollis, tristique elit sit amet,
                    facilisis arcu. Nullam condimentum libero id ligula semper tincidunt. Sed quis nulla auctor mi
                    vestibulum vestibulum quis id magna. Quisque eget vestibulum est, eu aliquet dolor.</div>
                <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
                    scelerisque sapien. Nam consequat egestas libero, quis lacinia ipsum pretium non. Phasellus et nisl
                    mollis, tristique elit sit amet, facilisis arcu. Phasellus et nisl mollis, tristique elit sit
                    amet.</div>
                <div className={classes.inside}>
                    <div className={classes.insideLeft}>
                        <video
                            ref={videoRef}
                            width="100%"
                            height="600"
                            >
                            <source src={video} type="video/mp4" />
                        </video>
                        {!emailDone &&
                            <div className={classes.playCircle}
                                 onClick={() => openModal()}>
                                <img src={PlayCircle} alt={""}/>
                            </div>
                        }
                        {emailDone && isPlaying ?
                            <div className={classes.icon} onClick={handleVideoPause}><FaPause /></div> :
                            emailDone && !isPlaying ?
                            <div className={classes.icon} onClick={handlePlayVideo}> <FaPlay /></div> : ""}
                    </div>
                    <div className={classes.insideRight}>
                        <div className={classes.up}>
                            <div className={classes.titleTop}>Other Webinars</div>
                            <div className={classes.see}>See all</div>
                        </div>
                        {renderData}
                    </div>
                </div>
            </div>
            <Blog4/>
            <Blog5/>
            <VideoModal openVideoModal={openVideoModal} closeModal={closeModal} onPlayVideo={playVideo}/>
        </>
    )
}

export default BlogWebinar;