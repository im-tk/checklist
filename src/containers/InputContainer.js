import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem } from '../actions';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const placeholderText = ["Do the laundry", "Schedule doctor appointment", "Take out the trash", "Choose recipes to meal prep", "Wash the car"];

class InputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      placeholder: this.randomizePlaceholderText()
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleEnterKey = this.handleEnterKey.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handlePlaceholder = this.handlePlaceholder.bind(this);
    this.randomizePlaceholderText = this.randomizePlaceholderText.bind(this);
  }

  handleChange(e) {
    this.setState({input: e.target.value});
  }

  handleEnterKey(e) {
    if(e.key === 'Enter') this.handleAddItem();
  }

  handleAddItem() {
    let str = this.state.input.trim();

    if(str.length > 0) {
      this.props.addItem(this.state.input);
      this.setState({input: ''});
    }
    this.handlePlaceholder();
  }

  handlePlaceholder() {
    this.setState({placeholder: this.randomizePlaceholderText()})
  }

  randomizePlaceholderText(){
    let i = Math.floor(Math.random() * placeholderText.length);
    return(placeholderText[i] + "...");
  }

  render() {
    return (
      <div className="input-container">
        <div className="input-field">
          <input
            placeholder={this.state.placeholder}
            maxLength="100"
            type="text"
            onChange={this.handleChange}
            onKeyPress={this.handleEnterKey}
            value={this.state.input}>
          </input>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addItem }, dispatch);
}

export default connect(null, mapDispatchToProps)(InputContainer);