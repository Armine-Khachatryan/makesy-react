import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import classes from './Breadcrumb.module.css';

function handleClick(event, link) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
    if(link==="home"){
        window.location.href = `/`;
    }
    else{
        window.location.href = `/${link}`;
    }
}

export default function BasicBreadcrumbs({link, title}) {
    return (
        <div role="presentation" className={classes.breadCrumbStyle}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" className={classes.linkStyle}
                      // href={`/${link}`}
                      onClick={(e)=>handleClick(e,link)}>
                    {link.charAt(0).toUpperCase()+ link.slice(1)}
                </Link>
                <Typography className={classes.title} color="text.primary">{title}</Typography>
            </Breadcrumbs>
        </div>
    );
}


