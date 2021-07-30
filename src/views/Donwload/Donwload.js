import React, { useEffect, useState } from "react";
// import PropTypes from 'prop-types';
import { history } from "../../_helpers/history";
// import { Link } from 'react-router-dom';
import { getFileById } from '../../_services/commonService';

const Downloads = props => {
    const locParams = ((props || {}).match || {}).params;
    const [downloadProgress, setDownloadProgress] = useState(null);
    const [downloadSize, setDownloadSize] = useState(null);

    useEffect(() => {
        // window.log("Downloads View", locParams);
        if (locParams.id) {
            switchDownloadable(locParams.id);
        }else{
            history.push('/');
        }
    }, []);

    const switchDownloadable = async key => {
        setDownloadSize(0);
        setDownloadProgress(0);

        let fileId = null;
        switch (key) {
            case "daikiri.zip":
                fileId = 200;
                break;
            case "daikiri.msi":
                fileId = 201;
                break;
        
            default:
                // if (key.indexOf('byid') === 0) { fileId = key.substr(4) } // get by id for testing
                break;
        }

        if (fileId !== null) {
            const resp = await getFileById(fileId, onProgressUpdate).catch(err => err);

            window.log("switchDownloadable "+key, resp);

            if (resp.data) {
                setDownloadSize((resp.data.size/1000000).toFixed(2));
                setDownloadProgress(100);
                const blobObj = new Blob([resp.data], {type: resp.headers["content-type"]});

                if (window.navigator.msSaveBlob) {
                    window.navigator.msSaveBlob(blobObj, key);//ie10
                } else {
                    const downloadUrl = window.URL.createObjectURL(blobObj);
                    const link = document.createElement('a');
                    link.href = downloadUrl;
                    link.setAttribute('download', key);
                    document.body.appendChild(link);
                    link.click();
                    link.remove();
                    window.URL.revokeObjectURL(downloadUrl);
                }

                return false;
            }else{
                fileId = null
            }
        }

        // window.log("switchDownloadable Redirect ", fileId);
        history.push((fileId === null) ? '/not-found' : '/');
    }

    const onProgressUpdate = (ev) => {
        (downloadSize === null) && setDownloadSize((ev.total/1000000).toFixed(2));
        setDownloadProgress(Math.floor(ev.loaded / ev.total * 100));
    }

    return (
        <>
        <div className="container text-white w-50 h-100 pt-5">
            <div className="row">
                <div className="mx-auto h4">Downloading &quot;{locParams.id}&quot;</div>
            </div>
            <div className="row progress w-100">
                <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: `${downloadProgress}%`}} aria-valuenow={downloadProgress} aria-valuemin="0" aria-valuemax="100">{`${downloadProgress}%`}</div>
            </div>
            <div className="row">
                <div className="mx-auto">Total {downloadSize} Mb</div>
            </div>
            {/* <div className="row">
                <h3>back to <Link to="/" className="">Innolab</Link></h3>
            </div> */}
        </div>
        </>
    )
}

export default Downloads;