import React, { useState } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import img from "../utils/signupbgimg.png";
import LanguageIcon from "@material-ui/icons/Language";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

const styles = (theme) => ({
	root: {
		height: "100vh",
	},
	rootLeft: {
		border: "1px solid #000",
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
		"& img": {
			width: "100%",
			objectFit: "contain",
			height: "100%",
		},
	},
	rootRight: {
		border: "1px solid #000",
		alignItems: "stretch",
	},
	link: {
		textDecoration: "none",
	},
	form: {
		display: "flex",
		width: "100%",
		flexDirection: "column",
		justifyContent: "center",
		margin: "0 auto",
		"& div": {
			display: "flex",
			flexDirection: "row",
			gap: "20px",
		},
	},
});

function Signup(props) {
	const classes = props.classes;
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [password, setPassword] = useState("");
	return (
		<Container component="main" maxWidth="lg">
			<CssBaseline />
			<Grid container spacing={2} className={classes.root} justify="center">
				<Grid item={true} md={6} className={classes.rootLeft}>
					<img src={img} alt="signupimg" />
				</Grid>
				<Grid
					item={true}
					container
					spacing={0}
					md={6}
					xs={12}
					className={classes.rootRight}
				>
					<div style={{ border: "2px solid #000" }}>
						<div>
							<Typography
								variant="body1"
								color="textSecondary"
								style={{ display: "flex", gap: "5px", height: "max-content" }}
							>
								<LanguageIcon />
								{""}
								{" English"}
								<KeyboardArrowDownIcon />
							</Typography>
						</div>
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								width: "100%",
								gap: "5px",
								height: "max-content",
							}}
						>
							<Typography variant="body1" color="textSecondary">
								{"Already Have an Account?"}
								{""}
								<RouterLink to="/signin" className={classes.link}>
									<Button variant="contained">LOGIN</Button>
								</RouterLink>
							</Typography>
						</div>
					</div>
					<div style={{ border: "2px solid #000" }}>
						<form className={classes.form}>
							<div>
								<TextField
									InputProps={{ className: classes.input }}
									variant="filled"
									type="email"
									label="First Name"
									name="email"
									autoFocus
									required
									color="primary"
									onChange={(e) => setFirstName(e.target.value)}
								/>
								<TextField
									InputProps={{ className: classes.input }}
									variant="filled"
									type="password"
									label="Last Name"
									name="password"
									required
									color="primary"
									onChange={(e) => setLastName(e.target.value)}
								/>
							</div>
						</form>
					</div>
				</Grid>
			</Grid>
		</Container>
	);
}

Signup.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Signup);
