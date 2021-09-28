import React from 'react';
import PropTypes from 'prop-types';
import './CardMediaContainer.css';
import { RouterLink, parseImgSrc } from '../../common/RenderMarkdown';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const CardMediaContainer = (props) => {
    const {mediaInfo} = props;
    // THIS READS THE FIRST 2 ITEMS ON mediaInfo ARRAY [slice(0,2)]

    // window.log("cardMediaContainer", mediaInfo);

    return (
        (mediaInfo && mediaInfo.length > 0) && 

            <Container fluid="xs" className="list-group list-group-horizontal">
                {mediaInfo.slice(0,2).map((mediaItm, idx) => (
                
                    <Row className="list-group-item media rounded bg-dark m-1 p-0 overflow-hidden" key={idx}>
                    
                            <Col  xs={12} md={4} >
                                <RenderMediaTag mediaItm={mediaItm}/>
                            </Col>
                        
                        {/* <div className="row">
                            <div className="col text-right">
                            <   span className="badge badge-secondary">ENG</span>
                            </div>
                        </div> */}
                    </Row>
                
                ))}
            </Container>
      

    )
}

CardMediaContainer.propTypes = {
    mediaInfo: PropTypes.any.isRequired,
}

export default CardMediaContainer;


const RenderMediaTag = (props) => {
    const {mediaItm} = props;
    const mediaBase = <img src={parseImgSrc(mediaItm.url)} alt={mediaItm.alternativeText} width="256px" height="144px"/>
    let mediaProps = {};
    if (RegExp(/^(https?:\/\/|\/)[^\s$]+/i).test(mediaItm.caption)) { // test for any links starting with / or http:// or https://
        mediaProps = {...mediaProps, href:mediaItm.caption, target:"_blank", rel:"noopener noreferrer"}
    }

    return (mediaProps.href !== undefined) ? <RouterLink {...mediaProps}>{mediaBase}</RouterLink> : <>{mediaBase}</>
}
RenderMediaTag.propTypes = {
    mediaItm: PropTypes.any.isRequired,
}