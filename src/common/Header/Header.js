import React from "react";
import PropTypes from "prop-types";
import Scrollchor from 'react-scrollchor'; // *** MODIFIED: node_modules/react-scrollchor/lib/scrollchor.js || "createClass(Scrollchor,..." componentWillReceiveProps and getDerivedStateFromProps removed
import Navbar from "react-bootstrap/Navbar";
import NavItem from "react-bootstrap/NavItem";
//import NewsList from "../NewsList/NewsList";
import "./Header.scss";
import { useMsal } from "@azure/msal-react";

// icons
import LogoutIcon from './../../components/LogoutIcon';

import { getSectionParents , getGlobals } from "../../_services/strapiService";

const Header = () => {
    const { instance } = useMsal();
    const [globalData, setGlobalData] = React.useState(null);
    const [sectionsData, setSectionsData] = React.useState(null);
    const [expanded, setExpanded] = React.useState(false);
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

    const toggleMenu = () => {
        setExpanded(prev => !prev);
    }

    const accessibleCloseMenu = (e) => {
        if (e.key === ' ' || e.key === 'Enter' ) {
            e.preventDefault();
            setExpanded(false);
        }
    }

    return (
        (globalData && sectionsData) &&
        <Navbar className="navbarTop navbar fixed-top" variant="dark" expand="md" expanded={expanded}>
            <div className="container">
            <Navbar.Brand><Scrollchor to="#" className="nav-link text-reset text-center">
                <h2 className="font-weight-bolder pt-2">{globalData.NavbarTitle}</h2>
            </Scrollchor></Navbar.Brand>
            <span className="top-toggle d-md-none text-white d-flex flex-column align-items-center" onClick={toggleMenu}>
                <Navbar.Toggle aria-controls="top-collapse" />
                <p className="m-0">Menu</p>
            </span>
            { expanded && <div className="backdrop" onClick={toggleMenu}></div>  }
            <Navbar.Collapse id="top-collapse" {... ( expanded && { role: "dialog" } ) } {...( expanded && {tabIndex: -1}) }>
                <div>
                    {/* <NavItem className="ml-auto"></NavItem> */}
                    <NavItem><Scrollchor to="#what-we-do" className="nav-link">What we do</Scrollchor></NavItem>
                    { sectionsData.map(item => (
                        <NavItem key={`${item.key}`}><Scrollchor to={`#${item.key}`} className="nav-link">{item.Title}</Scrollchor></NavItem>
                        ))}
                    <NavItem><Scrollchor to="#contact-us" className="nav-link">Contact us</Scrollchor></NavItem>
                    <NavItem className="d-md-none nav-link" onClick={toggleMenu}>CloseMenu</NavItem>
                </div>
                <div>
                    <NavItem className="nav-link" style={{textDecoration:"underline"}} as="a" onClick={doMsalLogout} href="#">Logout <LogoutIcon className={'d-md-none'} /></NavItem>
                </div>
                <NavItem 
                    className="close-menu d-md-none nav-link" 
                    onClick={toggleMenu}
                    onKeyDown={accessibleCloseMenu}
                    tabIndex={0}
                    as="a"
                    >
                        &times;
                </NavItem>
            </Navbar.Collapse>
            </div>
        </Navbar>
    )
};

Header.propTypes = {
    user: PropTypes.object,
};

export default Header;
