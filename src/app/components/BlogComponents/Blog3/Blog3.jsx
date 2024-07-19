import React, {useEffect, useState} from 'react';
import BlogImage2 from '../../../assets/images/BlogImages/BlogImage2.png';
import BlogImage3 from '../../../assets/images/BlogImages/BlogImage3.png';
import BlogImage4 from '../../../assets/images/BlogImages/BlogImage4.png';
import BlogImage5 from '../../../assets/images/BlogImages/BlogImage5.png';
import BlogImage6 from '../../../assets/images/BlogImages/BlogImage6.png';
import BlogImage7 from '../../../assets/images/BlogImages/BlogImage7.png';
import BlogCalendar from '../../../assets/images/BlogImages/BlogCalendar.svg';
import Person from '../../../assets/images/BlogImages/Person.svg';
import classes from './Blog3.module.css';
import {useNavigate} from "react-router-dom";


const singleDataArticle=[
    {
        image:BlogImage2,
        title:"How to upcycle old hoodies?",
        date:"20/12/2021",
        name:"Nada Taha",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor...",
        id:1,
        buttonName:"Article"
    },
    {
        image:BlogImage3,
        title:"How Afak managed to build a sustainable brand",
        date:"20/12/2021",
        name:"Nada Taha",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor...",
        id:2,
        buttonName:"Article"
    },
    {
        image:BlogImage4,
        title:"How Afak managed to build a sustainable brand",
        date:"20/12/2021",
        name:"Nada Taha",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor...",
        id:3,
        buttonName:"Article"
    },
    {
        image:BlogImage5,
        title:"How to upcycle old hoodies?",
        date:"20/12/2021",
        name:"Nada Taha",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor...",
        id:4,
        buttonName:"Article"
    },
    {
        image:BlogImage6,
        title:"How to upcycle old hoodies?",
        date:"20/12/2021",
        name:"Nada Taha",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor...",
        id:5,
        buttonName:"Article"
    },
    {
        image:BlogImage7,
        title:"How to upcycle old hoodies?",
        date:"20/12/2021",
        name:"Nada Taha",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor...",
        id:6,
        buttonName:"Article"
    }
]


const singleDataWebinar=[
    {
        image:BlogImage4,
        title:"How to upcycle old hoodies?",
        date:"20/12/2021",
        name:"Nada Taha",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor...",
        id:1,
        buttonName:"Webinar"
    },
    {
        image:BlogImage3,
        title:"How Afak managed to build a sustainable brand",
        date:"20/12/2021",
        name:"Nada Taha",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor...",
        id:2,
        buttonName:"Webinar"
    },
    {
        image:BlogImage2,
        title:"How Afak managed to build a sustainable brand",
        date:"20/12/2021",
        name:"Nada Taha",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor...",
        id:3,
        buttonName:"Webinar"
    },
    {
        image:BlogImage6,
        title:"How to upcycle old hoodies?",
        date:"20/12/2021",
        name:"Nada Taha",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor...",
        id:4,
        buttonName:"Webinar"
    },
    {
        image:BlogImage5,
        title:"How to upcycle old hoodies?",
        date:"20/12/2021",
        name:"Nada Taha",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor...",
        id:5,
        buttonName:"Webinar"
    },
    {
        image:BlogImage7,
        title:"How to upcycle old hoodies?",
        date:"20/12/2021",
        name:"Nada Taha",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor...",
        id:6,
        buttonName:"Webinar"
    }
]
const singleDataReports=[
    {
        image:BlogImage4,
        title:"How to upcycle old hoodies?",
        date:"20/12/2021",
        name:"Nada Taha",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor...",
        id:1,
        buttonName:"Report"
    },
    {
        image:BlogImage2,
        title:"How Afak managed to build a sustainable brand",
        date:"20/12/2021",
        name:"Nada Taha",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor...",
        id:2,
        buttonName:"Report"
    },
    {
        image:BlogImage3,
        title:"How Afak managed to build a sustainable brand",
        date:"20/12/2021",
        name:"Nada Taha",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor...",
        id:3,
        buttonName:"Report"
    },
    {
        image:BlogImage5,
        title:"How to upcycle old hoodies?",
        date:"20/12/2021",
        name:"Nada Taha",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor...",
        id:4,
        buttonName:"Report"
    },
    {
        image:BlogImage6,
        title:"How to upcycle old hoodies?",
        date:"20/12/2021",
        name:"Nada Taha",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor...",
        id:5,
        buttonName:"Report"
    },
    {
        image:BlogImage7,
        title:"How to upcycle old hoodies?",
        date:"20/12/2021",
        name:"Nada Taha",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor...",
        id:6,
        buttonName:"Report"
    }
]

const singleDataCaseStudies=[
    {
        image:BlogImage4,
        title:"How to upcycle old hoodies?",
        date:"20/12/2021",
        name:"Nada Taha",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor...",
        id:1,
        buttonName:"Case Studies"
    },
    {
        image:BlogImage2,
        title:"How Afak managed to build a sustainable brand",
        date:"20/12/2021",
        name:"Nada Taha",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor...",
        id:2,
        buttonName:"Case Studies"
    },
    {
        image:BlogImage3,
        title:"How Afak managed to build a sustainable brand",
        date:"20/12/2021",
        name:"Nada Taha",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor...",
        id:3,
        buttonName:"Case Studies"
    },
    {
        image:BlogImage5,
        title:"How to upcycle old hoodies?",
        date:"20/12/2021",
        name:"Nada Taha",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor...",
        id:4,
        buttonName:"Case Studies"
    },
    {
        image:BlogImage6,
        title:"How to upcycle old hoodies?",
        date:"20/12/2021",
        name:"Nada Taha",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor...",
        id:5,
        buttonName:"Case Studies"
    },
    {
        image:BlogImage7,
        title:"How to upcycle old hoodies?",
        date:"20/12/2021",
        name:"Nada Taha",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor...",
        id:6,
        buttonName:"Case Studies"
    }
]

const Blog3 =({activeCategory })=>{


    const navigate=useNavigate();

    let handleRoute=(id, title, name)=>{
        if(name==="Case Studies"){
            navigate(`/blog/case_studies/${id}`,  { state: title})
        }
        else{
            navigate(`/blog/${name.toLowerCase()}/${id}`,  { state: title})
        }

    }


    const passingParameter = () => {
        switch (activeCategory) {
            case "Articles":
                return renderData(singleDataArticle);
            case "Webinars":
                return renderData(singleDataWebinar);
            case "Reports":
                return renderData(singleDataReports);
            case "Case Studies":
                return renderData(singleDataCaseStudies);
            default:
                return renderData(singleDataArticle);
        }
    }


    const renderData = (param) =>
        param.map((item, index) => (
            <div key={index} className={classes.single} onClick={() => handleRoute(item.id, item.title, item.buttonName)}>
                <div><img src={item.image} alt={""} /></div>
                <div className={classes.title}>{item.title}</div>
                <div className={classes.row}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div><img src={BlogCalendar} className={classes.iconStyle} alt={""} /></div>
                        <div className={classes.name}>{item.date}</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div><img src={Person} className={classes.iconStyle} alt={""} /></div>
                        <div className={classes.name}>{item.name}</div>
                    </div>
                </div>
                <div className={classes.description}>{item.description}</div>
                <div className={classes.buttons}>
                    <div className={classes.button}>{item.buttonName}</div>
                    {/*<div className={classes.button}>Tailoring</div>*/}
                </div>
            </div>
        ));

    return (
        <div className={"container"}>
            <div className={classes.inside}>
                {passingParameter()}
            </div>
            <button className={classes.blueBtn}>Load more ...</button>
        </div>
    );
};

export default Blog3;