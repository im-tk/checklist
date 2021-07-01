import React from 'react';
import { connect } from 'react-redux';
import { delItem, toggleItem } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Checks icon when clicked
function CheckIcon(props) {
  return (!props.isChecked ? <FontAwesomeIcon className="list-btn-uncheck" icon={['far', 'circle']} size="lg" /> :  <FontAwesomeIcon className="list-btn-check" icon="check-circle" size="lg" />)
}

const ListContainer = ({ list, delItem, toggleItem }) => {
  return (
    <div className="list-container">
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <span 
              onClick={() => toggleItem(index)}>
              <CheckIcon isChecked={item.done} />
            </span>
            <br />
            <span className="list-text">{item.text}</span>
            <span>
              <br />
              <span>{(Date().toLocaleString("en-US"))}</span>
              <span className="list-btn-delete" onClick={() => delItem(index)}> delete</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
//<span className="list-timestamp">{(Date().toLocaleString("en-US"))}</span>

const mapStateToProps = (state) => {
  return {
    list: state.ListReducer.list
  }
}

export default connect(mapStateToProps, { delItem, toggleItem })(ListContainer);