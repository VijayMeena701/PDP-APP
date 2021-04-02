import React from 'react'
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Dialog, DialogContent, DialogTitle, IconButton, TextField, Typography, Grid, DialogActions, Button, LinearProgress } from '@material-ui/core';
import { CancelRounded } from '@material-ui/icons';
import { connect } from 'react-redux'

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
    const { title, openPopup, setOpenPopup, handleSubmit, classes, cardData, setCardData, loading, isDay } = props;
    const handleClose = () => {
        setOpenPopup(false);
    }
    const handleChange = (e) => {
        setCardData({ ...cardData, [e.target.name]: e.target.value })
    }
    const time = ["Early Morning", "Morning", "AfterNoon", "Evening", "Night", "Late Night"];
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
                {/* <form onSubmit={(e) => handleSubmit(e)}>
                    <TextField placeholder="Event Title" name="title" defaultValue="" autoFocus required onChange={(e) => handleChange(e)} fullWidth variant="standard"></TextField>
                    <Grid container justify="center">
                        <Grid item xs={12}>
                            <TextField type="date" name="date" size="medium" defaultValue={cardData.date} disabled fullWidth variant="standard"></TextField>
                            <TextField type="time" name="time" size="medium" defaultValue={cardData.time} onChange={(e) => handleChange(e)} autoFocus fullWidth variant="standard"></TextField>
                            <TextField type="text" name="description" size="medium" placeholder="Add a little description about the event" onChange={(e) => handleChange(e)} fullWidth multiline rows={3} rowsMax={3} variant="standard"></TextField>
                        </Grid>
                    </Grid>
                </form> */}
                <Grid container spacing={1}>
                    <Grid container justify="center" item xs={12}>
                        <Grid>{props.user.authenticated && props.UI.loading === false ? props.data.events[isDay] ? props.data.events[isDay].time.map((data, index) => {
                            return <Grid spacing={2} style={{ border: '1px solid' }} container item xs={12} key={index}><Grid item xs={4}>{time[index]}</Grid><Grid container style={{ border: '1px dotted' }} item xs={8}><Grid item xs={12}>{data.firstTask}</Grid><Grid item xs={12}>{data.secondTask}</Grid></Grid></Grid>
                        }) : null : null}</Grid>
                    </Grid>
                </Grid>
                <br></br>
                {loading && (
                    <LinearProgress />
                )}
            </DialogContent>
            <DialogActions>
                <Button startIcon={<CancelRounded />} disabled={loading} onClick={() => handleClose()} color="secondary" >Cancel</Button>
                <Button disabled={loading} onClick={(e) => handleSubmit(e)} color="primary" variant="contained">Save</Button>
            </DialogActions>
        </Dialog >
    )
}

Popup.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    data: state.data,
    user: state.user,
    UI: state.UI
})

export default connect(mapStateToProps, {})(withStyles(styles)(Popup));

