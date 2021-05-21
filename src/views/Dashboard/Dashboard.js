import React from "react";
import { Container } from 'react-bootstrap';
import Hero from '../Hero/Hero';
import "./Dashboard.css";
import AboutUs from '../../components/AboutUs/AboutUs';
import HeadlineCard from '../../components/HeadlineCard/HeadlineCard';
import InnolabCard from '../../components/InnolabCard/InnolabCard';

import dataObj from './strapi.json';

const Dashboard = () => {

    // To be JSON loaded
    /* const aboutContent = {
        id: "About us",
        header: "About us",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        tile: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    };
    // const sections = ['News', 'About us', 'Products', 'Services', 'Innovate', 'Contact us'];
    const sectionCards = [
        { id: "Products", header:"Products|& more|& more", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", source: "Someone said", notes: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        { id: "Services", header:"Services", text: "text2", source: "someone"},
        { id: "Innovate", header:"Innovate", text: "text3", source: "someone"},
    ];
    
    const subSectionCard = [
        { id: "a", header:"BlaBLa1", title: "titulo1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", cardType: "cardTypeLink"},
        { id: "b", header:"BlaBLa2",title: "titulo2", text: "text2", cardType: "cardTypeImage"},
        { id: "c", header:"BlaBLa3" ,title: "titulo3", text: "text3", cardType: "cardTypeVideo"}, 
    ];

    const subSectionTileCard = [
        { id: "a", title: "titulo1", image:"experience_one.svg", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", cardType: "cardTypeLink"},
        { id: "b", title: "titulo2", image:"experience_one.svg", text: "text2", cardType: "cardTypeImage"},
        { id: "c", title: "titulo3", image:"experience_one.svg", text: "text3", cardType: "cardTypeVideo"}, 
    ];

    const jsonObj = JSON.stringify(
        sectionCards.map(sectionItm => 
            ({...sectionItm,
                subSectionCards: subSectionCard.map(subSectionItm => 
                    ({...subSectionItm,
                        subSectionTileCards: subSectionTileCard,
                    }))
            }))
    );
    window.log(jsonObj);

    const dataObj = JSON.parse(jsonObj); */
    // window.log(dataObj);
    // const aboutContent = dataObj[0];

    return (
        <>         
        <Hero  />
        <Container className="dashboard text-white">
        {dataObj.map((section, sectionId) => (
            (section.innolab_website_cards.length > 0)
            ? (
            <Container id={`${section.SectionCategorie}`} key={`${section.id}`} className="section" fluid>
                <HeadlineCard cardInfo={section} cardId={`${sectionId}`}/>
                {section.innolab_website_cards.map((itm, cardIdx) => <InnolabCard cardInfo={itm}  cardId={`${sectionId}-${cardIdx}`} key={cardIdx}/>)}
            </Container>
            )
            : (
            <AboutUs cardInfo={section} cardId={`${section.SectionCategorie}`} key={`${section.id}`}/>
            )
        ))}
        </Container>
        </>
    );
};

export default Dashboard;
