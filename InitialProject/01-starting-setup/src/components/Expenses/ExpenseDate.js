import './ExpenseDate.css';

export default function ExpenseDate(props) {
    const mounthsOfYear = [
        'January',
        'Febuary',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'Octuber',
        'November',
        'December'];


    const month = mounthsOfYear[props.date.getMonth()];
    const year = props.date.getFullYear();
    const day = props.date.getDate();

    return (
        <div className="expense-date">
            <div> <h2>{month}</h2></div>
            <div> {year}</div>
            <div className="expense-date__day">{day}</div>
        </div>

    );
}