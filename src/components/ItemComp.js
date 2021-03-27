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
		cursor: 'pointer',
	},
});

function ItemComp(props) {
	const time = props.time;
	const classes = props.classes;
	var newColor = randomColor();
	return (
		<Grid
			style={{ background: time ? newColor: '#fff' }}
			item
			xs={2}
			className={classes.itemContainer}
		>
			<p>{time.data1}</p>
			<p>{time.data2}</p>
		</Grid>
	);
}

ItemComp.propTypes = {
	classes: PropTypes.object.isRequired,
	time: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemComp);
