import React from "react";
import { Container } from 'react-bootstrap';
import Hero from '../Hero/Hero';
import "./Dashboard.css";
import AboutUs from '../../components/AboutUs/AboutUs';
import HeadlineCard from '../../components/HeadlineCard/HeadlineCard';
import InnolabCard from '../../components/InnolabCard/InnolabCard';
//import { Link } from 'react-router-dom';

import { getSectionSingle, getSectionParents } from "../../_services/strapiService";

// import dataObj from './strapi.json';

const Dashboard = () => {

    const [dataObj, setDataObj] = React.useState(null);
    // PENDING USE STORE
    // const isDataLoading = useSelector((state) => state);

    React.useEffect(() => {
        const getInitialData = async () => {
            let dataTmp = {sections:[]};
            const ret = await getSectionSingle(2);
            if (ret.data) {
                dataTmp = {...dataTmp, sections:[...dataTmp.sections, ret.data]};
            }else{
                // window.log("load data FAILED");
            }
            const ret1 = await getSectionParents();
            if (ret1.data) {
                dataTmp = {...dataTmp, sections:[...dataTmp.sections, ...ret1.data]};
            }else{
                // window.log("load data FAILED");
            }
            setDataObj(dataTmp);
            // window.log("Dashboard DATA:", dataTmp);
        }
        getInitialData();
        fetch('https://innolab-stage.accenture.com/innolab-dev-api/strapiResponses/globals.json')
        .then(response => response.json())
        .then(data => console.log("fetch response" + data));

        fetch('https://innolab-stage.accenture.com/innolab-dev-api/strapiResponses/globals.json', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then((response) => response.blob())
          .then((blob) => {
            // Create blob link to download
            const url = window.URL.createObjectURL(
              new Blob([blob]),
            );
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute(
              'download',
              `FileName.json`,
            );
        
            // Append to html link element page
            document.body.appendChild(link);
        
            // Start download
            link.click();
        
            // Clean up and remove the link
            link.parentNode.removeChild(link);
          });


    }, []);

    return (
        (dataObj) &&
        <>  
        
        <Hero  />
        <div className="stars"></div>
        <div className="stars2"></div>
        
        <Container className="dashboard text-white">
       

        {dataObj.sections.map((section, sectionId) => (
            (section.innolab_section_children && section.innolab_section_children.length > 0)
            ? (
            <Container id={`${section.key}`} key={`${section.key}`} className="section" fluid>
                <HeadlineCard cardInfo={section} cardId={`${sectionId}`}/>
                {section.innolab_section_children.map((itm, cardIdx) => <InnolabCard cardInfo={itm}  cardId={`${sectionId}-${cardIdx}`} key={cardIdx}/>)}
            </Container>
            )
            : (
            <AboutUs cardInfo={section} cardId={`${section.key}`} key={`${section.id}`}/>
            )
        ))}
       
        </Container>
       
        </>
    );
};

export default Dashboard;
