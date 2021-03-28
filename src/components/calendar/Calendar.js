import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import moment from 'moment';
import buildCalendar from './build';
import dayStyles from './dayStyles';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeft from '@material-ui/icons/ChevronLeftRounded';
import ChevronRight from '@material-ui/icons/ChevronRightRounded';
import Typograpy from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Popup from './Popup';


const styles = (theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        '& .dayNames': {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            textAlign: 'center',
            margin: '1em 0',
        },
    },
    week: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    day: {
        display: 'block',
        width: "100%",
        fontSize: '10px',
        textAlign: 'center',
        zIndex: '1',
        boxSizing: 'border-box',
        '& .selected': {
            backgroundColor: theme.palette.primary.light,
            padding: 'auto',
            color: theme.palette.text.primary,
            fontSize: '10px'
        },
        '& .before': {
            padding: 'auto',
            color: 'gray',
            fontSize: '10px'
        },
        '& .today': {
            padding: 'auto',
            color: '#fff',
            backgroundColor: theme.palette.primary.main,
            fontSize: '10px'
        },
        '& .allDays': {
            padding: 'auto',
            fontSize: '10px',
            color: theme.palette.text.primary
        }
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '5px auto',
        width: '100%',
        '& .typography': {
            fontSize: '1em',
            marginLeft: '15px',
            fontWeight: 'bold'
        },
        '& .navContainer': {
            fontSize: '1em'
        }
    },
    rightWeek: {
        display: 'block',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        '& .selected': {
            // padding: '1em 2em',
            width: '100%',
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.text.primary,
            fontSize: '1em'
        },
        '& .before': {
            // padding: '1em 2em',
            color: 'gray',
            fontSize: '1em'
        },
        '& .today': {
            // padding: '1em 2em',
            color: '#fff',
            backgroundColor: theme.palette.primary.main,
            fontSize: '1em'
        },
        '& .allDays': {
            // padding: '1em 2em',
            fontSize: '1em',
            color: theme.palette.text.primary
        },
        '& .weekDays': {
            width: '100%',
            height: '6em',
        }
    },
    gridContainer: {
        width: '100%',
        height: '100%',
    }
});
const ref = React.createRef();
const newref = React.createRef();
const PreviousMonth = React.forwardRef((props, ref) => {
    return <IconButton component="span" {...props} ref={ref}><ChevronLeft /></IconButton>
})
const NextMonth = React.forwardRef((props, ref) => {
    return <IconButton component="span" {...props} ref={ref}><ChevronRight /></IconButton>
})

function Calendar(props) {
    const classes = props.classes;
    const [calendar, setCalendar] = useState([]);
    const [value, setValue] = useState(moment());
    const [openPopup, setOpenPopup] = useState(false);
    const [title, setTitle] = useState('newTitle');
    const [loading, setLoading] = useState(false);
    const [cardData, setCardData] = useState({ date: '', time: '', title: '', description: '', type: '' });

    useEffect(() => {
        setCalendar(buildCalendar(value));
    }, [value]);

    const currMonthName = () => value.format("MMMM");
    const currMonthYear = () => value.format("YYYY");
    const prevMonth = () => value.clone().subtract(1, 'month');
    const nextMonth = () => value.clone().add(1, 'month');
    const isSingleDigit = (val) => {
        if (/^\d$/.test(val)) return true;
        else return false;
    }

    const handleClick = (day) => {
        setValue(day);
        setOpenPopup(true);
        setTitle(`Add Event for ${day.format("DD MMM")}`);
        setCardData({ ...cardData, date: day.format("YYYY-MM-DD"), time: `${dayStyles(day, value) === "today" ? moment().clone().format("HH:mm").toString() : '00:00'}` });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const { date, time, title, description, type } = cardData;
        const dataSet = {
            date,
            time,
            title,
            description,
            type,
        }
        setLoading(true);
        /// send the data from here and then setLoading back to false;
    }

    return (
        <>
            {props.side ? (
                <div className={classes.root}>
                    <div className={classes.header}>
                        <Typograpy className="typography" >{currMonthName()} {currMonthYear()}</Typograpy>
                        <div className='navContainer'>
                            <Tooltip title="Previous Month">
                                <PreviousMonth ref={ref} onClick={() => setValue(prevMonth())} />
                            </Tooltip>
                            <Tooltip title="Next Month">
                                <NextMonth ref={newref} onClick={() => setValue(nextMonth())} />
                            </Tooltip>
                        </div>
                    </div>
                    <div className={classes.body}>
                        <div className="dayNames">
                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => <div key={index} className="week">{day}</div>)}
                        </div>
                        {calendar.map((week, index) => <div key={index} className={classes.week}>
                            {week.map((day, index) => <div key={index} onClick={() => setValue(day)} className={classes.day}>
                                <IconButton className={`${dayStyles(day, value)}`}>{isSingleDigit(day.format("D").toString()) ? `${'\u00A0'}${day.format("D").toString()}${'\u00A0'}` : day.format("D").toString()}</IconButton>
                            </div>)}
                        </div>)}
                    </div>
                </div>
            ) : (
                <div className={classes.root}>
                    <div className={classes.body}>
                        <div className="dayNames">
                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => <div key={index} className="week">{day}</div>)}
                        </div>
                        <Grid container justify="center" className={classes.gridContainer}>
                            {calendar.map((week, index) => <Grid container item justify="space-evenly" xs={12} key={index}>
                                {week.map((day, index) => <Grid item xs key={index} onClick={() => handleClick(day)} className={classes.rightWeek}>
                                    <Paper elevation={3} variant="outlined" className="weekDays">
                                        <Typograpy className={`${"weekDays"} ${dayStyles(day, value)}`}>{isSingleDigit(day.format("MMM DD").toString()) ? `${'\u00A0'}${day.format("D").toString()}${'\u00A0'}` : day.format("MMM DD").toString()}</Typograpy>
                                    </Paper>
                                </Grid>)}
                            </Grid>)}
                        </Grid>
                    </div>
                    <Popup loading={loading} handleSubmit={handleSubmit} cardData={cardData} setCardData={setCardData} title={title} openPopup={openPopup} setOpenPopup={setOpenPopup} />
                </div>
            )
            }
        </>
    )
}

Calendar.propTypes = {
    classes: PropTypes.object.isRequired,
    side: PropTypes.bool.isRequired,
}

export default withStyles(styles)(Calendar);

