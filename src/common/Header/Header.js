import React from "react";
import PropTypes from "prop-types";
import Scrollchor from 'react-scrollchor'; // *** MODIFIED: node_modules/react-scrollchor/lib/scrollchor.js || "createClass(Scrollchor,..." componentWillReceiveProps and getDerivedStateFromProps removed
import Navbar from "react-bootstrap/Navbar";
import NavItem from "react-bootstrap/NavItem";
//import NewsList from "../NewsList/NewsList";
import "./Header.scss";
import { useMsal } from "@azure/msal-react";

import { getSectionParents , getGlobals } from "../../_services/strapiService";

const Header = () => {
    const { instance } = useMsal();
    const [globalData, setGlobalData] = React.useState(null);
    const [sectionsData, setSectionsData] = React.useState(null);
    // PENDING USE STORE
    // const isDataLoading = useSelector((state) => state);

    React.useEffect(() => {
        const getInitialData = async () => {
            const ret = await getGlobals();
            if (ret.data) {
                setGlobalData(ret.data);
            }else{
                // window.log("load data FAILED");
            }
            const ret1 = await getSectionParents();
            if (ret1.data) {
                setSectionsData(ret1.data);
            }else{
                // window.log("load data FAILED");
            }
        }
        getInitialData();
    }, []);

    function doMsalLogout(e) {
        e.preventDefault();
        const currentAccount = instance.getActiveAccount();
        // window.log('HEADER MSAL: doMsalLogout > ', currentAccount);
        instance.logoutRedirect({
            account: currentAccount,
            postLogoutRedirectUri: null,
        });
    }

    return (
        (globalData && sectionsData) &&
        <Navbar className="navbarTop navbar fixed-top" variant="dark">
            <Navbar.Brand><Scrollchor to="#" className="nav-link text-reset"><h2 className="font-weight-bolder pt-2">{globalData.NavbarTitle}</h2></Scrollchor></Navbar.Brand>
            
            <NavItem className="ml-auto"></NavItem>
            <NavItem><Scrollchor to="#what-we-do" className="nav-link">What we do</Scrollchor></NavItem>
            { sectionsData.map(item => (
                <NavItem key={`${item.key}`}><Scrollchor to={`#${item.key}`} className="nav-link">{item.Title}</Scrollchor></NavItem>
            ))}
            <NavItem><Scrollchor to="#contact-us" className="nav-link">Contact us</Scrollchor></NavItem>
            <NavItem className="nav-link" style={{textDecoration:"underline"}} as="a" onClick={doMsalLogout} href="#">Logout</NavItem>
        </Navbar>
    )
};

Header.propTypes = {
    user: PropTypes.object,
};

export default Header;
