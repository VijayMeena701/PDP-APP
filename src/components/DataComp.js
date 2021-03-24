import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import ItemComp from "./ItemComp";

const styles = (theme) => ({
	root: {
		// background: theme.palette.primary.dark,
	},
	itemContainer: {
		width: "100%",
		padding: "1em",
	},
});

function DataComp(props) {
	const [loading, setLoading] = useState(true);
	const classes = props.classes;
	const inputData = props.inputData;

	useEffect(() => {
		setLoading(false);
	}, []);

	let dataMarkup = loading ? (
		<>
			<Grid item xs={2}>
				<CircularProgress />
			</Grid>
		</>
	) : (
		inputData.timeofday.map((time, index) => {
			return <ItemComp key={index} time={time} />;
		})
	);
	return (
		<Grid container item xs={12} className={classes.root} justify="center">
			<Grid
				item
				xs={1}
				style={{
					background: "#fff",
					textAlign: "center",
					alignItems: "center",
				}}
			>
				<Typography variant="body2" color="textSecondary">
					{inputData.day}
				</Typography>
			</Grid>
			<Grid container item xs={11} spacing={(1, 0)}>
				{dataMarkup}
			</Grid>
		</Grid>
	);
}

DataComp.propTypes = {
	classes: PropTypes.object.isRequired,
	inputData: PropTypes.object.isRequired,
};

export default withStyles(styles)(DataComp);
