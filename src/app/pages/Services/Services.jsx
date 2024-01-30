import React from 'react';
import {ServicesComponent1} from '../../components/ServicesComponents/index';
import {Outlet} from "react-router-dom";


const Services = () => {


    return (
        <>
            <ServicesComponent1/>
            <Outlet />
        </>
    )
}

export default Services;