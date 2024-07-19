import React, {useState} from 'react';
import BlogIcon1 from '../../../assets/images/BlogImages/BlogIcon1.svg';
import BlogActiveIcon1 from '../../../assets/images/BlogImages/BlogActiveIocn1.svg';
import BlogActiveIcon2 from '../../../assets/images/BlogImages/BlogActiveIcon2.svg';
import BlogActiveIcon3 from '../../../assets/images/BlogImages/BlogActiveIcon3.svg';
import BlogActiveIcon4 from '../../../assets/images/BlogImages/BlogActiveIcon4.svg';
import BlogIcon2 from '../../../assets/images/BlogImages/BlogIcon2.svg';
import BlogIcon3 from '../../../assets/images/BlogImages/BlogIcon3.svg';
import BlogIcon4 from '../../../assets/images/BlogImages/BlogIcon4.svg';
import BlogSearch from '../../../assets/images/BlogImages/BlogSearch.svg';
import {Blog3} from "../index";
import classes from './Blog2.module.css';


const Blog2 =()=>{


    const [activeBlog, setActiveBlog]=useState(0);

    const blogData=[
        {
            icon:BlogIcon1,
            activeIcon:BlogActiveIcon1,
            name:"Articles"
        },
        {
            icon:BlogIcon2,
            activeIcon:BlogActiveIcon2,
            name:"Case Studies"
        },
        {
            icon:BlogIcon3,
            activeIcon:BlogActiveIcon3,
            name:"Reports"
        },
        {
            icon:BlogIcon4,
            activeIcon:BlogActiveIcon4,
            name:"Webinars"
        }
    ]


    let makeActive = (i) => {
        setActiveBlog(i)
    }

    const renderBlogData=blogData.map((item, index)=>(
        <div className={`${classes.single}  ${activeBlog ===index && classes.singleActive}`} key={index}
             onClick={()=>makeActive(index)}>
            <div><img src={activeBlog ===index ? item.activeIcon :item.icon} alt={""}/></div>
            <div className={`${classes.name} ${activeBlog ===index && classes.activeName}`}>{item.name}</div>
        </div>
    ))

    return (
        <>
            <div className={"container"}>
                <div className={classes.title}>Select Category</div>
                <div className={classes.inside}>
                    {renderBlogData}
                </div>
                <div className={classes.searchDiv}>
                    <input placeholder="What are you looking for?" className={classes.searchInput}/>
                    <div className={classes.searchIconDiv}>
                        <img src={BlogSearch} className={classes.searchIcon} alt=""/>
                    </div>
                </div>
            </div>
            <Blog3 activeCategory={blogData[activeBlog].name} />
        </>

    )
}


export default Blog2;