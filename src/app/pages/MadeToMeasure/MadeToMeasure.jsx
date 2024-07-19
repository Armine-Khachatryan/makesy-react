import React from 'react';
import {MadeToMeasure1, MadeToMeasure2,MadeToMeasure3, MadeToMeasure4,MadeToMeasure5,MadeToMeasure6,
    MadeToMeasure7,MadeToMeasure8} from '../../components/ServicesComponents/index';
import {sliderData, artisansData, workshopData, dataIcons} from '../../components/ServicesComponents/ServiceData';
import Video1 from '../../assets/videos/video1.mp4';





const MadeToMeasure =()=>{


    return(
        <>
            <MadeToMeasure1/>
            <MadeToMeasure2/>
            <MadeToMeasure3 dataIcons={dataIcons} subTitle={"In details"} title={"Makesy helps in all aspects and details"}/>
            <MadeToMeasure4/>
            <MadeToMeasure5 subTitle={"Categories"} title={"Production"} workshopTitle={"Workshops"}
                            artisansTitle={"Artisans"} listWorkshop={["Lower Cost", "More consistent",
            "Less Time"]} workshopText={"Choose between the latest Garments Machines\n" +
                "                                to Produce your Garments"}
                            artisansText={"Choose between a lot of Talented Makesy Artisans to work on your Garment"}

                            listArtisans={["Unique Pieces", "Eco Friendly", "Unique Pieces"]}
                artisansData={artisansData} workshopData={workshopData}/>
            <MadeToMeasure6 sliderData={sliderData} mainTitle={"Success Stories"} mainSubTitle={"Reviews"}/>
            <MadeToMeasure7 video={Video1} subTitle={"Videos"} mainTitle={"Curious about how it happens?"}
                            text={"Watch this Video"}/>
            <MadeToMeasure8 title={"Join the revolution on fast fashion and order from artisan near you"}/>
        </>
    )
}


export default MadeToMeasure;
