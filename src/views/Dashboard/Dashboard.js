import React from "react";
import { Container } from 'react-bootstrap';
import Hero from '../../components/Hero/Hero';
import "./Dashboard.css";
import AboutUs from '../../components/AboutUs/AboutUs';
import HeadlineCard from '../../components/HeadlineCard/HeadlineCard';
import InnolabCard from '../../components/InnolabCard/InnolabCard';

import { getHero, getSectionSingle, getSectionParents  } from "../../_services/strapiService";

const Dashboard = () => {

    const [dataObj, setDataObj] = React.useState(null);

    React.useEffect(() => {
        // window.log("Dashboard props", props);
        const getInitialData = async () => {
            let dataTmp = {sections:[]};
            const ret0 = await getHero();
            if (ret0.data) {
                dataTmp = {...dataTmp, hero:ret0.data};
            }else{
                // window.log("load data FAILED");
            }
            const ret1 = await getSectionSingle(2);
            if (ret1.data) {
                dataTmp = {...dataTmp, sections:[...dataTmp.sections, ret1.data]};
            }else{
                // window.log("load data FAILED");
            }
            const ret2 = await getSectionParents();
            if (ret2.data) {
                dataTmp = {...dataTmp, sections:[...dataTmp.sections, ...ret2.data]};
            }else{
                // window.log("load data FAILED");
            }
            setDataObj(dataTmp);
            // window.log("Dashboard DATA:", dataTmp);
        }
        
        getInitialData();
  
    }, []);

    return (
        (dataObj) &&
        <>
        <Hero data={dataObj.hero}/>
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
