import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme) => ({
    root: {},
})

function EditComp(props) {
    const classes = props.classes;
    return (
        <div>

        </div>
    )
}

EditComp.propTypes = {
    classes: PropTypes.object.isRequired
}

export default EditComp

