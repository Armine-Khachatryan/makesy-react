import React, {useState} from 'react';
import TermsIcon1 from '../../../assets/images/TermsAndConditionsImages/TermsIcon1.svg';
import TermsIcon2 from '../../../assets/images/TermsAndConditionsImages/TermsIcon2.svg';
import TermsIcon3 from '../../../assets/images/TermsAndConditionsImages/TermsIcon3.svg';
import TermsIcon4 from '../../../assets/images/TermsAndConditionsImages/TermsIcon4.svg';
import classes from './TermsAndConditions2.module.css';


const TermsAndConditions2 =()=>{

    const [active, setActive]=useState(0)

    const data=[
        {name:"Use of our Website"},
        {name:"Accounts and passwords"},
        {name:"Purchase Conditions"},
        {name:"Access to website"},
        {name:"Our cookies policy"},
        {name:"Our responsibilities"},
    ]

    let makeActive=(i)=>{
        setActive(i);
        const targetDiv = document.getElementById(`section-${i + 1}`);
        if (targetDiv) {
            targetDiv.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }

    const renderData=data.map((item, index)=>(
        <a className={`${classes.single} ${active===index && classes.activeSingle}`}
             key={index} onClick={()=>makeActive(index)}>{item.name}</a>
    ))


    return(
        <div className={"container"}>
            <div className={classes.whole}>
                <div className={classes.left}>
                    {renderData}
                </div>
                <div className={classes.right}>
                    <div className={classes.title}>Legal Terms</div>
                    <div id="section-1">
                        <div className={classes.row}>
                            <div className={classes.iconDiv}><img className={classes.iconStyle} src={TermsIcon1} alt={""}/></div>
                            <div className={classes.subTitle}>Use of our Website and our Services</div>
                        </div>
                        <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
                            scelerisque sapien. Nam consequat egestas libero, quis lacinia ipsum pretium non. Phasellus et
                            nisl mollis, tristique elit sit amet, facilisis arcu. Phasellus et nisl mollis, tristique elit
                            sit amet, facilisis arcu. Nullam condimentum libero id ligula semper tincidunt. Sed quis nulla
                            auctor mi vestibulum vestibulum quis id magna. Quisque eget vestibulum est, eu aliquet dolor.
                        </div>
                        <ul>
                            <li className={classes.listStyle}>Quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea.</li>
                            <li className={classes.listStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit.</li>
                            <li className={classes.listStyle}>Duis aute irure dolor in reprehenderit in voluptate
                                velit esse.</li>
                            <li className={classes.listStyle}>Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa.</li>
                        </ul>
                    </div>
                    <div id="section-2">
                        <div className={classes.row}>
                            <div className={classes.iconDiv}><img className={classes.iconStyle} src={TermsIcon2} alt={""}/></div>
                            <div className={classes.subTitle}>Accounts and passwords</div>
                        </div>
                        <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                            quis scelerisque sapien. Nam consequat egestas libero, quis lacinia ipsum pretium non.
                            Phasellus et nisl mollis, tristique elit sit amet, facilisis arcu. Phasellus et nisl mollis,
                            tristique elit sit amet, facilisis arcu. Nullam condimentum libero id ligula semper
                            tincidunt. Sed quis nulla auctor mi vestibulum vestibulum quis id magna. Quisque eget
                            vestibulum est, eu aliquet dolor.</div>
                        <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                            quis scelerisque sapien. Nam consequat egestas libero, quis lacinia ipsum pretium non.
                            Phasellus et nisl mollis, tristique elit sit amet, facilisis arcu. Phasellus et nisl mollis,
                            tristique elit sit amet, facilisis arcu.</div>
                        <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                            quis scelerisque sapien. Nam consequat egestas libero, quis lacinia ipsum pretium non.
                            Phasellus et nisl mollis, tristique elit sit amet, facilisis arcu. Phasellus et nisl mollis,
                            tristique elit sit amet, facilisis arcu. Nullam condimentum libero id ligula semper
                            tincidunt. Sed quis nulla auctor mi vestibulum vestibulum quis id magna. Quisque eget
                            vestibulum est, eu aliquet dolor.</div>
                    </div>
                    <div id="section-3">
                        <div className={classes.row}>
                            <div className={classes.iconDiv}><img className={classes.iconStyle} src={TermsIcon3} alt={""}/></div>
                            <div className={classes.subTitle}>Purchase Conditions</div>
                        </div>
                        <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
                            scelerisque sapien. Nam consequat egestas libero, quis lacinia ipsum pretium non. Phasellus et
                            nisl mollis, tristique elit sit amet, facilisis arcu. Phasellus et nisl mollis, tristique elit
                            sit amet, facilisis arcu. Nullam condimentum libero id ligula semper tincidunt. Sed quis nulla
                            auctor mi vestibulum vestibulum quis id magna. Quisque eget vestibulum est, eu aliquet dolor.
                        </div>
                        <ul>
                            <li className={classes.listStyle}>Quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea.</li>
                            <li className={classes.listStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit.</li>
                            <li className={classes.listStyle}>Duis aute irure dolor in reprehenderit in voluptate
                                velit esse.</li>
                            <li className={classes.listStyle}>Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa.</li>
                        </ul>
                    </div>
                    <div id="section-4">
                        <div className={classes.row}>
                            <div className={classes.iconDiv}><img className={classes.iconStyle} src={TermsIcon4} alt={""}/></div>
                            <div className={classes.subTitle}>Access to website</div>
                        </div>
                        <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
                            scelerisque sapien. Nam consequat egestas libero, quis lacinia ipsum pretium non. Phasellus et
                            nisl mollis, tristique elit sit amet, facilisis arcu. Phasellus et nisl mollis, tristique elit
                            sit amet, facilisis arcu. Nullam condimentum libero id ligula semper tincidunt. Sed quis nulla
                            auctor mi vestibulum vestibulum quis id magna. Quisque eget vestibulum est, eu aliquet dolor.
                        </div>
                        <ul>
                            <li className={classes.listStyle}>Quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea.</li>
                            <li className={classes.listStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit.</li>
                            <li className={classes.listStyle}>Duis aute irure dolor in reprehenderit in voluptate
                                velit esse.</li>
                            <li className={classes.listStyle}>Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa.</li>
                        </ul>
                    </div>
                    <div id="section-5">
                        <div className={classes.row}>
                            <div className={classes.iconDiv}><img className={classes.iconStyle} src={TermsIcon2} alt={""}/></div>
                            <div className={classes.subTitle}>Our cookies policy</div>
                        </div>
                        <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                            quis scelerisque sapien. Nam consequat egestas libero, quis lacinia ipsum pretium non.
                            Phasellus et nisl mollis, tristique elit sit amet, facilisis arcu. Phasellus et nisl mollis,
                            tristique elit sit amet, facilisis arcu. Nullam condimentum libero id ligula semper
                            tincidunt. Sed quis nulla auctor mi vestibulum vestibulum quis id magna. Quisque eget
                            vestibulum est, eu aliquet dolor.</div>
                        <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                            quis scelerisque sapien. Nam consequat egestas libero, quis lacinia ipsum pretium non.
                            Phasellus et nisl mollis, tristique elit sit amet, facilisis arcu. Phasellus et nisl mollis,
                            tristique elit sit amet, facilisis arcu.</div>
                        <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                            quis scelerisque sapien. Nam consequat egestas libero, quis lacinia ipsum pretium non.
                            Phasellus et nisl mollis, tristique elit sit amet, facilisis arcu. Phasellus et nisl mollis,
                            tristique elit sit amet, facilisis arcu. Nullam condimentum libero id ligula semper
                            tincidunt. Sed quis nulla auctor mi vestibulum vestibulum quis id magna. Quisque eget
                            vestibulum est, eu aliquet dolor.</div>
                    </div>
                    <div id="section-6">
                        <div className={classes.row}>
                            <div className={classes.iconDiv}><img className={classes.iconStyle} src={TermsIcon3} alt={""}/></div>
                            <div className={classes.subTitle}>Our responsibilities</div>
                        </div>
                        <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                            quis scelerisque sapien. Nam consequat egestas libero, quis lacinia ipsum pretium non.
                            Phasellus et nisl mollis, tristique elit sit amet, facilisis arcu. Phasellus et nisl mollis,
                            tristique elit sit amet, facilisis arcu. Nullam condimentum libero id ligula semper
                            tincidunt. Sed quis nulla auctor mi vestibulum vestibulum quis id magna. Quisque eget
                            vestibulum est, eu aliquet dolor.</div>
                        <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                            quis scelerisque sapien. Nam consequat egestas libero, quis lacinia ipsum pretium non.
                            Phasellus et nisl mollis, tristique elit sit amet, facilisis arcu. Phasellus et nisl mollis,
                            tristique elit sit amet, facilisis arcu.</div>
                        <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                            quis scelerisque sapien. Nam consequat egestas libero, quis lacinia ipsum pretium non.
                            Phasellus et nisl mollis, tristique elit sit amet, facilisis arcu. Phasellus et nisl mollis,
                            tristique elit sit amet, facilisis arcu. Nullam condimentum libero id ligula semper
                            tincidunt. Sed quis nulla auctor mi vestibulum vestibulum quis id magna. Quisque eget
                            vestibulum est, eu aliquet dolor.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermsAndConditions2;