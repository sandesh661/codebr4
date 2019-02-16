import React from 'react';
import './App.css';
import { withFormsy } from 'formsy-react';

  class FormsyTextarea extends React.Component {
    constructor(props) {
      super(props);
      this.changeValue = this.changeValue.bind(this);
    }

    changeValue(event) {
      this.props.handleTodoDesc(event);
    }

    render() {
      const errorMessage = this.props.getErrorMessage();

      return (
        <div>
          <textarea
            name={this.props.name}
            onChange={this.changeValue}
            value={this.props.getValue() || ''}
            className="inputdesc"
          />
            <span>{errorMessage}</span>
          </div>
        );
      }
    }


export default withFormsy(FormsyTextarea);
