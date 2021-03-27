const isSelected = (day, value) => value.isSame(day, 'day');
const beforeToday = (day) => day.isBefore(new Date(), 'day');
const isToday = (day) => day.isSame(new Date(), 'day');

const dayStyles = (day, value) => {
    if (isToday(day)) return "today"
    if (isSelected(day, value)) return "selected";
    if (beforeToday(day)) return "before"
    return 'allDays';
};

export default dayStyles;