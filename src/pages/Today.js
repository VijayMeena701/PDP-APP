import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import { Container, Grid, Typography } from '@material-ui/core';
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
        <main className={classes.root} >
            <Container maxWidth="lg">
                <Grid className={classes.containerClass} container spacing={2} justify="space-around">
                    <Grid container style={{ border: '1px solid', height: '100%' }} item xs={12} sm={3}>
                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                            <Typography style={{ fontWeight: 'bold', fontSize: '2.5em' }} variant="h4" >{moment().clone().format("D MMMM YYYY")}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1" >{moment().clone().format("D MMMM YYYY")}</Typography>
                        </Grid>
                    </Grid>
                    <Grid style={{ border: '1px solid' }} item xs={12} sm={8}>
                        <Grid container item xs={12} style={{ textAlign: 'center' }}>
                            <Typography style={{ textAlign: 'center', width: '100%', background: 'green' }} >{"Early Morning"}</Typography>
                            <Grid item xs={12}>
                                {todayData !== null ? todayData.map(time => (<Typography>{time.firstTask}</Typography>)) : null}
                            </Grid>
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