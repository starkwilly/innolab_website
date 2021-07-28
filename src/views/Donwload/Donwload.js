import React, { useEffect} from "react";
import PropTypes from 'prop-types';
import { history } from "../../_helpers/history";
import { getDaikiriZip, getDaikiriMsi } from '../../_services/commonService';

const Downloads = props => {
    const { match } = props;
    const locParams = ((props || {}).match || {}).params;

    useEffect(() => {
        console.log("Downloads View", match, locParams);
        if (locParams.id) {
            switchDownloadable(locParams.id);
        }else{
            history.push('/');
        }
    }, []);

    const switchDownloadable = async key => {
        let resp = null;
        switch (key) {
            case "timeout":
                resp = await new Promise(r => setTimeout(r, 1000));
                break;
            case "zip_daikiri":
                resp = await getDaikiriZip();
                break;
            case "msi_daikiri":
                resp = await getDaikiriMsi();
                break;
        
            default:
                break;
        }
        console.log("Downloads resp: ", resp);
        history.push((resp === null) ? '/not-found' : '/');
    }

    return (
        <div
        className="d-flex justify-content-center align-items-center h-100 text-white"
        style={{ minHeight: "100vh" }}
        >Downloading &quot;{locParams.id}&quot;...</div>
    )
}

Downloads.propTypes = {
    match: PropTypes.any
}

export default Downloads;