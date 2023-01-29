import './empty.css';
import DateItem from './date';

const Empty = function(props) {                                
  return (
    <div className="expense-item">
      <div><DateItem date={props.date}/></div>
      <div className="expense-item__description">
        <h2>Car Insurance {props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  )
}
export default Empty;



