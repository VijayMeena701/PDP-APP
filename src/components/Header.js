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
					<Typography variant="h6" className={classes.title}>
						Homepage
				</Typography>
					<Link to="/" className={classes.btn}>
						<Button color="inherit">Home</Button>
					</Link>
					<Link to="/signin" className={classes.btn}>
						<Button color="inherit">Login</Button>
					</Link>
					<Link to="/signup" className={classes.btn}>
						<Button color="inherit">SignUp</Button>
					</Link>
				</Toolbar>
			</AppBar>
			<SideBar open={open} setOpen={setOpen} />
		</div>
	);
}

Header.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
