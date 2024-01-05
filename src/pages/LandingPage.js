import Content from "../sections/landingpage/Content";
import Footer from "../sections/landingpage/Footer";
import SideBar from "../sections/landingpage/SideBar";
import '../styles/pages/LandingPage.scss'

const LandingPage = () => {
    return (
        <div className='landingpage'>
            <SideBar />
            <div className='main-content'>
                <Content />
                <Footer />
            </div>
        </div>
    )
}

export default LandingPage;