import React from "react";
import { Container } from 'react-bootstrap';
import Hero from '../Hero/Hero';
import "./Dashboard.css";
import AboutUs from '../../components/AboutUs/AboutUs';
import HeadlineCard from '../../components/HeadlineCard/HeadlineCard';
import InnolabCard from '../../components/InnolabCard/InnolabCard';
import baseApi from '../../_helpers/baseApi';
//import { Link } from 'react-router-dom';

import { getSectionSingle, getSectionParents ,getGlobalsJson } from "../../_services/strapiService";
//import JsFileDownloader from 'js-file-downloader';

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
fetch(baseApi +'/downloadables/test.zip', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/zip',
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
      `dakiri.zip`,
    );

    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    link.parentNode.removeChild(link);
  });





  /////////////////






  //////////////////////


        
        getInitialData();

        getGlobalsJson();
  


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
