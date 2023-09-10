import React, {Suspense, useEffect, lazy} from 'react';
import {useNavigate} from "react-router-dom"
import HomeMain from "../components/HomePage/HomeMain/HomeMain";

function HomePage() {

    return (
        <>
            <Suspense fallback={null}>
                <HomeMain/>
            </Suspense>

        </>
    );
}

export default HomePage;