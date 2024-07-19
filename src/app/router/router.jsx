import React from "react";
import {
    Navigate,
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import { HOME, SERVICES, BLOG, BLOG_ARTICLE_ID,BLOG_WEBINAR_ID, BLOG_REPORT_ID, TERMS_AND_CONDITIONS,FAQ,ABOUT_US,
    BLOG_CASE_STUDIES_ID, APP_FEATURES, NOT_FOUND_PAGE } from "./route-path";
import Layout from "../components/Layout/Layout";
import {Home, Services, MadeToMeasure,ReadyToWear,HauteCourture, Blog, BlogArticle, BlogWebinar, BlogReport, FAQPage,
    TermsAndConditions, AboutUs, BlogCaseStudies, AppFeatures} from "../pages";



const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={HOME} element={<Layout />}>
            <Route index element={<Home />} />
            <Route
                path={SERVICES}
                element={<Services/>}
                handle={{ scrollMode: "pathname"}}
            >
                <Route index  element={<Navigate to="made-to-measure" replace />} />
                <Route path="made-to-measure" element={<MadeToMeasure/>} />
                <Route path="ready-to-wear" element={<ReadyToWear/>} />
                <Route path="haute-courture" element={<HauteCourture/>} />
            </Route>
            <Route
                path={BLOG}
                element={<Blog/>}
                handle={{ scrollMode: "pathname"}}
            />
            <Route
                path={BLOG_ARTICLE_ID}
                element={<BlogArticle/>}
                handle={{ scrollMode: "pathname"}}
            />
            <Route
                path={BLOG_WEBINAR_ID}
                element={<BlogWebinar/>}
                handle={{ scrollMode: "pathname"}}
            />
            <Route
                path={BLOG_REPORT_ID}
                element={<BlogReport/>}
                handle={{ scrollMode: "pathname"}}
            />
            <Route
                path={BLOG_CASE_STUDIES_ID}
                element={<BlogCaseStudies/>}
                handle={{ scrollMode: "pathname"}}
            />
            <Route
                path={FAQ}
                element={<FAQPage/>}
                handle={{ scrollMode: "pathname"}}
            />
            <Route
                path={TERMS_AND_CONDITIONS}
                element={<TermsAndConditions/>}
                handle={{ scrollMode: "pathname"}}
            />
            <Route
                path={ABOUT_US}
                element={<AboutUs/>}
                handle={{ scrollMode: "pathname"}}
            />
            <Route
                path={APP_FEATURES}
                element={<AppFeatures/>}
                handle={{ scrollMode: "pathname"}}
            />
        </Route>
    )
);

export default router;

