import React from 'react';
import PropTypes from 'prop-types';
import './CardMediaContainer.css';

const CardMediaContainer = (props) => {
    const {mediaInfo} = props;
    // THIS READS THE FIRST 2 ITEMS ON mediaInfo ARRAY [slice(0,2)]

    // window.log("cardMediaContainer", mediaInfo);

    return (
        (mediaInfo && mediaInfo.length > 0) && 
        <ul className="list-group list-group-horizontal">
            {mediaInfo.slice(0,2).map((mediaItm, idx) => (
                <li className="list-group-item media rounded bg-dark m-1 p-0 overflow-hidden" key={idx}>
                    <div className="row">
                        <div className="col">
                            <RenderMediaTag mediaItm={mediaItm}/>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col text-right">
                        <   span className="badge badge-secondary">ENG</span>
                        </div>
                    </div> */}
                </li>
            ))}
        </ul>
    )
}

CardMediaContainer.propTypes = {
    mediaInfo: PropTypes.any.isRequired,
}

export default CardMediaContainer;


const RenderMediaTag = (props) => {
    const {mediaItm} = props;
    const mediaBase = <img src={`${process.env.REACT_APP_API}${mediaItm.url}`} alt={mediaItm.alternativeText} width="256px" height="144px"/>
    let mediaProps = {};
    if (RegExp(/^(https?:\/\/|\/)[^\s$]+/i).test(mediaItm.caption)) { // test for any links starting with / or http:// or https://
        mediaProps = {...mediaProps, href:mediaItm.caption, target:"_blank"}
    }

    return (mediaProps.href !== undefined) ? <a {...mediaProps}>{mediaBase}</a> : <>{mediaBase}</>
}
RenderMediaTag.propTypes = {
    mediaItm: PropTypes.any.isRequired,
}