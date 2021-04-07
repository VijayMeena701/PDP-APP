import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import { Container, Grid, TextField, Typography } from '@material-ui/core';
import moment from 'moment';

const styles = (theme) => ({
    root: {
        width: '100%',
        height: '80vh',
        marginTop: '2em'
    }
})

function Today(props) {
    const { classes, user, data, UI } = props;
    const [todayData, setTodayData] = useState(null);
    let newToday;
    useEffect(() => {
        newToday = props.data.events.filter((day) => day.id === `${moment().clone().format("YYYY-MM-DD 00:00:00")}`);
        setTodayData(newToday[0].time);
    }, [])
    return (
        <main className={classes.root}>
            <Container maxWidth="lg">
                <Grid className={classes.containerClass} container spacing={2} justify="space-around">
                    <Grid container style={{ border: '1px solid', height: '100%' }} item xs={12} sm={3}>
                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                            <Typography style={{ fontWeight: 'bold', fontSize: '2.5em' }} variant="h4" >{moment().clone().format("D MMMM YYYY")}</Typography>
                        </Grid>
                        <Grid container item xs={12} style={{ textAlign: 'center' }}>
                            {/* <Typography variant="body1" >{moment().clone().format("D MMMM YYYY")}</Typography> */}
                            <Grid item xs={12}>
                                <Typography>SatisFaction Ratings for Today's Schedule </Typography>
                                <Grid container>
                                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
                                        <Typography>{"Early Morning"}</Typography>
                                        <TextField type="number" size="small" InputProps={{ inputProps: { min: 0, max: 5 } }} variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
                                        <Typography>{"Morning"}</Typography>
                                        <TextField type="number" size="small" InputProps={{ inputProps: { min: 0, max: 5 } }} variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
                                        <Typography>{"Afternoon"}</Typography>
                                        <TextField type="number" size="small" InputProps={{ inputProps: { min: 0, max: 5 } }} variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
                                        <Typography>{"Evening"}</Typography>
                                        <TextField type="number" size="small" InputProps={{ inputProps: { min: 0, max: 5 } }} variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
                                        <Typography>{"Night"}</Typography>
                                        <TextField type="number" size="small" InputProps={{ inputProps: { min: 0, max: 5 } }} variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
                                        <Typography>{"Late Night"}</Typography>
                                        <TextField type="number" size="small" InputProps={{ inputProps: { min: 0, max: 5 } }} variant="outlined" />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid style={{ border: '1px solid' }} container item xs={12} sm={8}>
                        <Grid container item xs={12} style={{ textAlign: 'center', gap: '10px' }}>
                            {todayData !== null ? todayData.map((time, index) => (
                                <Grid container style={{ border: '1px solid' }} item xs={12} key={index}>
                                    <Typography style={{ textAlign: 'center', width: '100%', background: '#ACC8E5' }}>{time.time}</Typography>
                                    <Grid container item xs={12}>
                                        <Grid item xs={6} ><Typography>{time.firstTask}</Typography></Grid>
                                        <Grid item xs={6} ><Typography>{time.secondTask}</Typography></Grid>
                                    </Grid>
                                </Grid>
                            )) : null}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </main>
    )
}

Today.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user,
    data: state.data,
    UI: state.UI
})

export default connect(mapStateToProps, {})(withStyles(styles)(Today));