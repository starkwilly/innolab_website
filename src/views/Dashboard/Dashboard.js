import React from "react";
import { Container } from 'react-bootstrap';
import Hero from '../../components/Hero/Hero';
import "./Dashboard.css";
import AboutUs from '../../components/AboutUs/AboutUs';
import HeadlineCard from '../../components/HeadlineCard/HeadlineCard';
import InnolabCard from '../../components/InnolabCard/InnolabCard';

import { getGlobals, getHero, getSectionSingle, getSectionParents  } from "../../_services/strapiService";

import ReactGA from 'react-ga';

import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin } from '@microsoft/applicationinsights-react-js';
import { createBrowserHistory } from "history";



const Dashboard = () => {

    const [dataObj, setDataObj] = React.useState(null);

    const [globalData, setGlobalData] = React.useState(null);

    React.useEffect(() => {
         ///// Google analytics


         
        ReactGA.initialize('277828575');

        ReactGA.pageview(window.location.pathname + window.location.search);
        
        ///ApplicationInsights
        const browserHistory = createBrowserHistory({ basename: '' });
        var reactPlugin = new ReactPlugin();
        var appInsights = new ApplicationInsights({
            config: {
                instrumentationKey: '0254530d-94c8-40d9-840e-30caecae0ddd',
                extensions: [reactPlugin],
                extensionConfig: {
                [reactPlugin.identifier]: { history: browserHistory }
                }
            }
        });
        appInsights.loadAppInsights();



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

            const ret = await getGlobals();
            if (ret.data) {
                setGlobalData(ret.data);
            } else {
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
                    <HeadlineCard cardInfo={section} cardId={`${sectionId}`} />
                    {section.innolab_section_children.map((itm, cardIdx) => <InnolabCard cardInfo={itm}  cardId={`${sectionId}-${cardIdx}`} key={cardIdx} bgImage={globalData.ImageBg.url}/>)}
                </Container>
                )
                : (
                <AboutUs cardInfo={section} cardId={`${section.key}`} key={`${section.id}`} bgImage={globalData.ImageBg.url} />
                )
            ))}
        </Container>
        </>
    );
};

export default Dashboard;
