import React from 'react'
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Dialog, DialogContent, DialogTitle, IconButton, TextField, Typography, Grid } from '@material-ui/core';
import { CancelRounded } from '@material-ui/icons';

const styles = (theme) => ({
    root: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5),
    },
    titleContainer: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
    }
})
function Popup(props) {
    const { title, children, openPopup, setOpenPopup, day, classes } = props;
    const handleClose = () => {
        setOpenPopup(false);
    }
    return (
        <Dialog classes={{ paper: classes.root }} open={openPopup} maxWidth='md' onClose={() => handleClose()}>
            <DialogTitle>
                <div className={classes.titleContainer}>
                    <Typography>{title}</Typography>
                    <IconButton onClick={() => handleClose()}>
                        <CancelRounded />
                    </IconButton></div>
            </DialogTitle>
            <DialogContent>
                <TextField placeholder="Add Title" autoFocus fullWidth variant="standard"></TextField>
                <Grid container justify="">
                    <Grid item xs={12}>
                        <TextField type="date" defaultValue={day} autoFocus fullWidth variant="standard"></TextField>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    )
}

Popup.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Popup);

