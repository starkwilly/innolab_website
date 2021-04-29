import React, { lazy, Suspense } from "react";
import { Container } from 'react-bootstrap'
import Hero from '../Hero/Hero'
import "./Dashboard.css"
import InnolabCard from '../../components/InnolabCard/InnolabCard';

const Dashboard = () => {
    // TODO: get the gdpr value from the correct source
    const gdprDate = localStorage.getItem("gdprDate");
    const GdprDialog =
        gdprDate === null
            ? lazy(() => import("../../common/GdprDialog"))
            : null;

    // To be JSON loaded
    const sections = ['News', 'About us', 'Products', 'Services', 'Innovate', 'Contact us'];
    // To be JSON loaded
    const cardInfo = [
        { id: "a", header:"BlaBLa1", title: "titulo1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", cardType: "cardTypeLink"},
        { id: "b", header:"BlaBLa2",title: "titulo2", text: "text2", cardType: "cardTypeImage"},
        { id: "c", header:"BlaBLa3" ,title: "titulo3", text: "text3", cardType: "cardTypeVideo"}    
    ];

    return (
        <>         
          <Hero  />
          <Container className="dashboard text-white">
              {sections.map((sectionName, sectionId) => (
                <Container id={sectionName} key={sectionName} className="section" fluid>
                    <h2 className="text-uppercase pb-3">{sectionName}</h2>
                    {cardInfo.map((itm, cardIdx) => <InnolabCard cardId={sectionId+itm.id} cardInfo={itm} key={cardIdx}/>)}
                </Container>  
              ))}
          </Container>
        <Suspense fallback={<></>}>{GdprDialog && <GdprDialog />}</Suspense>
        </>
    );
};

export default Dashboard;
