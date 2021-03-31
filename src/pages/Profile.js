import React from 'react'
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Container, Grid, Typography, useTheme } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import { FaMedal } from 'react-icons/fa';
import { FcLineChart } from "react-icons/fc";
import image from './utility/image 6.jpg';

const styles = (theme) => ({
    root: {
        marginTop: '1em',
        // border: '1px solid #000'
    },
    imgContainer: {
        width: '100%',
        height: '40vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'url(https://source.unsplash.com/random/1366x768)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        '& img': {
            width: '100%',
            objectFit: 'cover'
        }
    },
    profilePicContainer: {
        border: '5px solid #fff',
        width: '10em',
        height: '10em',
        margin: 'auto',
        marginBottom: '-10em',
        borderRadius: '50%',
        "& img": {
            width: '100%',
            objectFit: 'cover',
            borderRadius: '50%',
        }
    },
    profileData: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0 1em'
        // justifyContent: 'center',
        // alignItems: 'center',
        // textAlign: 'center',
    }
});


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (<>
                { children}
            </>)}
        </div>
    );
};

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
};

function FullWidthTabs(props) {
    // const { name, job, hobby, position, rank } = props.userData;
    console.log(props)
    const classes = props.classes;
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div style={{ marginTop: '2em' }}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="General" {...a11yProps(0)} />
                    <Tab label="Private" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Grid container item className={classes.profileData} style={{ marginTop: '1.5em' }} xs={12}>
                        <Grid item container xs={12} >
                            <Grid item xs={3}>
                                <Typography variant="h5">{"Name"}</Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography color="textSecondary" variant="h5">:&nbsp;{"Vijay Meena"}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item container xs={12} >
                            <Grid item xs={3}>
                                <Typography variant="body1">{"Job"}</Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography color="textSecondary" variant="body1">:&nbsp;{"Computer Science Engineer"}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item container xs={12} >
                            <Grid item xs={3}>
                                <Typography variant="body1">{"Hobby"}</Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography color="textSecondary" variant="body1">:&nbsp;{"Tech Geek"}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item container xs={12} >
                            <Grid item xs={3}>
                                <FcLineChart size={20} />
                            </Grid>
                            <Grid item xs={9}>
                                <Typography color="textSecondary" variant="body1">:&nbsp;{"102485"}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item container xs={12} >
                            <Grid item xs={3}>
                                <FaMedal size={20} style={{ color: '#CD7F32' }} />
                            </Grid>
                            <Grid item xs={9}>
                                <Typography color="textSecondary" variant="body1">:&nbsp;{" BRONZE"}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    Item Two
          </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    Item Three
          </TabPanel>
            </SwipeableViews>
        </div>
    );
};

FullWidthTabs.propTypes = {
    classes: PropTypes.object.isRequired,
    userData: PropTypes.object.isRequired,
}

function Profile(props) {
    const classes = props.classes;
    const userData = props.userData;
    return (
        <Container maxWidth="lg" className={classes.root}>
            <Grid container spacing={1} justify="center">
                <Grid container item xs={12}>
                    <Grid container justify="center" className={classes.imgContainer}>
                        <Grid item xs />
                        <Grid item xs>
                            <div className={classes.profilePicContainer}>
                                <img src={image} alt={image} ></img>
                            </div>
                        </Grid>
                        <Grid item xs />
                    </Grid>
                    <Grid container justify="center" item xs={12} className={classes.profileContainer}>
                        {/* <Grid item xs />
                        <Grid item xs /> */}
                        <FullWidthTabs userData={userData} classes={classes} />
                    </Grid>
                </Grid>
                <Grid item xs={12}></Grid>
            </Grid>
        </Container>
    )
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
    userData: PropTypes.object.isRequired,
}

export default withStyles(styles)(Profile);