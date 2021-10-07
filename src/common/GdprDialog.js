import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

import { acceptGdpr } from '../_services/gdprService';

const GdprDialog = (props) => {
    const {open, setOpen} = props;

    const confirmHandler = () => {
        acceptGdpr();
        setOpen(false);
    };

    return (
        <Modal className="gdpr-modal" show={open} backdrop="static" keyboard={false} centered size="lg">
            <Modal.Body>
                <h2>INFORMATION CONFIDENTIALITY DISCLAIMER</h2>
                <p>
                    Please be aware that any personal data that you and others provide through
                    this tool may be processed by Accenture.
                </p>
                <p>
                    The protection of your personal data is very important to Accenture.
                    Accenture is committed to keeping your personal data secure, and
                    processing it in accordance with, applicable data protection laws and our
                    internal policies, including <a href="https://policies.accenture.com/policy/0090" target="_blank" rel="noopener noreferrer" className="policy">Accenture&apos;s Global Data Privacy Policy 0090.</a>
                </p>
                <p>
                    Your decision to provide your personal data to Accenture is voluntary.
                    However, given that this tool requires personal data to function, you will
                    not be able to use this tool if you do not provide your personal data.
                </p>
                <p>
                    Before providing any personal data through this tool, Accenture invites
                    you to carefully read its privacy statement, which includes important
                    information on why and how Accenture is processing your personal data.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={confirmHandler}>I accept</Button>
            </Modal.Footer>
        </Modal>
    );
}

GdprDialog.propTypes = {
    confirmHandler: PropTypes.func,
    open: PropTypes.bool,
    setOpen: PropTypes.func,
};

export default GdprDialog;