import React, { useState } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import img from "../utils/signupbgimg.png";
import LanguageIcon from "@material-ui/icons/Language";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import { connect } from 'react-redux';
import { signupUser } from '../redux/actions/userActions';
import { CircularProgress } from "@material-ui/core";

const styles = (theme) => ({
	root: {
		marginTop: "40px",
		maxHeight: "980px",
	},
	rootLeft: {
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
		display: "flex",
		width: "100%",
		flexDirection: "column",
		"& .signinContainer": {
			display: "flex",
			width: "100%",
			justifyContent: "space-around",
			"& div": {
				display: "flex",
				flexDirection: "row",
				width: "100%",
				gap: "5px",
				height: "max-content",
				"& .typography": {
					display: "flex",
					justifyContent: "space-around",
					alignItems: "center",
					gap: "20px",
					height: "max-content",
				},
			},
		},
	},
	link: {
		textDecoration: "none",
	},
	formContainer: {
		width: "100%",
		margin: "0 auto",
		"& form": {
			display: "flex",
			width: "85%",
			flexDirection: "column",
			justifyContent: "space-around",
			gap: "40px",
			margin: "10em auto 0",
			"& .rowContainer": {
				display: "flex",
				width: "100%",
				justifyContent: "space-between",
			},
		},
	},
});

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<RouterLink to="/">
				<Link component="span" color="textSecondary">
					Your Website
				</Link>
			</RouterLink>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

function Signup(props) {
	const classes = props.classes;
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [email, setEmail] = useState("");
	const [checkState, setCheckState] = useState({
		terms: false,
		privacyPolicy: false,
	});
	const handleChange = (e) => {
		setCheckState({ ...checkState, [e.target.name]: e.target.checked });
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		const newUserData = {
			email: email,
			password: password,
			firstName: firstName,
			lastName: lastName,
			confirmPassword: confirmPassword,
			handle: firstName + lastName,
		};
		const history = props.history;
		props.signupUser(newUserData, history);

	};
	return (
		<Container component="main" maxWidth="lg">
			<CssBaseline />
			<Grid container spacing={2} className={classes.root} justify="center">
				<Grid item={true} md={6} className={classes.rootLeft}>
					<img src={img} alt="signupimg" />
				</Grid>
				<Grid item={true} md={6} xs={12} className={classes.rootRight}>
					<div className="signinContainer">
						<div>
							<Typography
								className="typography"
								variant="body1"
								color="textSecondary"
							>
								<LanguageIcon />
								{""}
								{" English"}
								<KeyboardArrowDownIcon />
							</Typography>
						</div>
						<div>
							<Typography
								className="typography"
								variant="body1"
								color="textSecondary"
							>
								{"Already Have an Account?"}
								{""}
								<RouterLink to="/signin" className={classes.link}>
									<Button variant="contained">LOGIN</Button>
								</RouterLink>
							</Typography>
						</div>
					</div>
					<div className={classes.formContainer}>
						<form onSubmit={handleSubmit}>
							<div className="rowContainer">
								<TextField
									InputProps={{ className: classes.input }}
									variant="outlined"
									type="text"
									label="First Name"
									name="firstName"
									autoFocus
									required
									color="primary"
									onChange={(e) => setFirstName(e.target.value)}
								/>
								<TextField
									InputProps={{ className: classes.input }}
									variant="outlined"
									type="text"
									label="Last Name"
									name="lastName"
									required
									color="primary"
									onChange={(e) => setLastName(e.target.value)}
								/>
							</div>
							<TextField
								InputProps={{ className: classes.input }}
								variant="outlined"
								type="email"
								label="Email"
								name="email"
								required
								error={props.UI.errors ? props.UI.errors.message ? true : false : false}
								helperText={props.UI.errors ? props.UI.errors.message : null}
								color="primary"
								onChange={(e) => setEmail(e.target.value)}
							/>
							<TextField
								InputProps={{ className: classes.input }}
								variant="outlined"
								type="password"
								label="Password"
								name="password"
								required
								color="primary"
								helperText={props.UI.errors}
								error={props.UI.errors ? true : false}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<TextField
								InputProps={{ className: classes.input }}
								variant="outlined"
								type="password"
								label="Confirm Password"
								name="confirmPassword"
								helperText={props.UI.errors}
								error={props.UI.errors ? true : false}
								required
								color="primary"
								onChange={(e) => setConfirmPassword(e.target.value)}
							/>
							<FormControlLabel
								value="start"
								control={<Checkbox required color="primary" name="terms" onChange={(e) => handleChange(e)} />}
								label="I Agree to SuDoIt’s Terms and Conditions"
							/>
							<FormControlLabel
								value="start"
								error={props.UI.errors ? true : false}
								control={<Checkbox required color="primary" name="privacyPolicy" onChange={(e) => handleChange(e)} />}
								label="I accept to SuDoIt’s use of my data for the service and everything else described in Privacy Policy"
							/>
							<Button
								variant="contained"
								type="submit"
								color="secondary"
							>
								{!props.UI.loading ? 'Create my Account' : <CircularProgress />}
							</Button>
						</form>
					</div>
				</Grid>
				<Box mt={8}>
					<Copyright />
				</Box>
			</Grid>
		</Container>
	);
}

Signup.propTypes = {
	classes: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired,
	signupUser: PropTypes.func.isRequired,
	UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	user: state.user,
	UI: state.UI,
})

export default connect(mapStateToProps, { signupUser })(withStyles(styles)(Signup));
