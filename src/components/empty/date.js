import './date.css';


function DateItem (props) {
  const date = props.date;

  return (
    <div>
      <div>
        {date}
      </div>
    </div>
  )
}

export default DateItem;