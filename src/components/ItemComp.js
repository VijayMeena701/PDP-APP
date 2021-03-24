import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import randomColor from "randomcolor";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = (theme) => ({
	itemContainer: {
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
	},
});

function ItemComp(props) {
	const time = props.time;
	const classes = props.classes;
	var newColor = randomColor();
	return (
		<Grid
			style={{ background: newColor }}
			item
			xs={2}
			className={classes.itemContainer}
		>
			<div>{time.data1}</div>
			<div>{time.data2}</div>
		</Grid>
	);
}

ItemComp.propTypes = {
	classes: PropTypes.object.isRequired,
	time: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemComp);
