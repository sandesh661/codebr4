import React from 'react';
import './App.css';
import { withFormsy } from 'formsy-react';

class FormsyInput extends React.Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(event) {
    this.props.handleTodo(event);
  }

  render() {
    const errorMessage = this.props.getErrorMessage();

    return (
      <div>
        <input
          name={this.props.name}
          onChange={this.changeValue}
          type={this.props.type}
          value={this.props.getValue() || ''}
        />
          <span>{errorMessage}</span>
        </div>
      );
    }
  }


export default withFormsy(FormsyInput);
