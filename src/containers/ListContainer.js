import React from 'react';
import { connect } from 'react-redux';
import { delItem, toggleItem } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function CheckIcon(props) {
  return (!props.isChecked ? <FontAwesomeIcon className="list-btn-uncheck" icon={['far', 'circle']} size="lg" /> :  <FontAwesomeIcon className="list-btn-check" icon="check-circle" size="lg" />)
}

/*function formatTimestamp(timestamp){
  let year = timestamp.getFullYear();
  let month = timestamp.getMonth();
  let day = timestamp.getDate();
  let hour = timestamp.getHours();
  let min = timestamp.getMinutes();
  let ampm = hour >= 12 ? "PM" : "AM";
  if (hour > 12) { hour = hour % 12};
  
  return hour + ":" + min + " " + ampm + " " + months[month] + " " + day + ", " + year;   //i.e. 11:10 AM Jul 3, 2021 
}*/

const ListContainer = ({ list, delItem, toggleItem }) => {
  return (
    <div className="list-container">
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <span className="list-text">{item.text}</span>
            <span>
              <br />
              <span
                onClick={() => toggleItem(index)}>
                <CheckIcon isChecked={item.done} />
              </span>
              <span className="list-timestamp">{item.timestamp}</span>
              <span className="list-btn-delete" onClick={() => delItem(index)}> delete</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    list: state.ListReducer.list
  }
}

export default connect(mapStateToProps, { delItem, toggleItem })(ListContainer);