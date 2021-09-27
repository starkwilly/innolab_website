import React from 'react';
import PropTypes from 'prop-types';
import Container from "react-bootstrap/Container";
import { getGlobals } from "../../_services/strapiService";
import { parseImgSrc } from '../../common/RenderMarkdown';

const Minimal = props => {
    const { children } = props;
    const [globalData, setGlobalData] = React.useState(null);

    React.useEffect(() => {
        const getInitialData = async () => {
            const ret = await getGlobals();
            if (ret.data) {
                setGlobalData(ret.data);
            } else {
                // window.log("load data FAILED");
            }
           // getGlobalsJson();
        };
        getInitialData();
    }, []);

    return (
        globalData && (
            <>
                <Container
                    className="mainContainer p-0"
                    style={
                        globalData.ImageBg
                            ? {
                                backgroundImage: `url(${parseImgSrc(globalData.ImageBg.url)}`,
                                minHeight: '100%'
                            }
                            : {}
                    }
                    data-content={parseImgSrc(globalData.ImageBg.url)}
                >
                    {children}
                </Container>
            </>
        )
    );
};

Minimal.propTypes = {
    children: PropTypes.node,
};

export default Minimal;