import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
// import DataComp from "../components/DataComp";
import datafromextfile from "./sampledata";
// import { CircularProgress } from "@material-ui/core";
// import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Calendar from '../components/calendar/Calendar';
import { AiOutlinePlus } from 'react-icons/ai';

const styles = (theme) => ({
	root: {
		marginTop: "2em",
		width: "100%",
		"& .container": {
			width: "100%",
			border: "1px solid #000",
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
	// let dataMarkup = loading ? (
	// 	<>
	// 		<Grid item xs={12}>
	// 			<CircularProgress />
	// 		</Grid>
	// 	</>
	// ) : (
	// 	<>
	// 		{weeklyData &&
	// 			weeklyData.map((day, index) => {
	// 				const inputData = day;
	// 				return <DataComp inputData={inputData} key={index} />;
	// 			})}
	// 	</>
	// );
	return (
		<Container maxWidth="lg">
			<CssBaseline />
			<Grid container spacing={2} className={classes.root} justify="center">
				<Grid className="container" item md={3}>
					<Grid item xs={12}>
						<Button startIcon={<AiOutlinePlus />} variant="contained" style={{ borderRadius: '1em', color: '#000' }}>Today</Button>
					</Grid>
					<Grid item xs={12}>
						<Calendar side={true} />
					</Grid>
				</Grid>
				<Grid className="container" item md={9}>
					<Calendar side={false} />
				</Grid>
			</Grid>
		</Container>
	);
}

Home.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
