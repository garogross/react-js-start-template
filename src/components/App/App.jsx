import {Route, Routes} from 'react-router-dom';
import Head from '../global/Head/Head'

import Navbar from "../global/Navbar/Navbar";
import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";

import {
    aboutPagePath,
    homePagePath,
} from "../../router/path";

// const Footer = lazy(() => import("../global/Footer/Footer"));

function App() {

    return (
        <>
            <Head
                keyword={'web technologies, web development'}

                title={'Custom-built Websites and Mobile/Desktop Applications | KHG tec'}
                ogTitle={'Custom-built Websites and Mobile/Desktop Applications | KHG tec'}

                description={'We provide convenient UX/UI design, secure software development, effective SEO strategies, reliable technical support, and more. '}
                ogDescription={'We provide convenient UX/UI design, secure software development, effective SEO strategies, reliable technical support, and more. '}
            />
            <Navbar/>
            <Routes>
                <Route path={homePagePath} element={<HomePage/>}/>
                <Route path={aboutPagePath} element={<AboutPage/>}/>
                {/* neted route*/}
                {/*<Route path={blobPagePath} element={<Outlet/>}>*/}
                {/*    <Route index element={<BlogPage/>}/>*/}
                {/*    <Route path=':blogId' element={<Outlet/>}>*/}
                {/*        <Route index element={<IndBlogPage/>}/>*/}
                {/*        <Route path=':title' element={<IndBlogPage/>}/>*/}
                {/*    </Route>*/}
                {/*</Route>*/}
                {/*error*/}
                {/*<Route path={'*'} element={<ErrorPage/>}/>*/}
            </Routes>
            {/*<Suspense fallback={null}>*/}
            {/*    <Footer/>*/}
            {/*</Suspense>*/}
        </>
    );
}

export default App;