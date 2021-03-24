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

const styles = (theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	btn: {
		color: "#fff",
		textDecoration: "none",
	},
});

function Header(props) {
	const classes = props.classes;
	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton
					edge="start"
					className={classes.menuButton}
					color="inherit"
					aria-label="menu"
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" className={classes.title}>
					Homepage
				</Typography>
				<Link to="/signin" className={classes.btn}>
					<Button color="inherit">Login</Button>
				</Link>
				<Link to="/signup" className={classes.btn}>
					<Button color="inherit">SignUp</Button>
				</Link>
			</Toolbar>
		</AppBar>
	);
}

Header.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
