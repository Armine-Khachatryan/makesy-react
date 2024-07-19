import React from 'react'
import Logo from '../../assets/images/Logo.png';
import Flag from '../../assets/images/Flag.svg';
import {NavLink, Outlet, ScrollRestoration} from "react-router-dom";
import {HOME, SERVICES, APP_FEATURES, PRICING, HOW_IT_WORKS, BLOG} from "../../router/route-path";
import Button from "../../ui/button/Button";
import Footer from "../Footer/Footer";
import classes from './Layout.module.css';

const Layout = () => {


    let getKey = React.useCallback(
        (location, matches) => {
            let match = matches.find((m) => (m.handle)?.scrollMode);
            if ((match?.handle)?.scrollMode === "pathname") {
                return location.pathname;
            }
            return location.key;
        },
        []
    );

    return (
        <>
            <header>
                <div className={"container flexStyle"}>
                    <div className={classes.left}>
                        <NavLink
                            className={({ isActive}) =>
                               isActive ? "active" : "linkStyle"
                            }
                            // className="linkStyle"
                            style={{marginRight:"60px"}} to={HOME}><img src={Logo} alt={""}/></NavLink>
                        <NavLink
                            className={({ isActive}) =>
                                isActive ? "active" : "linkStyle"
                            }
                            // className="linkStyle"
                            to={SERVICES}>Services</NavLink>
                        <NavLink
                            className={({ isActive}) =>
                                isActive ? "active" : "linkStyle"
                            }
                            // className="linkStyle"
                            to={APP_FEATURES}>App Features</NavLink>
                        <NavLink
                            className={({ isActive}) =>
                                isActive ? "active" : "linkStyle"
                            }
                            // className="linkStyle"
                            to={PRICING}>Pricing</NavLink>
                        <NavLink
                            className={({ isActive}) =>
                                isActive ? "active" : "linkStyle"
                            }
                            // className="linkStyle"
                            to={HOW_IT_WORKS}>How It works</NavLink>
                        <NavLink
                            className={({ isActive}) =>
                                isActive ? "active" : "linkStyle"
                            }
                            // className="linkStyle"
                            to={BLOG}>Blog</NavLink>
                        <div className={classes.language}>عربي
                            <img className={classes.icon} src={Flag} alt={""}/></div>
                    </div>
                    <Button>Download App</Button>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <Footer/>
            <ScrollRestoration getKey={getKey} />
        </>
    );
}



export default Layout;