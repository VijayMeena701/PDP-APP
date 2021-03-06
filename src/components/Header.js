import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import SideBar from './SideBar';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { logout } from '../redux/actions/userActions';
import { CircularProgress, Avatar } from "@material-ui/core";
import moment from 'moment';

const styles = (theme) => ({
	root: {
		display: 'flex',
		flexGrow: 1,
	},
	menuButton: {
		marginRight: 36,
	},
	hide: {
		display: 'none',
	},
	title: {
		flexGrow: 1,
	},
	btn: {
		color: "#fff",
		textDecoration: "none",
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: 240,
		width: `calc(100% - ${240}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
});

function Header(props) {
	const classes = props.classes;
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};
	return (
		<div className={classes.root}>
			<AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}>
				<Toolbar>
					<IconButton
						edge="start"
						className={clsx(classes.menuButton, {
							[classes.hide]: open,
						})}
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
					>
						<MenuIcon />
					</IconButton>
					{
						!props.UI.loading ? <Typography variant="h6" className={classes.title}>
							{props.user.authenticated && props.user.credentials ? `${props.user.credentials.handle}` : "SUDOIT"}
						</Typography> : <div className={classes.title}><CircularProgress color="secondary" /></div>
					}
					{
						!props.UI.loading ? <Typography variant="h6" className={classes.title}>
							{props.user.credentials && props.user.authenticated ? `${moment().clone().format("MMMM YYYY")}` : null}
						</Typography> : <div className={classes.title}><CircularProgress color="secondary" /></div>
					}
					<Link to="/" className={classes.btn}>
						<Button color="inherit">Home</Button>
					</Link>
					{!props.user.authenticated ?
						<Link to="/signin" className={classes.btn}>
							<Button color="inherit">Login</Button>
						</Link> : <Button color="inherit" onClick={() => props.logout(props.history)} >{"Logout"}</Button>
					}
					{!props.user.authenticated ? null : <Button color="inherit" ><Avatar src={props.user.credentials.imageUrl} ></Avatar></Button>
					}
					{!props.user.authenticated ?
						<Link to="/signup" className={classes.btn}>
							<Button color="inherit">SignUp</Button>
						</Link> : null
					}
				</Toolbar>
			</AppBar>
			<SideBar open={open} setOpen={setOpen} />
		</div>
	);
}

Header.propTypes = {
	classes: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired,
	UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	user: state.user,
	UI: state.UI,
})

export default connect(mapStateToProps, { logout })(withStyles(styles)(Header));
