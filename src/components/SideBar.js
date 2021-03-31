import React from 'react'
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { useTheme, Drawer, IconButton, Divider, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { ChevronRight as ChevronRightIcon, ChevronLeft as ChevronLeftIcon, Inbox as InboxIcon, Mail as MailIcon, } from '@material-ui/icons';
import clsx from 'clsx';
import SignIn from "../pages/SignIn";
import SignUp from "../pages/Signup";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Profile from '../pages/Profile';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import SettingsIcon from '@material-ui/icons/Settings';
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from 'react-redux';

const drawerWidth = 240

const styles = (theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    toolbarCont: {
        // ...theme.mixins.toolbar,
        marginTop: '2em',
        padding: '0.1em 0'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
});



function SideBar(props) {
    const classes = props.classes;
    const { open, setOpen, history } = props;

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const theme = useTheme();
    const itemList = [
        {
            text: 'Home',
            icon: <HomeIcon />,
            onClick: () => history.push('/'),
        },
        {
            text: 'User',
            icon: <PersonIcon />,
            onClick: () => history.push('/user'),
        },
        {
            text: 'Calendar',
            icon: <CalendarTodayIcon />,
            onClick: () => history.push('/calendar'),
        },
        {
            text: 'Rewards',
            icon: <CardGiftcardIcon />,
            onClick: () => history.push('/rewards'),
        },
        {
            text: 'Settings',
            icon: <SettingsIcon />,
            onClick: () => history.push('/settings'),
        }
    ]
    return (
        <>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {itemList.map((item, index) => {
                        const { text, icon, onClick } = item;
                        return (
                            <ListItem button key={text} onClick={onClick}>
                                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                                <ListItemText primary={text} />
                            </ListItem>
                        )
                    })}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbarCont} />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/user" component={Profile} />
                    <Route exact path="/signin" component={SignIn} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="*" component={Error} />
                </Switch>
            </main>
        </>
    )
}

SideBar.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps, {})(withRouter(withStyles(styles)(SideBar)));