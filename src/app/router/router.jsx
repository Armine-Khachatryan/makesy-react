import React from "react";
import {
    Navigate,
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import { HOME, SERVICES, APP_FEATURES, NOT_FOUND_PAGE } from "./route-path";
import Layout from "../components/Layout/Layout";
import {Home, Services, MadeToMeasure,ReadyToWear,HauteCourture} from "../pages";



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
        </Route>
    )
);

export default router;

