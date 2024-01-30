import React, {useState} from 'react';
import Plus from '../../../assets/images/HomeImages/Plus.svg';
import Minus from '../../../assets/images/HomeImages/Minus.svg';
import classes from './HomeComponent8.module.css';

const data=[
    {
        question:"How can i create account?",
        answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis." +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
},
    {
        question:"How can i make an order?",
        answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis." +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
    },
    {
        question:"How can i make an order?",
        answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis." +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
    },
    {
        question:"How can i make an order?",
        answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis." +
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
    }
]

const HomeComponent8 =()=>{

    const [opened, setOpened]=useState([]);


    let toggleOpen = (indx) => {
        if (!opened) {
            setOpened([indx]);
        } else if (opened.includes(indx)) {
            setOpened(opened.filter((item) => item !== indx));
        } else {
            setOpened([...opened, indx]);
        }
    };


    let renderData=data.map((item, index)=>(
        <div className={classes.single} key={index}>
            <div className={classes.upPart}>
                <div className={classes.questionDiv}>{item.question}</div>
                <div className={classes.iconStyle} onClick={()=>toggleOpen(index)}>
                    {opened && opened.includes(index) ? <img src={Minus} alt={""} /> : <img src={Plus} alt={""} />}
                </div>
            </div>
            <div className={`${opened && opened.includes(index) ? classes.answer : classes.hide}`}>{item.answer}</div>

        </div>
    ))



    return(
        <div className={classes.whole}>
            <div className="container">
                <div className={classes.inside}>
                    <div style={{width:"35%"}}>
                        <div className={classes.title}>Questions</div>
                        <h2>FAQ</h2>
                        <div className={classes.text}>We always will be here for you</div>
                    </div>
                    <div className={classes.questionsWhole}>
                        {renderData}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent8;