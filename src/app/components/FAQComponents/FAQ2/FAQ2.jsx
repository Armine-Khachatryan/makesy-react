import React, {useState} from 'react';
import FaqIcon1 from '../../../assets/images/FAQImages/FaqIcon1.svg';
import FaqIcon2 from '../../../assets/images/FAQImages/FaqIcon2.svg';
import FaqIcon3 from '../../../assets/images/FAQImages/FaqIcon3.svg';
import FaqIcon4 from '../../../assets/images/FAQImages/FaqIcon4.svg';
import FaqIcon5 from '../../../assets/images/FAQImages/FaqIcon5.svg';
import FaqIcon6 from '../../../assets/images/FAQImages/FaqIcon6.svg';
import FaqIcon7 from '../../../assets/images/FAQImages/FaqIcon7.svg';
import FaqIcon8 from '../../../assets/images/FAQImages/FaqIcon8.svg';
import FaqIcon9 from '../../../assets/images/FAQImages/FaqIcon9.svg';
import FaqIcon10 from '../../../assets/images/FAQImages/FaqIcon10.svg';
import FaqIcon11 from '../../../assets/images/FAQImages/FaqIcon11.svg';
import FaqIcon12 from '../../../assets/images/FAQImages/FaqIcon12.svg';
import FaqIcon13 from '../../../assets/images/FAQImages/FaqIcon13.svg';
import FaqActiveIcon1 from '../../../assets/images/FAQImages/FaqActiveIcon1.svg';
import FaqActiveIcon2 from '../../../assets/images/FAQImages/FaqActiveIcon2.svg';
import FaqActiveIcon3 from '../../../assets/images/FAQImages/FaqActiveIcon3.svg';
import FaqActiveIcon4 from '../../../assets/images/FAQImages/FaqActiveIcon4.svg';
import FaqActiveIcon5 from '../../../assets/images/FAQImages/FaqActiveIcon5.svg';
import FaqActiveIcon6 from '../../../assets/images/FAQImages/FaqActiveIcon6.svg';
import FaqActiveIcon7 from '../../../assets/images/FAQImages/FaqActiveIcon7.svg';
import FaqActiveIcon8 from '../../../assets/images/FAQImages/FaqActiveIcon8.svg';
import Add from '../../../assets/images/FAQImages/Add.svg';
import Minus from '../../../assets/images/FAQImages/Minus.svg';
import classes from './FAQ2.module.css';
import BlogSearch from "../../../assets/images/BlogImages/BlogSearch.svg";

const blockData=[
    {
        icon:FaqIcon1,
        activeIcon:FaqActiveIcon1,
        title:"Customers"
    },
    {
        icon:FaqIcon2,
        activeIcon:FaqActiveIcon2,
        title:"Garment Producers"
    },
    {
        icon:FaqIcon3,
        activeIcon:FaqActiveIcon3,
        title:"Artisans"
    }
]

const sectionData=[
    {
        icon:FaqIcon4,
        activeIcon:FaqActiveIcon4,
        title:"Account"
    },
    {
        icon:FaqIcon5,
        activeIcon:FaqActiveIcon5,
        title:"Orders"
    },
    {
        icon:FaqIcon6,
        activeIcon:FaqActiveIcon6,
        title:"Payments"
    },
    {
        icon:FaqIcon7,
        activeIcon:FaqActiveIcon7,
        title:"Delivery"
    },
    {
        icon:FaqIcon8,
        activeIcon:FaqActiveIcon8,
        title:"Returns"
    }
]

const FAQ2=()=>{
    const [activeBlock, setActiveBlock]=useState(0);
    let [activeSection, setActiveSection]=useState(0);
    let [questionsData, setQuestionsData]=useState([
        {
            icon:FaqIcon9,
            name:"Account",
            questions:[
                {
                    question:"How can i create account?",
                    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus " +
                        "venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet" +
                        " luctus venenatis . Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus" +
                        " sit amet luctus venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam," +
                        " purus sit amet luctus venenatis " +
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.",
                },
                {
                    question:"How can i make an order?",
                    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus " +
                        "venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet" +
                        " luctus venenatis . Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus" +
                        " sit amet luctus venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam," +
                        " purus sit amet luctus venenatis " +
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.",
                },
                {
                    question:"How can i make an order?",
                    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus " +
                        "venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet" +
                        " luctus venenatis . Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus" +
                        " sit amet luctus venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam," +
                        " purus sit amet luctus venenatis " +
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.",
                },
                {
                    question:"How can i make an order?",
                    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus " +
                        "venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet" +
                        " luctus venenatis . Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus" +
                        " sit amet luctus venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam," +
                        " purus sit amet luctus venenatis " +
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.",
                }
            ]
        },
        {
            icon:FaqIcon10,
            name:"Orders",
            questions:[
                {
                    question:"How can i create account?",
                    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus " +
                        "venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet" +
                        " luctus venenatis . Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus" +
                        " sit amet luctus venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam," +
                        " purus sit amet luctus venenatis " +
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.",
                },
                {
                    question:"How can i make an order?",
                    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus " +
                        "venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet" +
                        " luctus venenatis . Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus" +
                        " sit amet luctus venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam," +
                        " purus sit amet luctus venenatis " +
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.",
                },
            ]
        },
        {
            icon:FaqIcon11,
            name:"Payments",
            questions:[
                {
                    question:"How can i make an order?",
                    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus " +
                        "venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet" +
                        " luctus venenatis . Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus" +
                        " sit amet luctus venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam," +
                        " purus sit amet luctus venenatis " +
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.",
                },
                {
                    question:"How can i make an order?",
                    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus " +
                        "venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet" +
                        " luctus venenatis . Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus" +
                        " sit amet luctus venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam," +
                        " purus sit amet luctus venenatis " +
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.",
                },
            ]
        },
        {
            icon:FaqIcon12,
            name:"Delivery",
            questions:[
                {
                    question:"How can i make an order?",
                    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus " +
                        "venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet" +
                        " luctus venenatis . Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus" +
                        " sit amet luctus venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam," +
                        " purus sit amet luctus venenatis " +
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.",
                },
                {
                    question:"How can i make an order?",
                    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus " +
                        "venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet" +
                        " luctus venenatis . Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus" +
                        " sit amet luctus venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam," +
                        " purus sit amet luctus venenatis " +
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.",
                },
            ]
        },
        {
            icon:FaqIcon13,
            name:"Returns",
            questions:[
                {
                    question:"How can i make an order?",
                    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus " +
                        "venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet" +
                        " luctus venenatis . Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus" +
                        " sit amet luctus venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam," +
                        " purus sit amet luctus venenatis " +
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.",
                },
                {
                    question:"How can i make an order?",
                    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus " +
                        "venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet" +
                        " luctus venenatis . Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus" +
                        " sit amet luctus venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam," +
                        " purus sit amet luctus venenatis " +
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.",
                },
            ]
        },
    ])

    let makeActiveBlock=(i)=>{
        setActiveBlock(i)
    }


    let makeActiveSection = (id, title) => {
        setActiveSection(id);
        const targetDiv = document.getElementById(`section-${title}`);
        if (targetDiv) {
            targetDiv.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };


    const renderBlocks =blockData.map((item, index)=>(
        <div className={`${classes.single} ${activeBlock===index && classes.activeSingle}`}
             key={index} onClick={()=>makeActiveBlock(index)}>
            <div className={classes.iconDiv}>
                {activeBlock===index ?<img src={item.activeIcon} alt={""}/>:<img src={item.icon} alt={""}/>}
            </div>
            <div className={`${classes.title} ${activeBlock===index && classes.activeTitle}`}>{item.title}</div>
        </div>
    ))

    const renderSections=sectionData.map((item, index)=>(
        <a className={`${classes.singleSection} ${activeSection===index && classes.activeSingleSection}`}
           key={index} onClick={()=>makeActiveSection(index, item.title)}>
            {activeSection ===index? <img className={classes.sectionIcon} src={item.activeIcon} alt={""}/>:
            <img className={classes.sectionIcon} src={item.icon} alt={""}/>}{item.title}</a>
    ))

    let handleOpenAnswers=(i, indx)=>{
        if(questionsData[i].questions[indx].showAnswer){
            questionsData[i].questions[indx].showAnswer =false
        }
        else{
            questionsData[i].questions[indx].showAnswer =true
        }
        setQuestionsData([...questionsData])
    }

   const renderQuestions=questionsData.map((item, index)=>(
       <div className={classes.whole} key={index} id={`section-${item.name}`}>
           <div className={classes.upDiv}>
               <div className={classes.upIcon}><img className={classes.upIconStyle} src={item.icon} alt={""}/></div>
               <div className={classes.upTitle}>{item.name}</div>
           </div>
           {item.questions.map((one, inx)=>(
               <div className={classes.questionAnswerDiv} key={inx}>
                   <div className={classes.questionDiv}>
                       <div className={classes.question}>{one.question}</div>
                       <div style={{cursor:"pointer"}} onClick={()=>handleOpenAnswers(index, inx)}>{
                           questionsData[index].questions[inx].showAnswer ?  <img src={Minus} alt={""}/>: <img src={Add} alt={""}/>}
                       </div>
                   </div>
                   { questionsData[index].questions[inx].showAnswer &&
                       <div className={classes.answer}>{one.answer}</div>
                   }
               </div>
           ))}
       </div>
   ));

    return(
        <div className={"container"}>
            <div className={classes.inside}>
                {renderBlocks}
            </div>
            <div className={classes.below}>
                <div className={classes.left}>
                    <div className={classes.searchDiv}>
                        <input placeholder="Search keyword.." className={classes.searchInput}/>
                        <div className={classes.searchIconDiv}>
                            <img src={BlogSearch} className={classes.searchIcon} alt=""/>
                        </div>
                    </div>
                    <div className={classes.section}>
                        {renderSections}
                    </div>
                </div>
                <div className={classes.right}>
                    <div className={classes.mainTitle}>Legal Terms</div>
                    {renderQuestions}
                </div>
            </div>
        </div>
    )
}

export default FAQ2;





