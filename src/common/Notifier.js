/**
 * TODO: this component should be restructured to use bootstrap components
 */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { close } from "../_store/actions/notifierActions";

const Notifier = () => {
    const dispatch = useDispatch();
    const { open, title, message, severity } = useSelector(state => state.notifier);

    const handleClose = () => {
        dispatch(close());
    };
    // const handleExited = () => {
    //     dispatch(reset());
    // };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            BackdropProps={{ classes: { root: classes.root } }}
        >
            <DialogTitle id="alert-dialog-title" className={classes.headline}>
                {severity === 'success' && <Icon className={classes.success}>verified</Icon>}
                {severity === 'warning' && <NewReleasesIcon className={classes.warning} />}
                {severity === 'error' && <ReportIcon className={classes.error} />}
                <span>{title}</span>
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {message}
                </DialogContentText>
            </DialogContent>
            <DialogActions classes={{ root: classes.DialogActions }}>
                <Button onClick={handleClose} color="primary" autoFocus variant="outlined">OK</Button>
            </DialogActions>
        </Dialog>
    );
};

export default Notifier;