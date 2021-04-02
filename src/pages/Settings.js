import React, { useState } from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles';
import { Grid, useTheme, Tabs, Tab, Typography, Avatar, Button, TextField, MenuItem } from '@material-ui/core'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SwipeableViews from 'react-swipeable-views';
import { updateprofile } from '../redux/actions/userActions';

const styles = (theme) => ({
    root: {
        marginTop: '3em',
        width: '100%',
        // border: '1px solid #000',
    },
    tabsRoot: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 'max-content'
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    tbsContainer: {
        width: '100%',
        height: '100%',
        padding: '0 1em'
    }
})


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

function VerticalTabs(props) {
    // const { name, job, hobby, position, rank } = props.userData;
    const classes = props.classes;
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    // eslint-disable-next-line
    const [imgUrl, setImgUrl] = useState(props.user.credentials ? props.user.credentials.imageUrl : "");

    const [userData, setUserData] = useState(props.user.credentials ? { ...props.user.credentials } : null)

    const [currentTask, setCurrentTask] = useState('');
    // const [file, setFile] = useState(null);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const handleSubmitGeneral = (e) => {
        e.preventDefault();
        const newUserData = {
            ...props.user.credentials,
            ...userData,
        };
        props.updateprofile(props.user.credentials.userId, newUserData);
    }
    const handleSubmitAccount = (e) => {
        e.preventDefault();
        const newUserData = {
            ...props.user.credentials,
            ...userData,
        };
        props.updateprofile(props.user.credentials.userId, newUserData);
    }
    const handleSubmitTask = (e) => {
        e.preventDefault();
        const newUserData = {
            ...props.user.credentials,
            ...userData,
        };
        props.updateprofile(props.user.credentials.userId, newUserData);
    }

    const handleTaskChange = (e) => {
        setCurrentTask(e.target.value);
    };

    const handleProfilePicUpdate = () => {
        alert("clicked");
    }

    return (
        <div className={classes.tabsRoot}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                orientation="vertical"
                variant="scrollable"
                aria-label="vertical tabs"
                className={classes.tabs}
            >
                <Tab label="General" {...a11yProps(0)} />
                <Tab label="Account" {...a11yProps(1)} />
                <Tab label="Task" {...a11yProps(2)} />
            </Tabs>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                className={classes.tbsContainer}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant="h4" color="textSecondary" style={{ fontWeight: 'bold', fontSize: '2em', padding: '0 1em' }}>Profile</Typography>
                            <Typography variant="body2" color="textSecondary" style={{ fontWeight: 'bold', padding: '0 1em' }}>Control your profile information, both what it says and what other people see. User profiles are shown across all Disqus sites. To understand what's acceptable to display on profiles, please see these rules.</Typography>
                        </Grid>
                        <Grid container item style={{ marginTop: '1em' }} xs={12}>
                            <form style={{ display: 'block', width: '100%', height: '100%' }} onSubmit={(e) => handleSubmitGeneral(e)}>
                                <Grid container item xs={12} justify="center" spacing={2}>
                                    <Grid container justify="space-evenly" item xs={12} style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                        <Grid item xs={2}>
                                            <Avatar src={imgUrl} style={{ height: '10rem', width: '10rem' }} />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <input hidden ></input>
                                            <Button onClick={handleProfilePicUpdate} variant="contained" color="secondary" >Change Profile Pic</Button>
                                        </Grid>
                                    </Grid>
                                    <Grid container justify="space-evenly" item xs={12} style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                        <Grid item xs={2}>
                                            <Typography variant="body1">Name</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField fullWidth name="name" value={userData.name} onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}></TextField>
                                        </Grid>
                                    </Grid>
                                    <Grid container justify="space-evenly" item xs={12} style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                        <Grid item xs={2}>
                                            <Typography variant="body1">Biography</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField fullWidth name="bio" value={userData.bio} onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}></TextField>
                                        </Grid>
                                    </Grid>
                                    <Grid container justify="space-evenly" item xs={12} style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                        <Grid item xs={2}>
                                            <Typography variant="body1">Hobby</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField fullWidth name="hobby" value={userData.hobby} onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}></TextField>
                                        </Grid>
                                    </Grid>
                                    <Grid container justify="space-evenly" item xs={12} style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                        <Grid item xs={2}>
                                            <Typography variant="body1">Job</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField fullWidth name="job" value={userData.job} onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}></TextField>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button type="submit" variant="contained" color="primary" >Save</Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant="h4" color="textSecondary" style={{ fontWeight: 'bold', fontSize: '2em', padding: '0 1em' }}>Account</Typography>
                            <Typography variant="body2" color="textSecondary" style={{ fontWeight: 'bold', padding: '0 1em' }}>Change your basic account information.</Typography>
                        </Grid>
                        <Grid container style={{ marginTop: '1em' }} item xs={12}>
                            <form style={{ display: 'block', width: '100%', height: '100%' }} onSubmit={(e) => handleSubmitAccount(e)}>
                                <Grid container item xs={12} justify="center" spacing={2}>
                                    <Grid container justify="space-evenly" item xs={12} style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                        <Grid item xs={2}>
                                            <Typography variant="body1">UserName</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField fullWidth name="handle" variant="outlined" value={userData.handle} onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}></TextField>
                                        </Grid>
                                    </Grid>
                                    <Grid container justify="space-evenly" item xs={12} style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                        <Grid item xs={2}>
                                            <Typography variant="body1">Email</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField fullWidth disabled variant="outlined" value={userData.email}></TextField>
                                        </Grid>
                                    </Grid>
                                    <Grid container justify="space-evenly" item xs={12} style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                        <Grid item xs={2}>
                                            <Typography variant="body1">Password</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField type="password" fullWidth disabled variant="outlined" value={userData.password}></TextField>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button type="submit" variant="contained" color="primary" >Save</Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant="h4" color="textSecondary" style={{ fontWeight: 'bold', fontSize: '2em', padding: '0 1em' }}>Tasks</Typography>
                            <Typography variant="body2" color="textSecondary" style={{ fontWeight: 'bold', padding: '0 1em' }}>Manage your Tasks recommendations here.</Typography>
                        </Grid>
                        <Grid container style={{ marginTop: '1em' }} item xs={12}>
                            <form style={{ display: 'block', width: '100%', height: '100%' }} onSubmit={(e) => handleSubmitTask(e)}>
                                <Grid container item xs={12} justify="center" spacing={2}>
                                    <Grid container justify="space-evenly" item xs={12} style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                        <Grid item xs={2}>
                                            <Typography variant="body1">Select First Task</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField fullWidth variant="outlined" defaultValue="No Data available"></TextField>
                                        </Grid>
                                    </Grid>
                                    <Grid container justify="space-evenly" item xs={12} style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                        <Grid item xs={2}>
                                            <Typography variant="body1">Select Second Task</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField fullWidth disabled variant="outlined" defaultValue="No Data available"></TextField>
                                        </Grid>
                                    </Grid>
                                    <Grid container justify="space-evenly" item xs={12} style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                        <Grid item xs={2}>
                                            <Typography variant="body1">Select Your Favourite Task</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField fullWidth disabled variant="outlined" value={currentTask} onChange={(e) => handleTaskChange(e)} >
                                                {props.data ? props.data.tasks.list.map((task) => (<MenuItem key={task} value={task}>{task}</MenuItem>)) : "No Tasks for you"}
                                            </TextField>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button type="submit" variant="contained" color="primary" >Save</Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </TabPanel>
            </SwipeableViews>
        </div >
    );
};

VerticalTabs.propTypes = {
    classes: PropTypes.object.isRequired,
    updateprofile: PropTypes.func.isRequired
}



function Settings(props) {
    const classes = props.classes;
    return (
        <Grid container className={classes.root} justify="center">
            <Grid item xs={12}>
                <VerticalTabs updateprofile={props.updateprofile} user={props.user} classes={classes} />
            </Grid>
            <Grid item xs={9}></Grid>
        </Grid>
    )
}

Settings.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    updateprofile: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI,
    data: state.data
})

export default connect(mapStateToProps, { updateprofile })(withRouter(withStyles(styles)(Settings)));