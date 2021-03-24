import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import DataComp from "../components/DataComp";
import datafromextfile from "./sampledata";
import { CircularProgress } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
	root: {
		marginTop: "2em",
		width: "100%",
		"& .container": {
			width: "100%",
			// border: "2px solid #000",
			"&:nth-child(1)": {
				[theme.breakpoints.down("md")]: {
					display: "none",
				},
			},
		},
	},
});

function Home(props) {
	const classes = props.classes;
	const [weeklyData, setWeeklyData] = useState(null);
	const [loading, setLoading] = useState(true);
	const fetchData = async () => {
		const datalink = datafromextfile;
		setWeeklyData(datalink);
		setLoading(false);
	};
	useEffect(() => {
		setLoading(true);
		fetchData();
	}, []);
	let dataMarkup = loading ? (
		<>
			<Grid item xs={12}>
				<CircularProgress />
			</Grid>
		</>
	) : (
		<>
			{weeklyData &&
				weeklyData.map((day, index) => {
					const inputData = day;
					return <DataComp inputData={inputData} key={index} />;
				})}
		</>
	);
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="lg">
				<Grid container spacing={2} className={classes.root} justify="center">
					<Grid className="container" item md={3}></Grid>
					<Grid className="container" item md={9}>
						<Grid container spacing={2}>
							<Grid Grid container item xs={12} justify="center">
								<Grid item xs={1} style={{ background: "#fff" }}>
									<Typography variant="body2" color="textSecondary">
										{"Day"}
									</Typography>
								</Grid>
								<Grid
									container
									item
									xs={11}
									spacing={(1, 0)}
									style={{ background: "#a0a0a0", padding: "1em" }}
								>
									<Grid item xs={2}>
										Early Morning
									</Grid>
									<Grid item xs={2}>
										Morning
									</Grid>
									<Grid item xs={2}>
										Afternoon
									</Grid>
									<Grid item xs={2}>
										Evening
									</Grid>
									<Grid item xs={2}>
										Night
									</Grid>
									<Grid item xs={2}>
										Late Night
									</Grid>
								</Grid>
							</Grid>
							{dataMarkup}
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</React.Fragment>
	);
}

Home.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
