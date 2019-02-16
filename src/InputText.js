import React from 'react';
import './index.css';
import FormsyInput from './FormsyInput';
import FormsyTextarea from './FormsyTextarea';
import Formsy from 'formsy-react';

import { connect } from 'react-redux';
import { createTodo } from './actions/todoActions';

class InputText extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todo: '',
      todoDesc:'',
      canSubmit: false
    }
    this.handleTodo = this.handleTodo.bind(this);
    this.handleTodoDesc = this.handleTodoDesc.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
  }
handleTodo(e){
  this.setState({ todo: e.target.value});
}
handleTodoDesc(e){
this.setState({ todoDesc: e.target.value});
}
handleSubmit(){
  if(this.state.todo){
    this.props.handleSubmitPrnt(this.state.todo, this.state.todoDesc);
    this.setState({todo: '', todoDesc:''});
  }
}
//Formsy
disableButton() {
  this.setState({ canSubmit: false });
}

enableButton() {
  this.setState({ canSubmit: true });
}

render(){
  return(
    <Formsy onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
    <div>
      <div className="todoInput">
        <FormsyInput name="todoname" type="text" validations="isExisty" validationError="Todo is Empty" value={this.state.todo} handleTodo={this.handleTodo}  required />
        <FormsyTextarea name="tododesc" validations="isExisty" validationError="Description is Empty" value={this.state.todoDesc} handleTodoDesc={this.handleTodoDesc} required />
      </div>
      <div className="todoBtn">
        <input type="button" onClick={this.handleSubmit} disabled={!this.state.canSubmit}  value="Add Todo" />
      </div>
    </div>
    </Formsy>
  );
}
}

const mapStateToProps = state =>({
todos: state.todos.items
});
//posts from index file

export default connect(mapStateToProps, { createTodo })(InputText);
