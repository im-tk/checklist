import React, {Component} from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.handleChange = this.handleInputChange.bind(this);
    this.handleEnterKey = this.handleEnterKey.bind(this);
    this.handleAddItem = this.handleAddList.bind(this);
  }

  handlehange(e) {
    this.setState({input: e.target.value});
  }

  handleEnterKey(e) {
    console.log("I hit enter!");
    if(e.key === 'Enter') this.handleAddList();
  }

  handleAddList() {
    if(this.state.input.length > 0) {
      this.props.addList(this.state.input);
      this.setState({input: ''});
    }
  }

  render() {
    return (
    <div>
      <h3>Checklist</h3>
      <input
        placeholder="What do we have on our plate today?"
        onChange={this.handleChange}
        onKeyPress={this.handleEnterKey}
        value={this.state.inputList}
      >
      </input>
    </div>  
    );
  }

}
export default List;