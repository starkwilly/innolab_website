import React from "react";
import { Container } from 'react-bootstrap';
import Hero from '../Hero/Hero';
import "./Dashboard.css";
import AboutUs from '../../components/AboutUs/AboutUs';
import HeadlineCard from '../../components/HeadlineCard/HeadlineCard';
import InnolabCard from '../../components/InnolabCard/InnolabCard';

const Dashboard = () => {
    // TODO: get the gdpr value from the correct source
    /* const gdprDate = localStorage.getItem("gdprDate");
    const GdprDialog =
        gdprDate === null
            ? lazy(() => import("../../common/GdprDialog"))
            : null; */

    // To be JSON loaded
    const aboutContent = {
        id: "About us",
        header: "About us",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        tile: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    };
    // const sections = ['News', 'About us', 'Products', 'Services', 'Innovate', 'Contact us'];
    const sectionCards = [
        { id: "Products", header:"Products|& more|& more|& more", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", source: "Someone said", notes: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        { id: "Services", header:"Services", text: "text2", source: "cardTypeImage"},
        { id: "Innovate", header:"Innovate", text: "text3", source: "cardTypeVideo"},
    ];
    // To be JSON loaded
    const cardInfo = [
        { id: "a", header:"BlaBLa1", title: "titulo1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", cardType: "cardTypeLink"},
        { id: "b", header:"BlaBLa2",title: "titulo2", text: "text2", cardType: "cardTypeImage"},
        { id: "c", header:"BlaBLa3" ,title: "titulo3", text: "text3", cardType: "cardTypeVideo"}, 
    ];

    return (
        <>         
          <Hero  />
          <AboutUs cardInfo={aboutContent} cardId={aboutContent.id}/>
          <Container className="dashboard text-white">
              {sectionCards.map((section, sectionId) => (
                <Container id={section.id} key={section.id} className="section" fluid>
                    <HeadlineCard cardInfo={section} cardId={section.id}/>
                    {cardInfo.map((itm, cardIdx) => <InnolabCard cardId={sectionId+itm.id} cardInfo={itm} key={cardIdx}/>)}
                </Container>  
              ))}
          </Container>
        {/* <Suspense fallback={<></>}>{GdprDialog && <GdprDialog />}</Suspense> */}
        </>
    );
};

export default Dashboard;
